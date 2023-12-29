import React, { useEffect, useState } from 'react';
import { API_BASE_URL, QUESTIONBOARD } from '../../config/host-config';
import { useNavigate } from 'react-router-dom';
import { getLoginUserInfo } from '../../utils/login-utill';

const QnaBoardHandler = () => {
//   const REQUEST_URL = API_BASE_URL + QUESTIONBOARD;
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const redirection = useNavigate();
//   console.log('aaaaaaaaaa');

//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   useEffect(() => {
//     // 컴포넌트가 렌더링 될 때 인가 코드를 백엔드로 전송하는 fetch 요청
//     const boardInfo = async () => {
//       const res = await fetch(`${REQUEST_URL}`);
//       const { board_id, title, userName, reg_date } = await res.json(); // 서버에서 온 json 읽기

//       console.log(board_id, title, userName, reg_date);

//       // 홈으로 리다이렉트
//       redirection('/board/question');
//     };
//     boardInfo();
//   }, []);

//   return (
//     <>
//       <div></div>
//     </>
//   );
// };

export default QnaBoardHandler;
