import React from 'react';
import './DetailList.scss';

const DetailList = ({ url, src }) => {
  
  return (
    <div className='detailContent'>
      <a href={url}>
        <img src={src} />
      </a>
    </div>
  );
};

export default DetailList;
