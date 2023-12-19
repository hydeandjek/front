import React from 'react';
import { NavLink } from 'react-router-dom';
import SidebarItem from '../SideBar/SideBarItem';
import './Recipes.scss';
import { menus } from '../../assets/constants';
import Recipe from './Recipe';

const Recipes = () => {
  return (
    <>
      <div className='rec_center'>
        FOOD
        <div className='side'>
          <div className='sidebar'>
            {menus.map((menu, index) => {
              return <SidebarItem menu={menu} />;
            })}
          </div>
        </div>
      </div>
      <Recipe />
    </>
  );
};

export default Recipes;
