import React from 'react';
import './BoardList.scss';

const BoardList = ({ url, name, src, price }) => {
  
  return (
    <div className='boardContent'>
      <a href={url}>
        <img src={src} />
        <p>{price}</p>
        <p>{name}</p>
        <p>{price}</p>
        <p>{price}</p>
      </a>
    </div>
  );
};

export default BoardList;
