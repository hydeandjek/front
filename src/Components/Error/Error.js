import React from 'react';
import './Error.css';

const Error = () => {
  return (
    <div className='error-page'>
      <div className='error-page-content'>
        <h1 className='error-page-heading'>Oops!</h1>
        <p className='error-page-message'>
          죄송합니다. 페이지를 찾을 수 없습니다.
        </p>
        <img
          className='error-page-image'
          src='/images/error-image.png'
          alt='Error'
        />
        <a
          className='error-page-link'
          href='/'
        >
          홈으로 돌아가기
        </a>
      </div>
    </div>
  );
};

export default Error;
