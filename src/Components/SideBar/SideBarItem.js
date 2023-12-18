import React, { useState } from 'react';
import './SideBarItem.scss';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  NavLink,
} from 'reactstrap';
import NavHoverDropDown from '../Header/NavHoverDropDown';

function SideBarItem({ menu }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className='d-flex p-5'>
      <Dropdown
        isOpen={dropdownOpen}
        toggle={toggle}
      >
        <DropdownToggle
          caret
          style={{
            width: '200px',
            height: '35px',
            position: 'relative',
            // display: 'none',
          }}
        >
          {menu.name}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>메뉴1</DropdownItem>
          <DropdownItem>메뉴2</DropdownItem>
          <DropdownItem>메뉴3</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
/*
  return (
    <>
      <div className='sidebar-item'>
        <p>{menu.name}</p>
      </div>
    </>
  );

}
  */
export default SideBarItem;
