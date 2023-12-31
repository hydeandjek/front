import React, { useContext, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import NavHoverDropDown from './NavHoverDropDown';
import styles from './sass/Header.module.scss';
import { useNavigate } from 'react-router-dom';
import { BsList } from 'react-icons/bs';
import AuthContext, { getLoginUserInfo } from '../../utils/AuthContext';
import { API_BASE_URL as BASE, USER } from '../../config/host-config';
import ChatContext from '../../utils/ChatContext';
import classNames from 'classnames';

const Header = ({ styleHeader, styleBackground, styleWhite }) => {
  const [isOpen, setIsOpen] = useState(false);
  const redirection = useNavigate();
  const { userName, userRole, isLoggedIn, onLogout } = useContext(AuthContext);
  const { onDisconnectServer } = useContext(ChatContext);
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
    onDisconnectServer();
    redirection('user/login');
  };
  // Recpie를 누르면 api 요청해서 뿌리는것
  const page = 1;

  // food
  const onClickRecipe = () => {
    redirection('food/recipes');
  };
  const onClickMealkit = () => {
    redirection('food/mealkit');
  };
  const onClickRestaurant = () => {
    redirection('food/restaurant');
  };

  // express
  const onClickExpressCenter = () => {
    redirection('/express/expressCenter');
  };
  const onClickSharedWarehouse = () => {
    redirection('/express/sharedWarehouse');
  };
  const onClickProduct = () => {
    redirection('/express/product');
  };
  const onClickAppliance = () => {
    redirection('/express/appliance');
  };
  const onClickFurniture = () => {
    redirection('/express/furniture');
  };

  // life
  const onClickConvenienceStore = () => {
    redirection('/life/convenienceStore');
  };
  const onClickDrugStore = () => {
    redirection('/life/drugStore');
  };
  const onClickCoinLaundry = () => {
    redirection('/life/coinLaundry');
  };
  const onClickEmergency = () => {
    redirection('/life/Emergency');
  };

  // policy
  const onClickSeoulPolicy = () => {
    redirection('/policy/seoul');
  };
  const onClickSeoulPlace = () => {
    redirection('/policy/place');
  };
  const onClickSeoulCctv = () => {
    redirection('/policy/cctv');
  };

  // community
  const qnaBoardHandler = () => {
    redirection('/board/question');
  };
  const onClickDonation = () => {
    redirection('/board/donation');
  };

  const onClickNavbarBrand = (e) => {
    e.preventDefault();
    redirection('/');
  };

  const onClickParcel = () => {
    redirection('/life/Parcel');
  };

  const onClickSolo = () => {
    redirection('/Solo');
  };

  const onClickPacking = () => {
    redirection('/Packing');
  };

  const onClickAdminChat = () => {
    redirection('/AdminChat');
  };

  return (
    <div
      className={classNames('header_main', {
        [styles['header-white']]: styleWhite,
      })}
      style={styleHeader}
    >
      <Navbar
        light
        expand='md'
        className={styles.nav}
        style={styleBackground}
      >
        <NavbarBrand
          href='#'
          id='navItem'
          onClick={onClickNavbarBrand}
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
                nav
                className={styles.menu_title}
              >
                FOOD
              </DropdownToggle>
              <DropdownMenu className={styles.menu}>
                <DropdownItem onClick={onClickRecipe}>레시피</DropdownItem>
                <DropdownItem onClick={onClickMealkit}>밀키트</DropdownItem>
                <DropdownItem onClick={onClickRestaurant}>
                  혼밥하기 좋은 식당
                </DropdownItem>
              </DropdownMenu>
            </NavHoverDropDown>
            <NavHoverDropDown>
              <DropdownToggle
                nav
                className={styles.menu_title}
              >
                Express
              </DropdownToggle>
              <DropdownMenu className={styles.menu}>
                <DropdownItem onClick={onClickExpressCenter}>
                  이삿짐센터
                </DropdownItem>
                <DropdownItem onClick={onClickSharedWarehouse}>
                  공유창고
                </DropdownItem>
                <DropdownItem onClick={onClickProduct}>
                  자취 생필품
                </DropdownItem>
                <DropdownItem onClick={onClickAppliance}>
                  가전 제품
                </DropdownItem>
                <DropdownItem onClick={onClickFurniture}>가구</DropdownItem>
              </DropdownMenu>
            </NavHoverDropDown>
            <NavHoverDropDown>
              <DropdownToggle
                nav
                className={styles.menu_title}
              >
                Life
              </DropdownToggle>
              <DropdownMenu className={styles.menu}>
                <DropdownItem onClick={onClickConvenienceStore}>
                  편의점
                </DropdownItem>
                <DropdownItem onClick={onClickDrugStore}>약국</DropdownItem>
                <DropdownItem onClick={onClickCoinLaundry}>
                  코인세탁소
                </DropdownItem>
                <DropdownItem onClick={onClickParcel}>무인택배함</DropdownItem>
                <DropdownItem onClick={onClickEmergency}>응급실</DropdownItem>
              </DropdownMenu>
            </NavHoverDropDown>
            <NavHoverDropDown>
              <DropdownToggle
                nav
                className={styles.menu_title}
              >
                policy
              </DropdownToggle>
              <DropdownMenu className={styles.menu}>
                <DropdownItem onClick={onClickSeoulPolicy}>
                  서울시 정책
                </DropdownItem>
                <DropdownItem onClick={onClickSeoulPlace}>
                  지원기관
                </DropdownItem>
                <DropdownItem onClick={onClickSeoulCctv}>
                  CCTV
                </DropdownItem>
              </DropdownMenu>
            </NavHoverDropDown>
            <NavHoverDropDown>
              <DropdownToggle
                nav
                className={styles.menu_title}
              >
                Community
              </DropdownToggle>
              <DropdownMenu className={styles.menu}>
                <DropdownItem>메뉴1</DropdownItem>
                <DropdownItem onClick={qnaBoardHandler}>
                  질문게시판
                </DropdownItem>
                <DropdownItem onClick={onClickDonation}>
                  나눔 게시판
                </DropdownItem>
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
                    {userRole === 'ADMIN' ? (
                      <DropdownItem onClick={onClickAdminChat}>
                        관리자 채팅
                      </DropdownItem>
                    ) : undefined}
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
