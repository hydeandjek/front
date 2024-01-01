import React, { useState } from 'react';
import { API_BASE_URL, CATEGORYBOARD } from '../../config/host-config';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import '../SideBar/SideBarItem.scss';

function OneLifeSideBarItem({
  menu,
  fetchDataHandler,
  // fetchCategoryCommentData,
}) {
  const rec = [
    { id: 'entire', name: '전체', src: '' },
    { id: 'recipe', name: '레시피', src: '' },
    { id: 'dwelling', name: '주거', src: '' },
    { id: 'life', name: '라이프', src: '' },
    { id: 'Policy', name: '정책', src: '' },
    { id: 'trade', name: '중고거래', src: '' },
  ];

  const QUESTION_URL = API_BASE_URL + CATEGORYBOARD;
  const [showother, setShowOther] = useState(false);

  // const pageNum = 1;
  let content;

  const onClickRec = async (e) => {
    const clickedContent = e.target.textContent.trim();

    if (clickedContent === '카테고리 게시판') {
      if (!showother) {
        setShowOther(!showother);
      } else {
        setShowOther(false); // 다른 메뉴 클릭 시 레시피 메뉴 숨기기
      }
    } else {
      setShowOther(false); // 다른 메뉴 클릭 시 레시피 메뉴 숨기기
    }
  };

  //   const [props, setProps] = useState();
  const onClickMenu = async (e) => {
    // let clickedCate = e.target.textContent.trim();

    fetchDataHandler(e);
    // fetchCategoryCommentData(e);
  };

  return (
    <div className='sidebar-item'>
      <ul onClick={onClickRec}>{menu.name}</ul>
      {showother && menu.name.trim() === '카테고리 게시판' && (
        <div className='recipe-menu'>
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
      )}
    </div>
  );
}

export default OneLifeSideBarItem;
