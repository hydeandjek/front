import React, { useState } from 'react';
import './ChattingModal.scss';

const ChattingModal = () => {
  const [openChattingImage, setOpenChattingImage] = useState(
    'https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/657951e5d664db7fd57b9dbd/img/chatting-icon.svg'
  );
  const [closeChattingImage, setCloseChattingImage] = useState(false);
  const [openChattingModal, setOpenChattingModal] = useState(false);

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

  const [isInformationVisible, setIsInformationVisible] = useState(false);

  const handleInformationButtonClick = () => {
    setIsInformationVisible(!isInformationVisible);
  };

  return (
    <>
      <div id='chattingModal'>
        {openChattingModal && (
          <div className='chatting-modal'>
            <div className='chatting-header'>
              <div className='overlap-group'>
                <div className='element-face'>
                  안녕하세요, 1terFace입니다 &#58;&#41;
                </div>
                <img
                  className='chatting-header-icon'
                  alt='Chatting header icon'
                  src='https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/657832b267a6ebed31481896/img/chatting-header-icon.svg'
                />
              </div>
            </div>

            <div className='time-information'>
              <div className='overlap-2'>
                <div className='time-information-box' />
                <button
                  className='time-information-button'
                  onClick={handleInformationButtonClick}
                >
                  <img
                    alt='Time information'
                    src='https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/657832b267a6ebed31481896/img/time-information-icon.svg'
                  />
                </button>
                <div className='text-wrapper-2'>운영시간 보기</div>
              </div>
            </div>

            <div className='chatting-content'>
              <div className='overlap-3'>
                <img
                  className='heart-icon'
                  alt='Heart icon'
                  src='https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/657832b267a6ebed31481896/img/heart-icon.svg'
                />
                <div className='flexcontainer'>
                  <p className='text-wrapper-3'>
                    <br />
                    안녕하세요, 1terFace입니다 &#58;&#41;
                    <br />
                    <br />
                    저희 사이트를 방문해주셔서 진심으로 감사드립니다 !
                    <br />
                    <br />
                    로그인 후 문의를 남겨주시면 더욱 빠르게 더움 드리도록
                    하겠습니다 !
                    <br />
                    <br />
                    조금만 기다리시면 알림을 통해 답변 도착을 알려드리겠습니다
                  </p>
                </div>
              </div>
            </div>

            <div className='chatting-input'>
              <div className='overlap-group'>
                <img
                  className='aattachment-icon'
                  alt='Aattachment icon'
                  src='https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/657832b267a6ebed31481896/img/aattachment-icon.svg'
                />
                <input
                  type='text'
                  className='chatting-massage'
                  placeholder='메세지를 입력해주세요.'
                />
              </div>
            </div>

            {isInformationVisible && (
              <div className='overlap-group-wrapper'>
                <div className='overlap-5'>
                  <div className='modal-background' />
                  <div className='time-information-2' />
                  <button
                    className='time-information-3'
                    onClick={handleInformationButtonClick}
                  >
                    <img
                      alt='Time information'
                      src='https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/657841a38a9ed2c7a2e5dffe/img/time-information-modal-cancel-icon.svg'
                    />
                  </button>
                  <p className='element-timezone'>
                    <span className='text-wrapper-5'>
                      <br />
                      <br />
                    </span>
                    <span className='text-wrapper-6'>
                      운영시간
                      <br />
                      <br />
                    </span>
                    <span className='text-wrapper-7'>오전 09:30 ~ 06:30</span>
                    <span className='text-wrapper-8'>
                      월, 화, 수, 목, 금
                      <br />
                      <br />
                    </span>
                    <span className='text-wrapper-6'>
                      - Timezone: Asia/Seoul
                    </span>
                  </p>
                  <img
                    className='oneline-icone'
                    alt='Oneline icone'
                    src='https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/657841a38a9ed2c7a2e5dffe/img/oneline-icone.svg'
                  />
                </div>
              </div>
            )}
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
    </>
  );
};

export default ChattingModal;
