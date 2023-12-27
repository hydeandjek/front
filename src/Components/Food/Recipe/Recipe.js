import React, { useState } from 'react';
import './Recipe.scss';

import arrowR from '../../../assets/img/Right.png';
import arrowL from '../../../assets/img/Left.png';

import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import SideBarContent from '../../SideBar/SideBarContent';
import PageChange from './PageChange';
import axios from 'axios';
import { API_BASE_URL } from '../../../config/host-config';
import RecipeDetail from './RecipeDetail';
import { AuthContextProvider } from '../../../utils/AuthContext';
import { ChatContextProvider } from '../../../utils/ChatContext';

const Recipe = ({ recipeData, onArrowClick }) => {
  //화면 전환 위해
  const redirection = useNavigate();

  //페이지넘 상태 관리
  let [pageNum, setPageNum] = useState(1);

  // 마우스 오버 효과
  const [isHovered, setIsHovered] = useState(false);

  const [isClicked, setIsClicked] = useState(false);

  const [hoveredRecipe, setHoveredRecipe] = useState(null);

  const handleMouseEnter = (recipeId) => {
    setIsHovered(true);
    setHoveredRecipe(recipeId);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHoveredRecipe(null);
  };

  // 상세 컴포넌트로 보낼 데이터 상태 관리
  // const [detailData, setDetailData] = useState([]);

  if (!recipeData) return;

  const res = [
    {
      id: 1,
      seq: recipeData.COOKRCP01.row[0].RCP_SEQ,
      cate: recipeData.COOKRCP01.row[0].RCP_PAT2,
      src: recipeData.COOKRCP01.row[0].ATT_FILE_NO_MAIN,
      name: recipeData.COOKRCP01.row[0].RCP_NM,
    },
    {
      id: 2,
      seq: recipeData.COOKRCP01.row[1].RCP_SEQ,
      cate: recipeData.COOKRCP01.row[1].RCP_PAT2,
      src: recipeData.COOKRCP01.row[1].ATT_FILE_NO_MAIN,
      name: recipeData.COOKRCP01.row[1].RCP_NM,
    },
    {
      id: 3,
      seq: recipeData.COOKRCP01.row[2].RCP_SEQ,
      cate: recipeData.COOKRCP01.row[2].RCP_PAT2,
      src: recipeData.COOKRCP01.row[2].ATT_FILE_NO_MAIN,
      name: recipeData.COOKRCP01.row[2].RCP_NM,
    },
    {
      id: 4,
      seq: recipeData.COOKRCP01.row[3].RCP_SEQ,
      cate: recipeData.COOKRCP01.row[3].RCP_PAT2,
      src: recipeData.COOKRCP01.row[3].ATT_FILE_NO_MAIN,
      name: recipeData.COOKRCP01.row[3].RCP_NM,
    },
    {
      id: 5,
      seq: recipeData.COOKRCP01.row[4].RCP_SEQ,
      cate: recipeData.COOKRCP01.row[4].RCP_PAT2,
      src: recipeData.COOKRCP01.row[4].ATT_FILE_NO_MAIN,
      name: recipeData.COOKRCP01.row[4].RCP_NM,
    },
    {
      id: 6,
      seq: recipeData.COOKRCP01.row[5].RCP_SEQ,
      cate: recipeData.COOKRCP01.row[5].RCP_PAT2,
      src: recipeData.COOKRCP01.row[5].ATT_FILE_NO_MAIN,
      name: recipeData.COOKRCP01.row[5].RCP_NM,
    },
    {
      id: 7,
      seq: recipeData.COOKRCP01.row[6].RCP_SEQ,
      cate: recipeData.COOKRCP01.row[6].RCP_PAT2,
      src: recipeData.COOKRCP01.row[6].ATT_FILE_NO_MAIN,
      name: recipeData.COOKRCP01.row[6].RCP_NM,
    },
    {
      id: 8,
      seq: recipeData.COOKRCP01.row[7].RCP_SEQ,
      cate: recipeData.COOKRCP01.row[7].RCP_PAT2,
      src: recipeData.COOKRCP01.row[7].ATT_FILE_NO_MAIN,
      name: recipeData.COOKRCP01.row[7].RCP_NM,
    },
    {
      id: 9,
      seq: recipeData.COOKRCP01.row[8].RCP_SEQ,
      cate: recipeData.COOKRCP01.row[8].RCP_PAT2,
      src: recipeData.COOKRCP01.row[8].ATT_FILE_NO_MAIN,
      name: recipeData.COOKRCP01.row[8].RCP_NM,
    },
  ];

  // console.log('res: ', res);

  const pageCount = Math.floor(recipeData.COOKRCP01.total_count / 9);
  // console.log(recipeData);
  const sendPageNum = async (e) => {
    if (e.target.id === 'right' && pageNum < pageCount) {
      setPageNum((pageNum += 1));
    } else if (e.target.id === 'left' && pageNum > 1) {
      setPageNum((pageNum -= 1));
    }

    // console.log('총 클릭한 횟수:', totalClicked);
    console.log('페이지 넘버:', pageNum);

    // 부모에서 선언된 함수를 호출하여 페이지넘을 매개변수로 보내자.
    await onArrowClick(pageNum);
  };

  const onRecipeDetail = async (name, cate, seq) => {
    // 부모에서 선언된 함수를 호출하여 카테고리와 ID를 매개변수로 보내자.
    console.log(
      `메뉴명: ${name}, 카테고리:${cate}, id: ${seq}인 레시피 상세 요청!`
    );
    try {
      // await onDetailClick();
      const res = await axios.get(
        API_BASE_URL +
          '/api/menu/recipe/detail/' +
          name +
          '/' +
          cate +
          '/' +
          seq
      );
      const data = await res.data.COOKRCP01.row; // []
      console.log(data);
      console.log(data[0]);

      // if (data.length > 0) {
      // setDetailData(data[0]);
      // setIsClicked(true);
      // 경로 이동 시 데이터 전달 가능
      redirection('/food/recipes/detail', { state: { data } });
      // }
    } catch (error) {
      console.error('레시피 상세보기 요청에 실패했습니다.', error);
    }
  };

  return (
    <>
      <div className='arrowBox'>
        {pageNum > 1 && (
          <PageChange
            id='left'
            src={arrowL}
            alt='이전 페이지'
            onClick={sendPageNum}
            style={{
              opacity: isHovered ? 0.5 : 1,
              display: pageNum === 1 ? 'none' : 'block',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        )}
      </div>

      <div className='contentBox'>
        {res.map((content, index) => {
          // console.log('src in map: ', content.src);
          return (
            <SideBarContent
              src={content.src}
              key={index}
              name={content.name}
              onClick={() =>
                onRecipeDetail(content.name, content.cate, content.seq)
              }
              style={{ opacity: hoveredRecipe === index ? 0.5 : 1 }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            ></SideBarContent>
          );
        })}
      </div>
      <div className='arrowBox'>
        {pageNum < pageCount && (
          <PageChange
            id='right'
            src={arrowR}
            alt='다음 페이지'
            onClick={sendPageNum}
            style={{ opacity: isHovered ? 0.5 : 1 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        )}
      </div>
    </>
  );
};

export default Recipe;
