import React from 'react';
import SideBarItem from '../SideBar/SideBarItem';
import { NavLink } from 'react-router-dom';
import Kakao from '../Kakao/Kakao';
import { life } from '../../assets/constants';
import '../Recipe/Recipes.scss';

const Life = () => {
  return (
    <>
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
                  <SideBarItem menu={menu} />
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>

      <Kakao />
    </>
  );
};

export default Life;
