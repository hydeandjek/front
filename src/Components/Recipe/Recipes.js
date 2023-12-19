import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SidebarItem from '../SideBar/SideBarItem';
import './Recipes.scss';
import Recipe from './Recipe';
import axios from 'axios';

const Recipes = () => {
  const menus = [
    { id: 1, name: ' 혼밥하기 좋은 맛집' },
    { id: 2, name: ' 레시피' },
  ];

  const [selectedMenu, setSelectedMenu] = useState();

  //SidebarItem 클릭 시 처리할 함수
  const onMenuClick = (menu) => {
    setSelectedMenu(menu); // 선택된 사이드바 업데이트
    onResClick(menu); // 해당 메뉴 정보로 데이터 요청
  };
  const [data, setData] = useState();
  const onResClick = (menu) => {
    async function getData() {
      const res = await axios
        .get('/api/recipe/rcp_pat2=', {
          params: {
            id: menu.id,
          },
        })
        .then((res) => {
          setData(res.data);
        });
    }
  };
  return (
    <div className='warp-side'>
      <div>
        <div className='rec_center'>
          <div>FOOD</div>
          <div className='side'>
            <div className='sidebar'>
              {menus.map((menu, index) => {
                return (
                  <NavLink
                    style={{ textDecoration: 'none' }}
                    to={menu.path}
                    key={index}
                  >
                    <SidebarItem
                      menu={menu}
                      onMenuClick={onMenuClick}
                    />
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className='warp-content'>
        <Recipe />
      </div>
    </div>
  );
};

export default Recipes;
