import React from 'react';
import './SideBarContent.scss';

const SideBarContent = ({ name, src }) => {
  console.log('src: ', src);
  return (
    <div className='sidebar-content'>
      <div className='content-item'>
        <img src={src} />
        <p>{name}</p>
      </div>
    </div>
  );
};

export default SideBarContent;
