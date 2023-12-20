import React from 'react';
import { NavLink } from 'react-router-dom';
import SidebarItem from '../SideBar/SideBarItem';
import { life } from '../../assets/constants';
import './ConvenienceStore.scss';
import Kakao from '../Map/Kakao';


const ConvenienceStore = () => {

  return (
    <>
      <div id='convenienceStore'>

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

        <Kakao Category='편의점' />
      </div>
    </>
  );
};


export default ConvenienceStore