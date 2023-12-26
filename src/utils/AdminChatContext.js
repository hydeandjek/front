import { Client } from '@stomp/stompjs';
import React, { useContext, useEffect, useState } from 'react';
import AuthContext, { getLoginUserInfo } from './AuthContext';
import SockJS from 'sockjs-client';
import { API_BASE_URL, chatBackEndHostName } from '../config/host-config';
import swal from 'sweetalert';

const stompConfig = {
  // If disconnected, it will retry after 1000ms
  reconnectDelay: 1000,
  heartbeatIncoming: 4000,
  heartbeatOutgoing: 4000,
};

// 채팅 연결
let stompClient = new Client(stompConfig);

// 새로운 전역 컨텍스트 생성
const AdminChatContext = React.createContext({
  connectState: 0, // 0: 연결 중 아님, 1: 연결 , 10: 연결 실패, 11: 토큰오류
  roomList: [],
  messageList: [],
  activeRoomId: '',
  onSendMessage: (message) => {},
  onSetActiveRoomId: () => {},
});

let _connectState = 0;
let _prevRoomId = null;

export const AdminChatContextProvider = (props) => {
  const { token } = getLoginUserInfo();
  const { userName } = useContext(AuthContext);
  const [connectState, _setConnectState] = useState(_connectState);
  const [messageList, setMessageList] = useState([]);
  const [roomList, setRoomList] = useState([]);
  const [activeRoomId, setActiveRoomId] = useState('');

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

  const onConnected = async (frame) => {
    //console.log('connected');
    const res = await fetch(`${API_BASE_URL}/api/chat/admin/room`, {
      headers: HeadersFetch,
    });

    const txt = await res.text();
    const _roomId = txt;
    console.log(_roomId);

    //채팅방 리스트 갱신
    refreshList();

    stompClient.subscribe('/topic/chat/room/' + _roomId, onMessageReceived);
  };

  // 초기화
  useEffect(() => {
    refreshList();
  }, []);

  // 유저 이름이 바뀌었을때
  useEffect(() => {
    //console.log('useEffect userName', connectState);
    if (connectState) {
      setConnectState(0);
      stompClient.deactivate();
      setMessageList([]);
    }
    stompClient.webSocketFactory = () => new SockJS(chatBackEndHostName);
    stompClient.activate();
  }, [userName]);

  // 활성화 된 채팅방이 바뀌었을때
  useEffect(() => {
    // 채팅 리스트 가져오기
    const ueMessageList = async () => {
      // 선택한 방 채팅 리스트 가져오기
      setMessageList([]);
      await getMessageList();

      // 선택한 방 구독
      const res = stompClient.subscribe(
        '/topic/chat/room/' + activeRoomId,
        onMessageReceived
      );
      console.log(res.id);
      _prevRoomId = res.id;

      // 채팅방 리스트 갱신
      refreshList();

      //_prevRoomId = activeRoomId;
    };
    // 서버에 연결되었을때 (처음 페이지 불려올때 오류 방지)
    if (connectState === 1) {
      console.log('changed room id: ', activeRoomId);
      console.log('prev room id: ', _prevRoomId);
      //이전 방 구독 해제
      if (_prevRoomId) {
        //stompClient.unsubscribe('/topic/chat/room/' + _prevRoomId);
        stompClient.unsubscribe(_prevRoomId);
      }
      ueMessageList();
    }
  }, [activeRoomId]);

  // 시간을 주지 않으면 경고 메시지가 뜸
  const setConnectState = (flag) => {
    setTimeout(() => {
      _setConnectState(flag);
      _connectState = flag;
    });
  };
  const setError = (errCode) => {
    stompClient.deactivate();
    setConnectState(errCode);
  };

  // 메시지를 받았을 때
  const onMessageReceived = (e) => {
    //console.log(e);
    const json = JSON.parse(e.body);
    console.log('body:', json);
    const type = json.type;
    //console.log(type);
    if (type === 'TALK') {
      const roomId = json.roomId;
      const userId = json.userId;
      const userName = json.userName;
      const message = json.message;
      const date = json.date;

      const strMessage = `${userName}(${date}): ${message}`;
      console.log(strMessage);

      addMessageList({ userName, message, date, userId });
      if (roomId === activeRoomId) {
        ResetRoomUnreadCount();
        refreshList();
      }
      //setMessageList((prev) => [...prev, strMessage]);
    } else if (type === 'ALERT') {
      console.log(`${json.roomId}: ${json.message}`);
      refreshList();
    }
  };

  // 채팅방 리스트 갱신
  const refreshList = async () => {
    const res = await fetch(`${API_BASE_URL}/api/chat/admin/rooms`, {
      headers: HeadersFetch,
    });

    if (res.status === 200) {
      const json = await res.json();
      setRoomList(json);
    } else {
      console.log(await res.text());
    }
  };

  // 채팅방 채팅 리스트 가져오기
  const getMessageList = async () => {
    const res = await fetch(
      `${API_BASE_URL}/api/chat/admin/room/${activeRoomId}`,
      {
        headers: HeadersFetch,
      }
    );

    if (res.status === 200) {
      const json = await res.json();
      setMessageList(json);
    } else {
      console.log(await res.text());
    }
  };

  // 채팅방 읽지 않은 카운트 초기화
  const ResetRoomUnreadCount = async () => {
    const res = await fetch(
      `${API_BASE_URL}/api/chat/admin/room/${activeRoomId}/unread`,
      {
        headers: HeadersFetch,
        method: 'DELETE',
      }
    );

    console.log(`${res.status}: ${await res.text()}`);
  };

  const addMessageList = (message) => {
    setMessageList((prev) => [...prev, message]);
  };

  const sendMessageHandler = (message) => {
    sendMessageHandler2(userName, message);
  };

  const sendMessageHandler2 = (name, message) => {
    console.log(activeRoomId);

    if (!activeRoomId) {
      swal('오류', '채팅방이 선택되지 않았습니다.', 'error');
      return;
    }

    var chatMessage = {
      userName: name,
      message: message,
      status: 'MESSAGE',
      type: 'TALK',
      roomId: activeRoomId,
    };
    stompClient.publish({
      destination: '/topic/chat/message',
      body: JSON.stringify(chatMessage),
      headers: Headers,
    });
  };

  const setActiveRoomIdHandler = (roomId) => {
    setActiveRoomId(roomId);
  };

  return (
    <AdminChatContext.Provider
      value={{
        messageList,
        roomList,
        activeRoomId,
        onSetActiveRoomId: setActiveRoomIdHandler,
        onSendMessage: sendMessageHandler,
      }}
    >
      {props.children}
    </AdminChatContext.Provider>
  );
};
export default AdminChatContext;
