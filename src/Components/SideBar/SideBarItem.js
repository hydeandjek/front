import React from 'react';
import './SideBarItem.scss';

function SideBarItem({ menu }) {
  return (
    <div className='sidebar-item'>
      <p>{menu.name}</p>
    </div>
  );
}

export default SideBarItem;
