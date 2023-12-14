import React from 'react';
import './SideBarContent.scss';

const SideBarContent = (content) => {
  return (
    <div className='sidebar-content'>
      <img src={content.src} />
      <p>{content.name}</p>
    </div>
  );
};

export default SideBarContent;
