import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './scss/DonaList.scss';
import BoardList from '../List/BoardList';
import '../List/BoardList.scss';
import { useHorizontalScroll } from '../UseSideScroll';
import { API_BASE_URL } from '../../../config/host-config';

const DonaList = () => {
  let [pageNum, setPageNum] = useState(1);
  const [donation, setDonations] = useState([]);
  const scrollRef = useHorizontalScroll();
  const redirection = useNavigate();

  const onClickRegist = () => {
    redirection('/board/donation/regist');
  };

  const board = [
    { name: '카테고리 게시판', path: '/' },
    { name: '질문 게시판', path: '/board/question' },
    { name: '나눔 게시판', path: '/board/donation' },
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
        const response = await axios.get(API_BASE_URL + '/board/donation');
        const data = response.data;
        setDonations(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [pageNum]);

  return (
    <>
      <div id='donationBoard'>
        <div className='rec_center2'>
          Community
          <div className='side2'>
            <div className='sidebar2'>
              {board.map((menu, index) => (
                <div className='sidebar-item2' key={index}>
                  {menu.name === '나눔 게시판' ? (
                    <div
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <NavLink
                        to={menu.path}
                        activeClassName='active-link'
                        exact
                      >
                        <p>{menu.name}</p>
                      </NavLink>
                      {isHover && (
                        <p
                          onClick={onClickRegist}
                          style={{
                            fontSize: '14px',
                            width: '150px',
                            padding: '3px 10px',
                            margin: '5px 0px',
                            position: 'relative',
                            textAlign: 'center',
                            textDecoration: 'none',
                            marginLeft: '25px',
                            color: '#000',
                            display: 'block',
                            borderRadius: '10px',
                            cursor: 'pointer'
                          }}
                        >
                          등록
                        </p>
                      )}
                    </div>
                  ) : (
                    <NavLink to={menu.path} activeClassName='active-link' exact>
                      <p>{menu.name}</p>
                    </NavLink>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='warp-content'>
          <div className='contentBox' ref={scrollRef}>
            {donation.map((content, index) => (
              <BoardList
                key={index}
                url={'donation/detail/' + content.id}
                src={content.imageUrl}
                name={content.userName}
                title={content.title}
                date={content.regDate}
                content={content.content}
                count={content.commentCount}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DonaList;