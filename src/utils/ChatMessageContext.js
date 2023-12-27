import React, { useContext, useState } from 'react';
import { ChatContextProvider } from './ChatContext';

// 새로운 전역 컨텍스트 생성
// 채팅 메시지
const ChatMessageContext = React.createContext({
  messageList: [],
  onAddMessage: (message) => {},
});

// 위에서 생성한 Context를 제공할 수 있는 provider
export const ChatMessageContextProvider = (props) => {
  //const [messageList, setMessageList] = useState([]);
  const { messageList } = useContext(ChatMessageContext);
  console.log('ChatMessageContextProvider: ', messageList);

  return (
    <ChatMessageContext.Provider value={{ messageList }}>
      {props.children}
    </ChatMessageContext.Provider>
  );
};

export default ChatMessageContext;
