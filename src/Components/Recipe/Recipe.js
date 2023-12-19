import React, { useState } from 'react';
import './Recipe.scss';

import { NavLink } from 'react-router-dom';
import SideBarContent from '../SideBar/SideBarContent';

const rec = [
  { id: 1, name: '국&찌개', src: '' },
  { id: 2, name: '반찬', src: '' },
  { id: 3, name: '후식', src: '' },
  { id: 4, name: '일품', src: '' },
  { id: 5, name: '밥', src: '' },
];
const Recipe = () => {
  return (
    <div className='contentBox'>
      {rec.map((content, index) => {
        return (
          <SideBarContent
            content={content}
            key={index}
          >
            <NavLink to={content.path}></NavLink>
          </SideBarContent>
        );
      })}
    </div>
  );
};

export default Recipe;
