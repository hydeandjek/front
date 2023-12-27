import React from 'react';
import './SideBarContent3.scss';

const SideBarContent3 = ({ url, name, src, price }) => {
  return (
    <div className='sidebar-content'>
      <div className='content-item'>
        <a href={url}>
          <img src={src} />
          <p>{name}</p>
          <p>{price}</p>
        </a>
      </div>
    </div>
  );
};

export default SideBarContent3;
