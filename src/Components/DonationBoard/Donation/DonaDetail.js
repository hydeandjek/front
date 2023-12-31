import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Donation/scss/DonaDetail.scss';
import { API_BASE_URL } from '../../../config/host-config';
import { useHorizontalScroll } from '../UseSideScroll';
import '../List/DetailList.scss';
import DetailList from '../List/DetailList';

const DonaDetail = () => {
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

  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };
  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  const handleMouseEnter3 = () => {
    setIsHovered3(true);
  };
  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };
  
  const handlePrev = () => {

  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(API_BASE_URL + '/donation', {
      });
      console.log(response.data);  // 응답 데이터 처리
    } catch (error) {
      console.error(error);  // 오류 처리
    }
  };

  let [pageNum, setPageNum] = useState(1);
  const [donation, setDonations] = useState([]);
  const scrollRef = useHorizontalScroll();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8181/appliance/${pageNum}`);
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
          <div className='detailBoard'>
            <div className="warp-content">
              <div className="detailBox">
                <div className="userIdBox">
                  <p>{donation[0]?.appliancePrice}</p>
                  <p>{donation[1]?.appliancePrice}</p>
                </div>

                <div className="imageBox" ref={scrollRef}>
                    {donation.map((content, index) => (
                      <DetailList
                        key={index}
                        url={content.applianceUrl}
                        src={content.applianceImg}
                        price={content.appliancePrice}
                      />
                    ))}
                </div>

                <div className="titleBox">
                  {donation[5]?.applianceName}
                </div>

                <div className="detailContentBox">
                  {donation[0]?.applianceName}
                  {donation[1]?.applianceName}
                  {donation[2]?.applianceName}
                  {donation[3]?.applianceName}
                  {donation[4]?.applianceName}
                </div>
              </div>
            </div>
          </div>

          

          <div className='Btn'>
            <div
              className='prevBtn'
              onClick={handlePrev}
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
              style={{ borderColor: isHovered2 ? 'black' : 'silver' }}
            >
              {isHovered2 ? (
                <img
                  src="https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/6590315334bd3cdd86f37b35/img/group@2x.png"
                  alt="SubmitImage"
                />
              ) : (
                <img
                  src="https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/659034e8ebd5f41b5ff0ab42/img/group@2x.png"
                  alt="SubmitImage"
                />
              )}
              <span style={{ color: isHovered2 ? 'black' : 'silver' }}>이전</span>
            </div>

            <div
              className='deleteBtn'
              onClick={handleDelete}
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
              style={{ borderColor: isHovered3 ? 'black' : 'silver' }}
            >
              {isHovered3 ? (
                <img
                  src="https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/6590315334bd3cdd86f37b35/img/group@2x.png"
                  alt="SubmitImage"
                />
              ) : (
                <img
                  src="https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/659034e8ebd5f41b5ff0ab42/img/group@2x.png"
                  alt="SubmitImage"
                />
              )}
              <span style={{ color: isHovered3 ? 'black' : 'silver' }}>삭제</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonaDetail;