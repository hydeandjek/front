import React from 'react';
import './SideBarContent.scss';

const SideBarContent = (content) => {
  return (
    <div className='sidebar-content'>
      <div className='content-item'>
        <img src={content.src} />
        <p>{content.name}</p>
      </div>
    </div>
  );
};

export default SideBarContent;
