import React, { useState } from 'react';
import { API_BASE_URL, CATEGORYBOARD } from '../../config/host-config';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function OneLifeSideBarItem({ menu, fetchDataHandler }) {
  const rec = [
    { id: 'entire', name: '전체', src: '' },
    { id: 'recipe', name: '레시피', src: '' },
    { id: 'dwelling', name: '주거', src: '' },
    { id: 'life', name: '라이프', src: '' },
    { id: 'Policy', name: '정책', src: '' },
    { id: 'trade', name: '중고거래', src: '' },
  ];

  // console.log(menu);

  const QUESTION_URL = API_BASE_URL + CATEGORYBOARD;
  const [showRecipe, setShowRecipe] = useState(false);

  // const pageNum = 1;
  let content;

  if (menu === '카테고리 게시판') {
  } else {
  }

  const onClickRec = async (e) => {
    const clickedContent = e.target.textContent.trim();
    console.log(clickedContent);

    if (clickedContent === '카테고리 게시판') {
      if (!showRecipe) {
        setShowRecipe(!showRecipe);
      } else {
        setShowRecipe(false); // 다른 메뉴 클릭 시 레시피 메뉴 숨기기
      }
    } else {
      setShowRecipe(false); // 다른 메뉴 클릭 시 레시피 메뉴 숨기기
    }
  };

  //   const [props, setProps] = useState();
  const onClickMenu = async (e) => {
    // let clickedCate = e.target.textContent.trim();
    console.log(e);

    fetchDataHandler(e);
  };

  return (
    <div className='sidebar-item'>
      <ul onClick={onClickRec}>{menu.name}</ul>
      <div className='recipe-menu'>
        {showRecipe}
        {rec.map((item, index) => (
          <div
            className='category'
            onClick={(e) => onClickMenu(item.id)}
            style={{ textDecoration: 'none' }}
            to={item.path}
            key={index}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>

    // <div>
    //   {/* 다른 JSX */}
    //   <p>이 부분은 다른 JSX의 일부입니다.</p>
    //   {content}
    //   <p>이 부분도 다른 JSX의 일부입니다.</p>
    //   {/* 다른 JSX */}
    // </div>
  );
}

export default OneLifeSideBarItem;
