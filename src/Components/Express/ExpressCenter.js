import React from 'react';
import { NavLink } from 'react-router-dom';
import SideBarItem2 from '../SideBar/SideBar2/SideBarItem2';
import '../SideBar/SideBar2/SideBarItem2.scss';
import '../SideBar/SideBar2/SideBarContent2.scss';
import { express } from '../../assets/constants';
import './ExpressCenter.scss';
import Kakao from '../Map/Kakao';

const ExpressCenter = () => {

  return (
    <>
      <div id='expressCenter'>

        <div className='rec_center2'>
          Express
          <div className='side2'>
            <div className='sidebar2'>
              {express.map((menu, index) => {
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

        <Kakao Category='이삿짐센터' />
      </div>
    </>
  );
};


export default ExpressCenter