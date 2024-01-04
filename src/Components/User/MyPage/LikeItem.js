import React from 'react';
import './LikeItem.scss';

function LikeItem({ id, src, title, handleLike }) {
  const handleClick = () => {
    handleLike(title, src);
  };

  return (
    <div className='content-item-mypage'>
      <img
        src={src}
        alt={title}
      />
      <p>{title}</p>
      <button
        onClick={handleClick}
        className='heart-icon'
      ></button>
    </div>
  );
}

export default LikeItem;
