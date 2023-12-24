import React from 'react';
import './SideBarContent.scss';
import PageChange from '../Food/Recipe/PageChange';

const SideBarContent = ({ name, src, onClick }) => {
  // console.log('src: ', src);
  return (
    <div
      className='sidebar-content'
      onClick={onClick}
    >
      <div className='content-item'>
        <img src={src} />
        <p>{name}</p>
      </div>
    </div>
  );
};

export default SideBarContent;
