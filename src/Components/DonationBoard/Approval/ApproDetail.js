import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { board } from '../../../assets/constants';
import axios from 'axios';
import './scss/ApproDetail.scss';
import { API_BASE_URL } from '../../../config/host-config';
import { useHorizontalScroll } from '../UseSideScroll';
import '../List/DetailList.scss';
import DetailList from '../List/DetailList';
import SideBarItem2 from '../../SideBar/SideBar2/SideBarItem2';

const ApproDetail = () => {

  const [showCommentList, setShowCommentList] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [rotation, setRotation] = useState(0);

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

  const handleRefus = () => {

  };

  const handleApprove = async () => {
    const confirmed = window.confirm('게시글을 승인하시겠습니까?');
    if (confirmed) {
      try {
        const response = await axios.delete(API_BASE_URL + '/approval', {
        });
        console.log(response.data);  // 응답 데이터 처리
      } catch (error) {
        console.error(error);  // 오류 처리
      }
    }
  };

  const handleCommentBtnClick = () => {
    if (rotation === 0) {
      setRotation(-45);
    } else {
      setRotation(0);
    }
    setShowCommentList(!showCommentList);
  };

  return (
    <>
      <div id='donationBoard'>
        <div className='rec_center2'>
          Community
          <div className='side2'>
            <div className='sidebar2'>
              {board.map((menu, index) => (
                <NavLink
                  style={{ textDecoration: 'none' }}
                  to={menu.path}
                  key={index}
                >
                  <SideBarItem2 menu={menu} />
                </NavLink>
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

                  <div
                    className='commentBtn'
                    onClick={handleCommentBtnClick}
                    style={{ backgroundColor: backgroundColor }}
                  >
                    <div className='commentCount'>댓글 0</div>
                    <div
                      className="rotateBtn"
                      style={{ transform: `rotate(${rotation}deg)` }}
                    >
                      +
                    </div>
                  </div>
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
              className='refusBtn'
              onClick={handleRefus}
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
              style={{ borderColor: isHovered2 ? 'red' : 'silver' }}
            >
              {isHovered2 ? (
                <img src="https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/6592963eebd5f41b5ff0ac36/img/group@2x.png" />
              ) : (
                <img src="https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/6592967f6e7d9b67d959560c/img/group@2x.png" />
              )}
              <span style={{ color: isHovered2 ? 'red' : 'silver' }}>보류</span>
            </div>

            <div
              className='approvBtn'
              onClick={handleApprove}
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
              style={{ borderColor: isHovered3 ? 'green' : 'silver' }}
            >
              {isHovered3 ? (
                <img src="https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/65929dd0267d880a66d3e454/img/vector.svg" />
              ) : (
                <img src="https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/65929e176c2db389163dba89/img/vector.svg" />
              )}
              <span style={{ color: isHovered3 ? 'green' : 'silver' }}>승인</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApproDetail;