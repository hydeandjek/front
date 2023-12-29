import React from 'react';
import './SideBarItem2.scss';

function SideBarItem2({ menu }) {
  return (
    <div className='sidebar-item2'>
      <p>{menu.name}</p>
    </div>
  );
}

export default SideBarItem2;
