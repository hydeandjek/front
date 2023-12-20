import React from 'react';
import { NavLink } from 'react-router-dom';
import SidebarItem from '../SideBar/SideBarItem';
import { food } from '../../assets/constants';
import './Restaurant.scss';
import Kakao from '../Map/Kakao';


const Restaurant = () => {

  return (
    <>
      <div id='restaurant'>

        <div className='rec_center'>
          FOOD
          <div className='side'>
            <div className='sidebar'>
              {food.map((menu, index) => {
                return (
                  <NavLink
                    style={{ textDecoration: 'none' }}
                    to={menu.path}
                    key={index}
                  >
                    <SidebarItem menu={menu} />
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


export default Restaurant