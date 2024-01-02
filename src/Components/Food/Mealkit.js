import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SideBarItem2 from '../SideBar/SideBar2/SideBarItem2';
import SideBarContent3 from '../SideBar/SideBar3/SideBarContent3';
import '../SideBar/SideBar2/SideBarItem2.scss';
import '../SideBar/SideBar3/SideBarContent3';
import { food } from '../../assets/constants';
import axios from 'axios';
import './Mealkit.scss';
import PageChange from './Recipe/PageChange';
import arrowR from '../../assets/img/Right.png';
import arrowL from '../../assets/img/Left.png';
import { API_BASE_URL } from '../../config/host-config';

const Mealkit = () => {
  // 화살표 클릭 시 상태변수 관리
  let [pageNum, setPageNum] = useState(1);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [mealkits, setMealkits] = useState([]);
  const API_URL = API_BASE_URL + '/mealKit';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/${pageNum}`);
        const data = response.data;

        setMealkits(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [pageNum]);

  const pageCount = Math.floor(36 / 9);
  const sendPageNum = async (e) => {
    if (e.target.id === 'right' && pageNum < pageCount) {
      setPageNum(pageNum + 1);
      console.log('오');
    } else if (e.target.id === 'left' && pageNum > 1) {
      setPageNum(pageNum - 1);
      console.log('왼');
    }

    console.log('페이지 넘버:', pageNum);
  };

  return (
    <>
      <div id='warp-side'>
        <div className='rec_center2'>
          FOOD
          <div className='side2'>
            <div className='sidebar2'>
              {food.map((menu, index) => {
                return (
                  <NavLink
                    style={{ textDecoration: 'none' }}
                    to={menu.path}
                    key={index}
                  >
                    <SideBarItem2 menu={menu} />
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>

        <div className='warp-content'>
          <div className='arrowBox'>
            {pageNum > 1 && (
              <PageChange
                id='left'
                src={arrowL}
                alt='이전 페이지'
                onClick={sendPageNum}
                style={{ opacity: isHovered ? 0.5 : 1 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            )}
          </div>

          <div className='contentBox'>
            {mealkits.map((content, index) => {
              return (
                <SideBarContent3
                  key={index}
                  url={content.mealKitUrl}
                  src={content.mealKitImg}
                  name={content.mealKitName}
                  price={content.mealKitPrice + '원'}
                ></SideBarContent3>
              );
            })}
          </div>

          <div className='arrowBox'>
            {pageNum < pageCount && (
              <PageChange
                id='right'
                src={arrowR}
                alt='다음 페이지'
                onClick={sendPageNum}
                style={{ opacity: isHovered ? 0.5 : 1 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Mealkit;
