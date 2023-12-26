/* eslint-disable no-undef */
import React, { useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SidebarItem from '../../SideBar/SideBarItem';
import './Recipes.scss';
import Recipe from './Recipe';
import axios from 'axios';
import { get } from 'lodash';
import { API_BASE_URL } from '../../../config/host-config';
import PageChange from './PageChange';

const Recipes = (props) => {
  const menus = [
    { id: 1, name: ' 레시피' },
    { id: 2, name: ' 밀키트' },
    { id: 3, name: ' 혼밥하기 좋은 맛집' },
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
      const res = await axios.get(API_BASE_URL + '/api/menu/recipe/total/', 1).then((res) => {
        setData(res.data);
      });
      // console.log(res);
    }
    getData();
    // console.log(getData());
  };

  const fetchData = async (pageNum = 1) => {
    const res = await axios.get(
      API_BASE_URL + '/api/menu/recipe/total/' + pageNum
    );
    // console.log('fetchData', res.data);
    setData(res.data);
  };
  //
  // ********** 페이지 변경 시 **************
  const onArrowClick = (props) => {
    // 페이지넘 받아올 것임.!!
    // console.log('자식놈한테 데이터 받아올 함수!');
    // console.log('자식놈한테 받은 데이타: ', props);
    console.log(props);
    // setData(props);
    fetchData(props);
  };

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
    // const fetchData = async (pageNum = 1) => {
    //   const res = await axios.get(
    //     API_BASE_URL + '/api/menu/recipe/total/' + pageNum
    //   );
    //   // console.log('fetchData', res.data);
    //   setData(res.data);
    // };
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
        <Recipe
          recipeData={data}
          onArrowClick={onArrowClick}
        />
      </div>
    </div>
  );
};

export default Recipes;
