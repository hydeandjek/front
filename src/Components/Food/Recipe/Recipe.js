import React, { useState } from 'react';
import './Recipe.scss';

import arrowR from '../../../assets/img/Right.png';
import arrowL from '../../../assets/img/Left.png';

import { NavLink } from 'react-router-dom';
import SideBarContent from '../../SideBar/SideBarContent';
import PageChange from './PageChange';
import axios from 'axios';

const Recipe = ({ recipeData, onArrowClick }) => {
  // 화살표 클릭 시 상태변수 관리
  let [leftClicked, setLeftClicked] = useState(1);
  let [rightClicked, setRightClicked] = useState(1);

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
      src: recipeData.COOKRCP01.row[0].ATT_FILE_NO_MAIN,
      name: recipeData.COOKRCP01.row[0].RCP_NM,
    },
    {
      id: 2,
      src: recipeData.COOKRCP01.row[1].ATT_FILE_NO_MAIN,
      name: recipeData.COOKRCP01.row[1].RCP_NM,
    },
    {
      id: 3,
      src: recipeData.COOKRCP01.row[2].ATT_FILE_NO_MAIN,
      name: recipeData.COOKRCP01.row[2].RCP_NM,
    },
    {
      id: 4,
      src: recipeData.COOKRCP01.row[3].ATT_FILE_NO_MAIN,
      name: recipeData.COOKRCP01.row[3].RCP_NM,
    },
    {
      id: 5,
      src: recipeData.COOKRCP01.row[4].ATT_FILE_NO_MAIN,
      name: recipeData.COOKRCP01.row[4].RCP_NM,
    },
    {
      id: 6,
      src: recipeData.COOKRCP01.row[5].ATT_FILE_NO_MAIN,
      name: recipeData.COOKRCP01.row[5].RCP_NM,
    },
    {
      id: 7,
      src: recipeData.COOKRCP01.row[6].ATT_FILE_NO_MAIN,
      name: recipeData.COOKRCP01.row[6].RCP_NM,
    },
    {
      id: 8,
      src: recipeData.COOKRCP01.row[7].ATT_FILE_NO_MAIN,
      name: recipeData.COOKRCP01.row[7].RCP_NM,
    },
    {
      id: 9,
      src: recipeData.COOKRCP01.row[8].ATT_FILE_NO_MAIN,
      name: recipeData.COOKRCP01.row[8].RCP_NM,
    },
  ];

  // console.log('res: ', res);

  const sendPageNum = async (e) => {
    if (e.target.id === 'left') {
      setLeftClicked((prevClicked) => prevClicked - 1);
    } else if (e.target.id === 'right') {
      setRightClicked((prevClicked) => prevClicked + 1);
    }
    const totalClicked = rightClicked + leftClicked;
    const pageNum = rightClicked + leftClicked;

    // console.log('총 클릭한 횟수:', totalClicked);
    console.log('페이지 넘버:', pageNum);

    // 부모에서 선언된 함수를 호출하여 페이지넘을 매개변수로 보내자.
    await onArrowClick(pageNum);

    // try {
    //   const response = null;
    //   if (pageNum !== 0) {

    //     response = await axios.get('/api/menu/recipe/total/' + pageNum);
    //   }
    //   console.log('서버 응답:', response.data);
    // } catch (error) {
    //   console.error('서버 통신 에러:', error);
    // }
  };

  return (
    <>
      <div className='arrowBox'>
        <PageChange
          id='left'
          src={arrowL}
          alt='이전 페이지'
          onClick={sendPageNum}
          style={{ opacity: isHovered ? 0.5 : 1 }}
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
