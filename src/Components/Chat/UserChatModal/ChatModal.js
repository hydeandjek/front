import React, { useContext, useEffect, useState } from 'react';
import ChatBox from '../Common/ChatBox';
import styles from './sass/ChatModal.module.scss';
import AuthContext from '../../../utils/AuthContext';
import { useLocation } from 'react-router';

const ChatModal = () => {
  const [openChattingImage, setOpenChattingImage] = useState(
    'https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/657951e5d664db7fd57b9dbd/img/chatting-icon.svg'
  );
  const [closeChattingImage, setCloseChattingImage] = useState(false);
  const [openChattingModal, setOpenChattingModal] = useState(false);
  const [showButton, setShowButton] = useState(true);

  // 채팅 버튼이 안 보일 위치
  const disableLocation = ['/user/login', '/user/join', '/AdminChat'];

  const authContext = useContext(AuthContext);

  const location = useLocation();
  useEffect(() => {
    // console.log('Location changed');
    // console.log(location);
    // 관리자라면 버튼 보이지 않게 하기
    if (authContext.userRole === 'ADMIN') {
      setShowButton(false);
      return;
    }

    // 안보일 위치 리스트에 있다면 버튼 보이지 않게 하기
    if (disableLocation.includes(location.pathname)) {
      setShowButton(false);
      setOpenChattingImage(false);
      setOpenChattingModal(false);

      setCloseChattingImage(false);
      setOpenChattingImage(
        'https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/657951e5d664db7fd57b9dbd/img/chatting-icon.svg'
      );
    } else {
      setShowButton(true);
    }
  }, [location]);

  const ChattingModalButtonClick = () => {
    setOpenChattingModal(!openChattingModal);

    if (openChattingModal) {
      setOpenChattingImage(
        'https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/657951e5d664db7fd57b9dbd/img/chatting-icon.svg'
      );
      setCloseChattingImage(false);
    } else {
      setOpenChattingImage(false);
      setCloseChattingImage(
        'https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/657832b267a6ebed31481896/img/chatting-cancel-icon.svg'
      );
    }
  };

  return (
    <>
      {showButton && (
        <div className={styles['chatting-modal']}>
          {openChattingModal && (
            <div
              className={styles['chat-modal']}
              style={{ height: '600px', width: '570px' }}
            >
              <ChatBox style={{ width: '570px' }} />
            </div>
          )}
          <button onClick={ChattingModalButtonClick}>
            <img
              src={openChattingImage}
              className={
                openChattingModal ? 'chatting-cancel-icon' : 'chatting-icon'
              }
            />
            <img
              src={closeChattingImage}
              className={
                openChattingModal ? 'chatting-icon' : 'chatting-cancel-icon'
              }
            />
          </button>
        </div>
      )}
    </>
  );
};

export default ChatModal;
