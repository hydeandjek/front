import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Donation/scss/DonaDetail.scss';
import BoardList from '../List/BoardList';
import '../List/BoardList.scss';
import { useHorizontalScroll } from '../UseSideScroll';
import { API_BASE_URL } from '../../../config/host-config';

const MyRejectBoard = () => {
  const [donation, setDonations] = useState([]);
  const scrollRef = useHorizontalScroll();
  const redirection = useNavigate();

  const onClickApprove = () => {
    redirection('/board/donation/mypage/approve');
  };
  const onClickReject = () => {
    redirection('/board/donation/mypage/reject');
  };
  const onClickHold = () => {
    redirection('/board/donation/mypage/hold');
  };

  const myboard = [
    { name: '내가 쓴 게시글', path: '/mypage/mypost' },
    { name: '나의 나눔 게시판', path: '/board/donation/mypage' },
  ];

  const [isHover, setIsHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
    setIsOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/board/donation/mypage/REJECT`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('LOGIN_TOKEN'),
                'Content-Type': 'application/json',
              },
        });
        const data = response.data;
        console.log(response.data);
        setDonations(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  function formatDateTime(dateTime) {
    const formattedDateTime = dateTime.replace(/-/g, '/');
    return formattedDateTime;
  }

  return (
    <>
      <div id='donationBoard'>
      <div className='rec_center2' onMouseLeave={handleMouseLeave}>
            MyBoard
          <div className='side2'>
            <div className='sidebar2'>
              {myboard.map((menu, index) => (
                <div
                  className='sidebar-item2'
                  key={index}
                >
                  {menu.name === '나의 나눔 게시판' ? (
                    <div
                      onMouseEnter={handleMouseEnter}
                    >
                      <NavLink
                        to={menu.path}
                        activeClassName='active-link'
                        exact
                      >
                        <p>{menu.name}</p>
                      </NavLink>
                      {isHover && (
                        <>
                            <p
                                onClick={onClickHold}
                                style={{
                                    fontSize: '14px',
                                    width: '150px',
                                    padding: '3px 10px',
                                    margin: '5px 0px',
                                    position: 'absolute',
                                    bottom: '-2%',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    marginLeft: '25px',
                                    color: '#000',
                                    display: 'block',
                                    borderRadius: '10px',
                                    cursor: 'pointer',
                                }}
                            >
                                미승인 게시판
                            </p>
                            <p
                                onClick={onClickApprove}
                                style={{
                                    fontSize: '14px',
                                    width: '150px',
                                    padding: '3px 10px',
                                    margin: '5px 0px',
                                    position: 'absolute',
                                    bottom: '-26%',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    marginLeft: '25px',
                                    color: '#000',
                                    display: 'block',
                                    borderRadius: '10px',
                                    cursor: 'pointer',
                                }}
                            >
                                승인 게시판
                            </p>
                            <p
                                onClick={onClickReject}
                                style={{
                                    fontSize: '14px',
                                    width: '150px',
                                    padding: '3px 10px',
                                    margin: '5px 0px',
                                    position: 'absolute',
                                    bottom: '-50%',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    marginLeft: '25px',
                                    color: '#000',
                                    display: 'block',
                                    borderRadius: '10px',
                                    cursor: 'pointer',
                                }}
                            >
                                보류 게시판
                            </p>
                        </>
                      )}
                    </div>
                  ) : (
                    <NavLink
                      to={menu.path}
                      activeClassName='active-link'
                      exact
                    >
                      <p>{menu.name}</p>
                    </NavLink>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='title_name_board' style={{left: '27%'}}>보류 게시판</div>

        <div className='warp-content'>
          <div
            className='contentBox'
            ref={scrollRef}
          >
            {donation.map((content, index) => (
              <BoardList
                key={index}
                url={content.id}
                src={content.imageUrl}
                name={content.userName}
                title={content.title}
                date={formatDateTime(content.approvalDate)}
                content={content.content}
                count={content.commentCount}
                flag={content.approvalFlag}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyRejectBoard;
