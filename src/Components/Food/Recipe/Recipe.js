import React, { useState } from 'react';
import './Recipe.scss';

import arrowR from '../../../assets/img/Right.png';
import arrowL from '../../../assets/img/Left.png';

import { NavLink } from 'react-router-dom';
import SideBarContent from '../../SideBar/SideBarContent';
import PageChange from './PageChange';
import axios from 'axios';
import { API_BASE_URL } from '../../../config/host-config';

const Recipe = ({ recipeData, onArrowClick }) => {
  //페이지넘 상태 관리
  const [pageNum, setPageNum] = useState(1);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

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

  const sendPageNum = async (e) => {
    if (e.target.id === 'left') {
      setPageNum((prevClicked) => prevClicked - 1);
    } else if (e.target.id === 'right') {
      setPageNum((prevClicked) => prevClicked + 1);
    }
    // const totalClicked = rightClicked + leftClicked;
    // const pageNum = rightClicked + leftClicked;

    // console.log('총 클릭한 횟수:', totalClicked);
    console.log('페이지 넘버:', pageNum);

    // 부모에서 선언된 함수를 호출하여 페이지넘을 매개변수로 보내자.
    await onArrowClick(pageNum);
  };

  const onRecipeDetail = async (cate, seq) => {
    // 부모에서 선언된 함수를 호출하여 카테고리와 ID를 매개변수로 보내자.
    console.log(`카테고리:${cate}, id: ${seq}인 레시피 상세 요청!`);
    try {
      // await onDetailClick();
      const res = await axios.get(
        API_BASE_URL + '/api/menu/recipe/detail/' + cate + '/' + seq
      );
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error('레시피 상세보기 요청에 실패했습니다.', error);
    }
  };

  return (
    <>
      <div className='arrowBox'>
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
      </div>

      <div className='contentBox'>
        {res.map((content, index) => {
          // console.log('src in map: ', content.src);
          return (
            <SideBarContent
              src={content.src}
              key={index}
              name={content.name}
              onClick={() => onRecipeDetail(content.cate, content.seq)}
            ></SideBarContent>
          );
        })}
      </div>
      <div className='arrowBox'>
        <PageChange
          id='right'
          src={arrowR}
          alt='다음 페이지'
          onClick={sendPageNum}
          style={{ opacity: isHovered ? 0.5 : 1 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </>
  );
};

export default Recipe;
