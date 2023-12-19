import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Dropdown,
} from 'reactstrap';
import NavHoverDropDown from './NavHoverDropDown';
import styles from './sass/Header.module.scss';
import { Link, Router, useNavigate } from 'react-router-dom';
import { BsList } from 'react-icons/bs';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const redirection = useNavigate();

  const toggle = () => setIsOpen(!isOpen);

  const onClickLogin = () => {
    redirection('/user/login');
  };

  const onClickJoin = () => {
    redirection('/user/join');
  };

  const onClickRecipe = () => {
    redirection('/recipes');
  };

  const onClickKakao = () => {
    redirection('/Kakao');
  };

  const onClickLife = () => {
    redirection('/Life');
  };

  return (
    <div>
      <Navbar
        light
        expand='md'
        className={styles.nav}
      >
        <NavbarBrand
          href='/'
          id='navItem'
        >
          <b>1NTERFACE</b>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse
          navbar
          isOpen={isOpen}
          className='container-fluid'
        >
          <div className='navbar-nav me-auto mb-2 mb-lg-0'>
            <NavHoverDropDown>
              <DropdownToggle
                onClick={onClickRecipe}
                nav
                className={styles.menu_title}
              >
                FOOD
              </DropdownToggle>
              <DropdownMenu className={styles.menu}>
                <DropdownItem>레시피</DropdownItem>
                <DropdownItem>혼밥하기 좋은 식당</DropdownItem>
                <DropdownItem>메뉴3</DropdownItem>
              </DropdownMenu>
            </NavHoverDropDown>
            <NavHoverDropDown>
              <DropdownToggle
                onClick={onClickKakao}
                nav
                className={styles.menu_title}
              >
                이사
              </DropdownToggle>
              <DropdownMenu className={styles.menu}>
                <DropdownItem>메뉴1</DropdownItem>
                <DropdownItem>메뉴2</DropdownItem>
                <DropdownItem>메뉴3</DropdownItem>
              </DropdownMenu>
            </NavHoverDropDown>
            <NavHoverDropDown>
              <DropdownToggle
                nav
                className={styles.menu_title}
                onClick={onClickLife}
              >
                라이프
              </DropdownToggle>
              <DropdownMenu className={styles.menu}>
                <DropdownItem>메뉴1</DropdownItem>
                <DropdownItem>메뉴2</DropdownItem>
                <DropdownItem>메뉴3</DropdownItem>
              </DropdownMenu>
            </NavHoverDropDown>
            <NavHoverDropDown>
              <DropdownToggle
                onClick={onClickRecipe}
                nav
                className={styles.menu_title}
              >
                정책
              </DropdownToggle>
              <DropdownMenu className={styles.menu}>
                <DropdownItem>메뉴1</DropdownItem>
                <DropdownItem>메뉴2</DropdownItem>
                <DropdownItem>메뉴3</DropdownItem>
              </DropdownMenu>
            </NavHoverDropDown>
            <NavHoverDropDown>
              <DropdownToggle
                nav
                className={styles.menu_title}
              >
                커뮤니티
              </DropdownToggle>
              <DropdownMenu className={styles.menu}>
                <DropdownItem>메뉴1</DropdownItem>
                <DropdownItem>메뉴2</DropdownItem>
                <DropdownItem>메뉴3</DropdownItem>
              </DropdownMenu>
            </NavHoverDropDown>
          </div>
          <div className='d-flex'>
            <NavHoverDropDown>
              <DropdownToggle nav>
                <BsList />
              </DropdownToggle>
              <DropdownMenu className={styles.menu}>
                {/* <DropdownItem header>김춘식</DropdownItem> */}
                <DropdownItem onClick={onClickLogin}>로그인</DropdownItem>
                <DropdownItem onClick={onClickJoin}>회원가입</DropdownItem>
              </DropdownMenu>
            </NavHoverDropDown>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
