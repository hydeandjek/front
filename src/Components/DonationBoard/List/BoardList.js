import React from 'react';
import './BoardList.scss';

const BoardList = ({ name, title, src, url, date, content, count }) => {
  
  return (
    <div className='boardContent'>
      <a href={url}>
        <img src={src} />
        <p>
          {title}
          <span>댓글 {count}</span>
        </p>
        <p>{content}</p>
        <p>
          <span>{name}</span>
          <span>{date}</span>
        </p>
      </a>
    </div>
  );
};

export default BoardList;
