import React from 'react';
import { NavLink } from 'react-router-dom';
import SidebarItem from '../../SideBar/SideBarItem';
import './Recipes.scss';
import { food } from '../../../assets/constants';
import Recipe from './Recipe';

const Recipes = () => {
  return (
    <>
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
      <Recipe />
    </>
  );
};

export default Recipes;
