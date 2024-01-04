import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './sass/ChatBox.module.scss';
import ChatContext from '../../../utils/ChatContext';
import ChatBoxItem from './ChatBoxItem';
import AuthContext from '../../../utils/AuthContext';
import swal from 'sweetalert';
import AdminChatContext from '../../../utils/AdminChatContext';

const ChatBox = ({ style }) => {
  const userChatContext = useContext(ChatContext);
  const adminChatContext = useContext(AdminChatContext);
  const [isInformationVisible, setIsInformationVisible] = useState(false);
  const { userId, userName, userRole } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(!!userName);
  const [inputMessage, setInputMessage] = useState('');
  const $messageBox = useRef();
  const isAdmin = userRole === 'ADMIN';

  useEffect(() => {
    if (!isLogin) return;
    console.log('userId: ', userId);
  }, [isLogin]);

  useEffect(() => {
    // 스크롤 맨 밑으로
    const scrollHeight = $messageBox.current.scrollHeight;
    $messageBox.current.scrollTop = scrollHeight;
  }, [userChatContext.messageList, adminChatContext.messageList]);

  if (!userChatContext.isOpen) {
    if (isLogin && !isAdmin) {
      userChatContext.setIsOpen(true);
    }
  }

  const handleInformationButtonClick = () => {
    setIsInformationVisible(!isInformationVisible);
  };

  const onMessageInputHeadler = (e) => {
    setInputMessage(e.target.value);
  };

  const onMessageSubmitHeadler = (e) => {
    e.preventDefault();

    if (userRole === 'ADMIN') {
      adminChatContext.onSendMessage(inputMessage);
      setInputMessage('');
    } else {
      if (!isLogin) {
        // 메시지 창
        swal(
          '로그인 필요',
          '해당 서비스를 이용하려면 로그인이 필요합니다.',
          'error'
        ).then(() => {
          // 입력란으로 포커스
          setInputMessage('');
          e.target.children[0].focus();
        });
        return;
      }

      userChatContext.onSendMessage(inputMessage);
      setInputMessage('');
    }
  };

  return (
    <div
      className={styles['chat-box']}
      style={style}
    >
      {isInformationVisible && (
        <div>
          <div className={styles['time-notification']}>
            <div>
              <button
                className={styles['time-notification-close']}
                onClick={handleInformationButtonClick}
              >
                <img
                  alt='Time information'
                  src='https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/657841a38a9ed2c7a2e5dffe/img/time-information-modal-cancel-icon.svg'
                />
              </button>
            </div>
            <p>
              <span>
                운영시간
                <br />
                <br />
              </span>
              <span>오전 09:30 ~ 06:30 </span>
              <span>
                월, 화, 수, 목, 금
                <br />
                <br />
              </span>
              <span>- Timezone: Asia/Seoul</span>
            </p>
          </div>
        </div>
      )}

      <div
        className={styles['chat-message-box']}
        ref={$messageBox}
      >
        <div
          className={`${styles['chat-message-header']} ${styles['chat-message']}`}
        >
          <img
            className={styles['chatting-header-icon']}
            alt='Chatting header icon'
            src='https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/657832b267a6ebed31481896/img/chatting-header-icon.svg'
          />
          <div>안녕하세요, 1nterFace입니다 &#58;&#41;</div>
        </div>

        <div className={styles['time-information-box']}>
          <button onClick={handleInformationButtonClick}>
            <div>운영시간 보기</div>
            <img
              alt='Time information'
              src='https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/657832b267a6ebed31481896/img/time-information-icon.svg'
            />
          </button>
        </div>

        <div className={`${styles['chat-message']} ${styles['chat-info']}`}>
          <p>안녕하세요, 1nterFace입니다 &#58;&#41;</p>
          <br />
          <br />
          <p>저희 사이트를 방문해주셔서 진심으로 감사드립니다!</p>
          <br />
          <br />
          <p>
            로그인 후 문의를 남겨주시면 더욱 빠르게 도움 드리도록 하겠습니다!
          </p>
          <br />
          <br />
          <div>
            <p>조금만 기다리시면 알림을 통해 답변 도착을 알려드리겠습니다. </p>
            <img
              className='heart-icon'
              alt='Heart icon'
              src='https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/657832b267a6ebed31481896/img/heart-icon.svg'
            />
          </div>
        </div>

        {!isLogin ? (
          <ChatBoxItem
            key={1}
            userName={'알림'}
            message={'서비스를 이용하시려면 로그인을 먼저 하세요!'}
            date={''}
            isMe={false}
          />
        ) : isAdmin ? (
          adminChatContext.messageList.map((item, i) => {
            const isMe = item.userId === userId;
            return (
              <ChatBoxItem
                key={i}
                userName={item.userName}
                message={item.message}
                date={item.date}
                isMe={isMe}
              />
            );
          })
        ) : (
          userChatContext.messageList.map((item, i) => {
            const isMe = item.userId === userId;
            return (
              <ChatBoxItem
                key={i}
                userName={item.userName}
                message={item.message}
                date={item.date}
                isMe={isMe}
              />
            );
          })
        )}
      </div>

      <div className={styles['chat-input']}>
        <div className={styles['overlap-group']}>
          <form onSubmit={onMessageSubmitHeadler}>
            <input
              type='text'
              className='chatting-massage'
              placeholder='메세지를 입력한 후 엔터를 입력하세요.'
              onChange={onMessageInputHeadler}
              value={inputMessage}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
