import React from 'react';
import './SideBarContent.scss';
import PageChange from '../Food/Recipe/PageChange';
import RecipeDetail from '../Food/Recipe/RecipeDetail';
import { redirect, useNavigate } from 'react-router-dom';

const SideBarContent = ({
  name,
  src,
  onClick,
  style,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className='sidebar-content'
      onClick={onClick}
    >
      <div className='content-item'>
        <img
          src={src}
          style={style}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
        <p onClick={onclick}>{name}</p>
      </div>
    </div>
  );
};

export default SideBarContent;
