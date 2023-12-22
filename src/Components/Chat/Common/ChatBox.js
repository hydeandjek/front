import React, { useContext, useState } from 'react';
import styles from './sass/ChatBox.module.scss';
import ChatContext from '../../../utils/ChatContext';
import ChatBoxItem from './ChatBoxItem';

const ChatBox = ({ style }) => {
  const [isInformationVisible, setIsInformationVisible] = useState(false);

  const myName = '관리자';
  const messageList = [
    {
      userName: '유저',
      message:
        '갹느후를 이대잠아 퉈곤쵄키다 암한으네 힌건넹고 거어가. 사낙은 켁돌함만가 딴링이, 뇌뗘즈시를 오싱운히비우어 니골 덩순을 안소늗앙다. 머져 직논아 웁드마안에서 라너근얼걸에서 빈믄의 꿯베잍다은.',
      date: '오후 1시 20분',
    },
    {
      userName: '유저',
      message:
        '앤인븐으라 헢솔챘머핏을 라다, 다라만의 준잠뭐가 으드가 술매수제 각시마닷의 둉마트주빈인, 래마힙온 됴애는. 살다칙펫사온만 테여다 셍니낭솰도 채지의 핯목지슨어야 은딘좨고 는앗아',
      date: '오후 1시 20분',
    },
    {
      userName: '관리자',
      message:
        '너온에게 샤하다 지으킐을. 감시의 도초면 이룩은 어찬앤모로, 봉잰이의 븐에 보혈궀 산준칠간을 마라, 이도란젘공랜에. 방벼무지뜩이 워를 겔조달 거르 주어라페어서 군번이 줘킬썰모가 이이니리에. 다엉날으 도강팡디는 떼칠에내는 앗르앙혾았디욘에서 샐안늘러다. 녀즈가 배야니아를 즈웨핏다도 기룽앰비를 물자거다 사무딜인는다.',
      date: '오후 1시 20분',
    },
    {
      userName: '유저',
      message:
        '국가안전보장회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다. 국회는 국민의 보통·평등·직접·비밀선거에 의하여 선출된 국회의원으로 구성한다.',
      date: '오후 1시 20분',
    },
    {
      userName: '유저',
      message:
        '국가는 지역간의 균형있는 발전을 위하여 지역경제를 육성할 의무를 진다. 헌법에 의하여 체결·공포된 조약과 일반적으로 승인된 국제법규는 국내법과 같은 효력을 가진다.',
      date: '오후 1시 20분',
    },
    {
      userName: '유저',
      message:
        '감사원의 조직·직무범위·감사위원의 자격·감사대상공무원의 범위 기타 필요한 사항은 법률로 정한다. 정부는 회계연도마다 예산안을 편성하여 회계연도 개시 90일전까지 국회에 제출하고, 국회는 회계연도 개시 30일전까지 이를 의결하여야 한다.',
      date: '오후 1시 20분',
    },
    {
      userName: '관리자',
      message:
        '제2항과 제3항의 처분에 대하여는 법원에 제소할 수 없다. 공개하지 아니한 회의내용의 공표에 관하여는 법률이 정하는 바에 의한다. 대통령이 궐위된 때 또는 대통령 당선자가 사망하거나 판결 기타의 사유로 그 자격을 상실한 때에는 60일 이내에 후임자를 선거한다.',
      date: '오후 1시 20분',
    },
    {
      userName: '유저',
      message:
        '대통령은 법률안의 일부에 대하여 또는 법률안을 수정하여 재의를 요구할 수 없다. 법관은 헌법과 법률에 의하여 그 양심에 따라 독립하여 심판한다. 이 헌법시행 당시에 이 헌법에 의하여 새로 설치될 기관의 권한에 속하는 직무를 행하고 있는 기관은 이 헌법에 의하여 새로운 기관이 설치될 때까지 존속하며 그 직무를 행한다.',
      date: '오후 1시 20분',
    },
  ];

  //const { messageList } = useContext(ChatContext);
  const handleInformationButtonClick = () => {
    setIsInformationVisible(!isInformationVisible);
  };

  return (
    <div
      className={styles['chat-box']}
      style={style}
    >
      <div className={styles['chat-message-box']}>
        <div
          className={`${styles['chat-message-header']} ${styles['chat-message']}`}
        >
          <img
            className={styles['chatting-header-icon']}
            alt='Chatting header icon'
            src='https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/657832b267a6ebed31481896/img/chatting-header-icon.svg'
          />
          <div>안녕하세요, 1terFace입니다 &#58;&#41;</div>
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
          <p>안녕하세요, 1terFace입니다 &#58;&#41;</p>
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

        {messageList.map((item, i) => {
          const isMe = item.userName === myName;
          return (
            <ChatBoxItem
              key={i}
              userName={item.userName}
              message={item.message}
              date={item.date}
              isMe={isMe}
            />
          );
        })}
      </div>

      <div className={styles['chat-input']}>
        <div className={styles['overlap-group']}>
          <input
            type='text'
            className='chatting-massage'
            placeholder='메세지를 입력해주세요.'
          />
        </div>
      </div>

      {isInformationVisible && (
        <div>
          <div>
            <div />
            <div />
            <button onClick={handleInformationButtonClick}>
              <img
                alt='Time information'
                src='https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/657841a38a9ed2c7a2e5dffe/img/time-information-modal-cancel-icon.svg'
              />
            </button>
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
    </div>
  );
};

export default ChatBox;
