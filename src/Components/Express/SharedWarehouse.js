import React from 'react';
import { NavLink } from 'react-router-dom';
import SidebarItem from '../SideBar/SideBarItem';
import { express } from '../../assets/constants';
import './SharedWarehouse.scss';
import Kakao from '../Map/Kakao';


const SharedWarehouse = () => {

  return (
    <>
      <div id='sharedWarehouse'>

        <div className='rec_center'>
          Express
          <div className='side'>
            <div className='sidebar'>
              {express.map((menu, index) => {
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

        <Kakao Category='공유창고' />
      </div>
    </>
  );
};


export default SharedWarehouse