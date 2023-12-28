import React from 'react';
import { NavLink } from 'react-router-dom';
import SideBarItem2 from '../SideBar/SideBar2/SideBarItem2';
import '../SideBar/SideBar2/SideBarItem2.scss';
import '../SideBar/SideBar2/SideBarContent2.scss';
import { food } from '../../assets/constants';
import './Restaurant.scss';
import Kakao from '../Map/Kakao';

const Restaurant = () => {
  return (
    <>
      <div id='restaurant'>
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

        <Kakao Category='혼밥 식당' />
      </div>
    </>
  );
};

export default Restaurant;
