/* eslint-disable no-undef */
import React, { useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SidebarItem from '../../SideBar/SideBarItem';
import './Recipes.scss';
import Recipe from './Recipe';
import axios from 'axios';
import { get } from 'lodash';
import { API_BASE_URL } from '../../../config/host-config';

const Recipes = (props) => {
  const menus = [
    { id: 1, name: ' 레시피' },
    { id: 2, name: ' 혼밥하기 좋은 맛집' },
  ];
  const [selectedMenu, setSelectedMenu] = useState();

  //SidebarItem 클릭 시 처리할 함수
  const onMenuClick = (props) => {
    // console.log('자식놈한테 데이터 받아올 함수!');
    // console.log('자식놈한테 받은 데이타: ', props);
    setData(props);
  };

  const onResClick = (menu) => {
    async function getData() {
      const res = await axios.get('/api/menu/recipe/total/', 1).then((res) => {
        setData(res.data);
      });
      // console.log(res);
    }
    getData();
    // console.log(getData());
  };

  const page = 1;
  const [data, setData] = useState();
  const [getRecipe, setGetRecipe] = useState();

  // const fetchData = useCallback(async () => {
  //   const res = await axios.get(
  //     API_BASE_URL + '/api/menu/recipe/total/' + page
  //   );
  //   console.log('fetchData', res.data);
  //   setData(res.data);
  // }, [data]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        API_BASE_URL + '/api/menu/recipe/total/' + page
      );
      // console.log('fetchData', res.data);
      setData(res.data);
    };
    fetchData();
  }, []);

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
        <Recipe recipeData={data} />
      </div>
    </div>
  );
};

export default Recipes;
