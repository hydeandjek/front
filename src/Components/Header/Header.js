import React, { useContext, useState } from 'react';
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
import { useNavigate } from 'react-router-dom';
import { BsList } from 'react-icons/bs';
import AuthContext from '../../utils/AuthContext';
import { API_BASE_URL, USER } from '../../config/host-config';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const redirection = useNavigate();

  // AuthContext에서 로그인 상태를 가져옵니다.
  const { isLoggedIn, userName, onLogout } = useContext(AuthContext);

  const token = localStorage.getItem('ACCESS_TOKEN');

  const toggle = () => setIsOpen(!isOpen);

  const onClickLogin = () => {
    redirection('/user/login');
  };

  const onClickJoin = () => {
    redirection('/user/join');
  };

  const onClickLogOut = async () => {
    const res = await fetch(`${API_BASE_URL}${USER}/logout`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN'),
      },
    });

    // AuthContext의 onLogout 함수를 호출하여 로그인 상태를 업데이트 합니다.
    onLogout();
    redirection('/user/login');
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
          <b>1nterFace</b>
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
                nav
                className={styles.menu_title}
              >
                레시피
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
                {/* if (ACCESS_TOKEN){
                  <DropdownItem onClick={onClickMyPage}>마이페이지</DropdownItem>
                  <DropdownItem onClick={onClickLogOut}>로그아웃</DropdownItem>
                }else{
                <DropdownItem onClick={onClickLogin}>로그인</DropdownItem>
                <DropdownItem onClick={onClickJoin}>회원가입</DropdownItem>
              )  */}
                {token ? (
                  <>
                    <DropdownItem onClick={onClickLogOut}>
                      로그아웃
                    </DropdownItem>
                  </>
                ) : (
                  <>
                    <DropdownItem onClick={onClickLogin}>로그인</DropdownItem>
                    <DropdownItem onClick={onClickJoin}>회원가입</DropdownItem>
                  </>
                )}
              </DropdownMenu>
            </NavHoverDropDown>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
