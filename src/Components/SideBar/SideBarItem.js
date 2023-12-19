import React, { useState } from 'react';
import './SideBarItem.scss';
import { NavLink } from 'react-router-dom';

function SideBarItem({ menu, onMenuClick }) {
  const handleClick = () => {
    // 클릭 시 메뉴 정보 전달
    onMenuClick(menu);
  };
  const rec = [
    { id: 1, name: '국&찌개', src: '' },
    { id: 2, name: '반찬', src: '' },
    { id: 3, name: '후식', src: '' },
    { id: 4, name: '일품', src: '' },
    { id: 5, name: '밥', src: '' },
  ];
  const [showRecipe, setShowRecipe] = useState(false);

  const onClickRec = (e) => {
    const clickedContent = e.target.textContent.trim();
    console.log(clickedContent);
    if (clickedContent === '레시피') {
      setShowRecipe(!showRecipe);
    } else {
      setShowRecipe(false); // 다른 메뉴 클릭 시 레시피 메뉴 숨기기
    }
  };

  return (
    <div
      className='sidebar-item'
      onClick={handleClick}
    >
      <ul onClick={onClickRec}>{menu.name}</ul>
      {showRecipe && menu.name.trim() === '레시피' && (
        <div className='recipe-menu'>
          {rec.map((item, index) => (
            <div
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
