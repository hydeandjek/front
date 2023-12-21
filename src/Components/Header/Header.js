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
import AuthContext, { getLoginUserInfo } from '../../utils/AuthContext';
import { API_BASE_URL as BASE, USER } from '../../config/host-config';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const redirection = useNavigate();
  const { userName, isLoggedIn, onLogout } = useContext(AuthContext);
  const API_BASE_URL = BASE + USER;

  const toggle = () => setIsOpen(!isOpen);

  const onClickLogin = () => {
    redirection('/user/login');
  };

  const onClickJoin = () => {
    redirection('/user/join');
  };

  const onClickLogout = () => {
    fetch(`${API_BASE_URL}/logout`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + getLoginUserInfo().token,
      },
    });

    // AuthContext의 onLogout 함수를 호출하여 로그인 상태를 업데이트 합니다.
    onLogout();
    redirection('/user/login');
  };
  const onClickRecipe = () => {
    redirection('/recipes');
  };

  const onClickKakao = () => {
    redirection('/Kakao');
  };
  const onClickEmergency = () => {
    redirection('/Emergency');
  };

  const onClickLife = () => {
    redirection('/Life');
  };

  const onClickParcel = () => {
    redirection('/Parcel');
  };

  const onClickSolo = () => {
    redirection('/Solo');
  };

  const onClickPacking = () => {
    redirection('/Packing');
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
                <DropdownItem onClick={onClickSolo}>자취지역추천</DropdownItem>
                <DropdownItem onClick={onClickPacking}>이사짐센터</DropdownItem>
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
                <DropdownItem onClick={onClickEmergency}>응급실</DropdownItem>
                <DropdownItem onClick={onClickParcel}>무인택배함</DropdownItem>
                <DropdownItem>메뉴3</DropdownItem>
              </DropdownMenu>
            </NavHoverDropDown>
            <NavHoverDropDown>
              <DropdownToggle
                onClick={onClickKakao}
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
                {isLoggedIn ? (
                  <>
                    <DropdownItem
                      header
                      className={styles['dropdownitem-header']}
                    >
                      {userName}님 환영합니다
                    </DropdownItem>
                    <DropdownItem
                      divider
                      className={styles['dropdown-divider']}
                    />
                    <DropdownItem onClick={onClickLogout}>
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
