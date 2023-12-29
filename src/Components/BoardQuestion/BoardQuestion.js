import React, { useEffect, useState, useHistory } from 'react';

import './BoardQuestion.scss';
import { API_BASE_URL, QUESTIONBOARD } from '../../config/host-config';
import { NavLink, useNavigate } from 'react-router-dom';
import { first } from 'lodash';

import { board } from '../../assets/constants/index.js';
import SideBarItem2 from '../SideBar/SideBar2/SideBarItem2';

import icon1 from '../../assets/img/icon1.png';
import icon2 from '../../assets/img/icon2.png';

const BoardQuestion = () => {
  const [data, setData] = useState([]);
  const REQUEST_URL = API_BASE_URL + QUESTIONBOARD;
  const redirection = useNavigate();
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);
  const [countNum, setCountNum] = useState(false);
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const requestHeader = {
    'content-type': 'application/json',
    // JWT에 대한 인증 토큰이라는 타입을 선언
    Authorization: 'Bearer ' + localStorage.getItem('LOGIN_TOKEN'),
  };

  const fetchData = async () => {
    try {
      const res = await fetch(REQUEST_URL);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await res.json();

      const i = 1;

      if (result.length > 0) {
        const processedData = result.map((item) => ({
          rowNumber: item.rowNumber,
          boardId: item.boardId,
          title: item.title,
          conten: item.content,
          regDate: new Date(item.regDate).toISOString().split('T')[0],
          userId: item.userId.slice(0, 4),
          userName: item.userName,
        }));

        // 데이터를 상태에 업데이트
        setData(processedData);
      } else {
        console.log('No data received from the server.');
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array means this effect runs once after initial render

  const processedData = data.map((item) => ({
    boardId: item.boardId,
    title: item.title,
    userId: item.userId,
    regDate: item.regDate,
  }));
  const renderedData = processedData.map((item) => (
    <div
      key={item.boardId}
      className='content-text-wrapper'
    >
      <div className='text-wrapper a1'>{item.boardId}</div>
      <div className='text-wrapper a3'>{item.title}</div>
      <div className='text-wrapper a4'>{item.userId}</div>
      <div className='text-wrapper a5'>{item.regDate}</div>
    </div>
  ));

  const boarddetailhandleClick = (selectedItem) => {
    // 선택된 아이템에 대한 로직을 수행
    redirection('/board/question/detaile', { state: { board: selectedItem } });
  };

  const QnaAddBoardHandler = async () => {
    const titleAddElement = document.getElementsByClassName('title')[0];
    const contentAddElement = document.getElementsByClassName('content')[0];
    const titleAdd = titleAddElement ? titleAddElement.value : '';
    const contentAdd = contentAddElement ? contentAddElement.value : '';
    document.getElementsByClassName('title')[0].value = '';
    document.getElementsByClassName('content')[0].value = '';

    if (!titleAdd || !contentAdd) {
      alert('제목과 내용을 모두 입력해주세요.');
      return; // 요청을 보내지 않고 함수를 종료
    }

    if (!localStorage.getItem('LOGIN_TOKEN')) {
      alert('로그인 후 이용해주세요');
      return;
    }

    const BoardAdd = await fetch(REQUEST_URL, {
      method: 'POST', // 또는 'PUT'에 따라 사용하고자 하는 HTTP 메서드 선택
      headers: requestHeader,
      body: JSON.stringify({
        title: titleAdd, // 이 부분에서 직접 사용
        content: contentAdd, // 이 부분에서 직접 사용
      }),
    });
    // setRefresh((prevRefresh) => prevRefresh + 1);

    fetchData();
  };

  const beforePageHandler = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    // setStartIndex(startIndex - 10);
    // setEndIndex(endIndex - 10);
    setCountNum(false);
  };

  const afterPageHandler = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    // setStartIndex(startIndex + 10);
    // setEndIndex(endIndex + 10);
  };

  const pageNumHandler = (pageNumber) => {
    const buttonText = pageNumber.target.innerText;
    // setCurrentPage(pageNumber);
    setStartIndex((buttonText - 1) * 10);
    setEndIndex(buttonText * 10);
  };

  const renderPageButtons = () => {
    const startNumber = (currentPage - 1) * itemsPerPage + 1;
    const endNumber = startNumber + itemsPerPage - 1;
    let pageNumber;

    return Array.from({ length: itemsPerPage }).map((_, index) => {
      if (data.length <= (startNumber + index - 1) * 10) {
        return;
      } else {
        pageNumber = startNumber + index;
      }
      return (
        <button
          key={pageNumber}
          className={`a num${index + 1}`}
          onClick={pageNumHandler}
        >
          {pageNumber}
        </button>
      );
    });
  };

  return (
    <>
    <board id='board'>
      <div className='App_wrap-content__1j7ZVa'>
        <div className='side22'>
          <div className='sidebar2'>
            {board.map((menu, index) => {
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
        <div className='ppps'>
          <div id='community'>
            <h5>질문게시판</h5>

            <div className='overlap-wrapper'>
              <div className='overlap'>
                <div className='content-text-wrapper'>
                  <div className='text-wrapper a1'>No</div>
                  {/* <div className='text-wrapper a2'>게시판</div> */}
                  <div className='text-wrapper a3'>제목</div>
                  <div className='text-wrapper a4'>글쓴이</div>
                  <div className='text-wrapper a5'>작성일자</div>
                </div>
                <div className='createBoard'>
                  <div className='createBoardA'>
                    <input
                      type='text'
                      placeholder='제목을 입력하세요'
                      className='title'
                    />
                    <input
                      type='text'
                      placeholder='내용을 입력하세요'
                      className='content'
                    />
                  </div>
                  <div className='createBoardB'>
                    <button
                      onClick={QnaAddBoardHandler}
                      className='btnBoard'
                    >
                      등록
                    </button>
                  </div>
                </div>

                <div className='overlap-group1'>
                  {data.slice(startIndex, endIndex).map((item) => (
                    <div
                      key={item.boardId}
                      className='content-text-wrapper1'
                      onClick={() => boarddetailhandleClick(item.boardId)}
                    >
                      <div className='text-wrapper a1'>{item.rowNumber}</div>
                      <div className='text-wrapper a3'>{item.title}</div>
                      <div className='text-wrapper a4'>{item.userName}</div>
                      <div className='text-wrappera5'>{item.regDate}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className='PageBtn'>
            <button
              className='before'
              onClick={beforePageHandler}
            >
              <img
                src={icon1}
                alt='버튼 이미지'
                className='buttonImage'
              ></img>
            </button>
            <div className='aabtn'>
              <div className='bbbtn'>{renderPageButtons()}</div>
            </div>
            {countNum ? (
              <button>끝</button>
            ) : (
              <button
                className='after'
                onClick={afterPageHandler}
              >
                <img
                  src={icon2}
                  alt='버튼 이미지'
                  className='buttonImage'
                ></img>
              </button>
            )}
          </div>
        </div>
      </div>
    </board>
    </>
  );
};

export default BoardQuestion;
