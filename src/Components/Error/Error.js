import React from 'react';
import './Error.css';
/**
 * ErrorBoundary에 잡혔을 경우, 보여줄 Fallback 컴포넌트
 * @param {FallbackProps} props error, resetErrorBoundary
 * @returns {JSX.Element} Fallback UI
 */
const Error = ({ error, resetErrorBoundary }) => {
  //   const [errorMessage, setErrorMessage] = useRecoilState(errorState);
  //   const router = useRouter();
  return (
    <div className='error-page'>
      <div className='error-page-content'>
        <h1 className='error-page-heading'>Oops!</h1>
        <p className='error-page-message'>
          죄송합니다. 페이지를 찾을 수 없습니다.
        </p>
        <p>{error.message}</p>
        {/* <img
          className='error-page-image'
          src='/images/error-image.png'
          alt='Error'
        /> */}
        {/* <a
          className='error-page-link'
          onClick={resetErrorBoundary}
        >
          다시 시도하기
        </a> */}
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
