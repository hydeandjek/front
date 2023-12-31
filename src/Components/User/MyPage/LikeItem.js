import React from 'react';

function LikeItem({ id, title, isLiked, handleLike }) {
  const handleClick = () => {
    handleLike(id);
  };

  return (
    <div>
      <h3>{title}</h3>
      <button onClick={handleClick}>
        {isLiked ? '좋아요 취소' : '좋아요'}
      </button>
    </div>
  );
}

export default LikeItem;
