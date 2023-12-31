import React, { useState } from 'react';
import LikeItem from './LikeItem';
import { NavLink } from 'react-router-dom';
import SideBarItem2 from '../../SideBar/SideBar2/SideBarItem2';
import '../../SideBar/SideBar2/SideBarItem2.scss';
import { mypage } from '../../../assets/constants';

function LikeList() {
  const [items, setItems] = useState([
    { id: 1, title: '아이템 1', isLiked: false },
    { id: 2, title: '아이템 2', isLiked: true },
    { id: 3, title: '아이템 3', isLiked: true },
  ]);

  const handleLike = (itemId) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, isLiked: !item.isLiked };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const likedItems = items.filter((item) => item.isLiked);

  return (
    <div className='ssk'>
      <div
        id='likeList2'
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <h2>내가 좋아요한 목록</h2>
        {likedItems.length === 0 ? (
          <p>좋아요한 항목이 없습니다.</p>
        ) : (
          <ul>
            {likedItems.map((item) => (
              <li key={item.id}>
                <LikeItem
                  id={item.id}
                  title={item.title}
                  isLiked={item.isLiked}
                  handleLike={handleLike}
                />
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className='rec_center2'>
        MyPage
        <div className='side2'>
          <div className='sidebar2'>
            {mypage.map((menu, index) => {
              return (
                <NavLink
                  style={{ textDecoration: 'none' }}
                  to={menu.path}
                  key={index}
                >
                  <SideBarItem2 menu={menu} />
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LikeList;
