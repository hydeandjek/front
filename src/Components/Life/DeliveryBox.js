import React from 'react';
import { NavLink } from 'react-router-dom';
import SidebarItem from '../SideBar/SideBarItem';
import { life } from '../../assets/constants';
import './DeliveryBox.scss';
import Kakao from '../Map/Kakao';


const DeliveryBox = () => {

  return (
    <>
      <div id='deliveryBox'>

        <div className='rec_center'>
          Life
          <div className='side'>
            <div className='sidebar'>
              {life.map((menu, index) => {
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

        <Kakao Category='무인택배함' />
      </div>
    </>
  );
};


export default DeliveryBox