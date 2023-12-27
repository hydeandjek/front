import React, { useState } from 'react';
import './SideBarItem.scss';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../../config/host-config';

function SideBarItem({
  menu,
  onMenuClick,
  recipe2Data,
  onArrowClick,
  pageNum = 1, // recipe > recipes 에서 넘어온 페이지넘
}) {
  const rec = [
    { id: 1, name: '국&찌개', src: '' },
    { id: 2, name: '반찬', src: '' },
    { id: 3, name: '후식', src: '' },
    { id: 4, name: '일품', src: '' },
    { id: 5, name: '밥', src: '' },
  ];
  const [showRecipe, setShowRecipe] = useState(false);

  // const pageNum = 1;

  const onClickRec = async (e) => {
    const clickedContent = e.target.textContent.trim();
    console.log(clickedContent);

    if (clickedContent === '레시피') {
      if (!showRecipe) {
        setShowRecipe(!showRecipe);
      } else {
        setShowRecipe(false); // 다른 메뉴 클릭 시 레시피 메뉴 숨기기
      }
    } else {
      setShowRecipe(false); // 다른 메뉴 클릭 시 레시피 메뉴 숨기기
    }
  };
  const [props, setProps] = useState();
  const onClickMenu = async (e) => {
    let clickedCate = e.target.textContent.trim();
    console.log(clickedCate);
    if (clickedCate === '국&찌개') {
      clickedCate = '국';
    }
    const res = await axios.get(
      API_BASE_URL + '/api/menu/recipe/' + clickedCate + '/' + pageNum
      // 부모에서 선언된 함수를 호출하여 페이지넘을 매개변수로 보내자.
    );
    // const rres = await onArrowClick(pageNum);
    console.log(res.data);
    if (typeof onMenuClick === 'function') {
      onMenuClick(res.data); // 데이터를 부모 컴포넌트로 전달
    }
  };

  return (
    <div className='sidebar-item'>
      <ul onClick={onClickRec}>{menu.name}</ul>
      {showRecipe && menu.name.trim() === '레시피' && (
        <div className='recipe-menu'>
          {rec.map((item, index) => (
            <div
              className='category'
              onClick={onClickMenu}
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

export default SideBarItem;
