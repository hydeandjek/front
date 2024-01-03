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
import RecipeDetail from './RecipeDetail';
import Loading from '../../LoadingBar/Loading';
import { food } from '../../../assets/constants';

const Recipes = (props) => {
  const [loading, setLoading] = useState(false);
  // const menus = [
  //   { id: 1, name: ' 레시피' },
  //   { id: 2, name: ' 밀키트' },
  //   { id: 3, name: ' 혼밥하기 좋은 맛집' },
  // ];
  const menus = food;
  const [selectedCate, setSelectedCate] = useState('');

  //SidebarItem 클릭 시 처리할 함수
  const onMenuClick = (props) => {
    // console.log('자식놈한테 데이터 받아올 함수!');
    console.log('자식놈한테 받은 데이타: ', props);
    console.log('카테고리 세팅: ', props.COOKRCP01.row[0].RCP_PAT2);
    setSelectedCate(props.COOKRCP01.row[0].RCP_PAT2);

    setData(props);
  };

  const onResClick = (menu) => {
    async function getData() {
      const res = await axios
        .get(API_BASE_URL + '/api/menu/recipe/total/', 1)
        .then((res) => {
          setData(res.data);
        });
      // console.log(res);
    }
    getData();
    // console.log(getData());
  };

  const fetchData = async (pageNum = 1) => {
    setLoading(true);
    // 전체인지 카테고리별인지 구분하기
    if (!selectedCate) {
      // selectedCate===''이라면
      const res = await axios.get(
        API_BASE_URL + '/api/menu/recipe/total/' + pageNum
      );
      setData(res.data);
      setLoading(false);
    } else {
      const res = await axios.get(
        API_BASE_URL + '/api/menu/recipe/' + selectedCate + '/' + pageNum
      );
      setData(res.data);
      setLoading(false);
    }
    // console.log('fetchData', res.data);
    // setData(res.data);
  };
  //
  // ********** 페이지 변경 시 **************
  const [pageNum, setPageNum] = useState(1);
  const onArrowClick = (props) => {
    // 페이지넘 받아올 것임.!!
    // console.log('자식놈한테 데이터 받아올 함수!');
    // console.log('자식놈한테 받은 데이타: ', props);
    console.log(props);
    // setData(props);
    setPageNum(props); // 받아온 페이지넘을 저장
    fetchData(props);
  };

  /*************** 레시피 상세 클릭 시 ************** */
  // const onDetailClick = async () => {
  //   const res = await axios.get(
  //     API_BASE_URL + '/api/menu/recipe/detail/' + selectedCate + '/' + pageNum
  //   );
  // };

  const [data, setData] = useState();
  const [getRecipe, setGetRecipe] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='warp-side'>
      {loading ? <Loading /> : null}
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
                      onArrowClick={onArrowClick}
                      pageNum={pageNum}
                    />
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className='not-sidebar'>
        <div className='warp-title'>{selectedCate}</div>
        <div className='warp-content'>
          <Recipe
            recipeData={data}
            onArrowClick={onArrowClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Recipes;
