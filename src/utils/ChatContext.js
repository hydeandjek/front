import { Client } from '@stomp/stompjs';
import React, { memo, useContext, useEffect, useRef, useState } from 'react';
import SockJS from 'sockjs-client';
import { chatBackEndHostName, API_BASE_URL } from '../config/host-config';
import AuthContext, { getLoginUserInfo } from './AuthContext';

const stompConfig = {
  // If disconnected, it will retry after 1000ms
  reconnectDelay: 1000,
  heartbeatIncoming: 4000,
  heartbeatOutgoing: 4000,
};

let stompClient = new Client(stompConfig);

// 새로운 전역 컨텍스트 생성
// 채팅 연결
const ChatContext = React.createContext({
  isOpen: false,
  connectState: 0, // 0: 연결 중 아님, 1: 연결 , 10: 연결 실패, 11: 토큰오류
  userName: '',
  messageList: [],
  setIsOpen: (flag) => {},
  onSendMessage: (message) => {},
  onSendMessage2: (name, message) => {},
  onDisconnectServer: () => {},
});

const _messageList = [];

// 위에서 생성한 Context를 제공할 수 있는 provider
export const ChatContextProvider = (props) => {
  const { token } = getLoginUserInfo();
  const { userName } = useContext(AuthContext);
  const [isOpen, _setIsOpen] = useState(false);
  const [connectState, _setConnectState] = useState(0);
  const [messageListChat, setMessageListChat] = useState(_messageList);
  const [roomId, setRoomId] = useState(localStorage.getItem('CHAT_ROOMID'));

  let conn_count = 1;

  const Headers = token ? { Authorization: token } : {};
  const HeadersFetch = token ? { Authorization: 'Bearer ' + token } : {};

  stompClient.connectHeaders = Headers;

  stompClient.debug = (str) => {
    console.log('STOMP: ' + str);
  };

  stompClient.onConnect = (frame) => {
    onConnected(frame);
    setConnectState(1);
  };

  stompClient.onStompError = (frame) => {
    console.log(`onStompError: `, frame.headers);
    const message = frame.headers['message'];
    if (message.includes('토큰 없음')) {
      console.log('토큰 없음');
      addMessageList('로그인이 필요합니다.');
      setError(11);
      return;
    }
    if (message.includes('토큰이 잘못됨')) {
      console.log(message);
      addMessageList('로그인이 필요합니다.');
      setError(11);
      return;
    }
  };

  stompClient.beforeConnect = () => {
    console.log(conn_count++);
    if (conn_count > 5) {
      console.log('reconnect limit!');
      conn_count = 0;
      setError(10);
    }
  };

  stompClient.onDisconnect = (frame) => {
    console.log(`disconnect: ${frame}`);
  };

  useEffect(() => {
    console.log(isOpen);
    if (isOpen) {
      if (connectState) {
        setConnectState(0);
        stompClient.deactivate();
        setMessageListChat([]);
      }
      stompClient.webSocketFactory = () => new SockJS(chatBackEndHostName);
      stompClient.activate();
    }
  }, [isOpen, userName]);

  const setIsOpen = (flag) => {
    setTimeout(() => _setIsOpen(flag));
  };
  const setConnectState = (flag) => {
    setTimeout(() => _setConnectState(flag));
  };

  const setError = (errCode) => {
    stompClient.deactivate();
    setConnectState(errCode);
  };

  const disconnectServer = () => {
    setConnectState(0);
    stompClient.deactivate();
  };

  const onMessageReceived = (e) => {
    console.log(e);
    const json = JSON.parse(e.body);
    console.log('body:', json);
    const type = json.type;
    console.log(type);
    if (type === 'TALK') {
      const userName = json.userName;
      const message = json.message;

      const strMessage = `${userName}: ${message}`;
      console.log(strMessage);

      addMessageList(strMessage);

      //setMessageList((prev) => [...prev, strMessage]);
    }
  };

  const addMessageList = (strMessage) => {
    _messageList.push(strMessage);
    setMessageListChat([..._messageList]);
  };

  const onConnected = async (frame) => {
    // roomId가 저장되어 있지 않다면 새롭게 얻기
    console.log('roomId: ', roomId);
    if (!roomId) {
      console.log(HeadersFetch);
      const res = await fetch(`${API_BASE_URL}/api/chat/room`, {
        headers: HeadersFetch,
      });

      const json = await res.json();
      const _roomId = json.roomId;
      console.log(_roomId);
      localStorage.setItem('CHAT_ROOMID', _roomId);
      setRoomId(_roomId);
    }

    stompClient.subscribe('/topic/chat/room/' + roomId, onMessageReceived);
  };

  const sendMessageHandler = (message) => {};

  const sendMessageHandler2 = (name, message) => {
    console.log(isOpen);
    console.log(roomId);

    var chatMessage = {
      userName: userName,
      message: message,
      status: 'MESSAGE',
      type: 'TALK',
      roomId: roomId,
    };
    stompClient.publish({
      destination: '/topic/chat/message',
      body: JSON.stringify(chatMessage),
      headers: Headers,
    });
  };

  return (
    <ChatContext.Provider
      value={{
        isOpen,
        connectState,
        setIsOpen,
        messageList: messageListChat,
        onDisconnectServer: disconnectServer,
        onSendMessage: sendMessageHandler,
        onSendMessage2: sendMessageHandler2,
      }}
    >
      {props.children}
    </ChatContext.Provider>
  );
};

export default ChatContext;
