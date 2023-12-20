import React from 'react';
import { NavLink } from 'react-router-dom';
import SidebarItem from '../SideBar/SideBarItem';
import { life } from '../../assets/constants';
import './CoinLaundry.scss';
import Kakao from '../Map/Kakao';


const CoinLaundry = () => {

  return (
    <>
      <div id='coinLaundry'>

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

        <Kakao Category='코인세탁소' />
      </div>
    </>
  );
};


export default CoinLaundry