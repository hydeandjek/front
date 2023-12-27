import React from 'react';
import './SideBarContent2.scss';

const SideBarContent2 = (content) => {
  return (
    <div className='sidebar-content2'>
      <img src={content.src} />
      <p>{content.name}</p>
    </div>
  );
};

export default SideBarContent2;
