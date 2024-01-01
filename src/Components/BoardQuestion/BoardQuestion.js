import React, { useEffect, useState, useHistory } from 'react';

import './BoardQuestion.scss';
import { API_BASE_URL, QUESTIONBOARD } from '../../config/host-config';
import { NavLink, useNavigate } from 'react-router-dom';
import { first } from 'lodash';

import { board } from '../../assets/constants/index.js';
import SideBarItem2 from '../SideBar/SideBar2/SideBarItem2';

import icon1 from '../../assets/img/icon1.png';
import icon2 from '../../assets/img/icon2.png';
import { Button, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const BoardQuestion = () => {
  const [data, setData] = useState([]);
  const REQUEST_URL = API_BASE_URL + QUESTIONBOARD;
  const redirection = useNavigate();
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);
  const [countNum, setCountNum] = useState(false);
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [realCurrentPage, setRealCurrentPage] = useState(1);

  const [showWrite, setShowWrite] = useState(false);

  const requestHeader = {
    'content-type': 'application/json',
    // JWT에 대한 인증 토큰이라는 타입을 선언
    Authorization: 'Bearer ' + localStorage.getItem('LOGIN_TOKEN'),
  };

  const fetchData = async (Addcate) => {
    try {
      const res = await fetch(REQUEST_URL);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await res.json();

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

        if (Addcate === 0) {
          const vvv = data[data.length - 1].rowNumber;

          const naa = Math.floor(vvv / 10) * 10;

          const pageIndex = (processedData.length + 1) / 50; // 51번째 데이터가 속한 페이지

          console.log(naa);
          setStartIndex(naa);
          setEndIndex(naa + 10);
          setCurrentPage(Math.ceil(pageIndex));
        } else {
          setStartIndex(0);
          setEndIndex(10);
          setCurrentPage(1);
          // setRefresh(!refresh);
        }
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

  // const processedData = data.map((item) => ({
  //   boardId: item.boardId,
  //   title: item.title,
  //   userId: item.userId,
  //   regDate: item.regDate,
  // }));
  // const renderedData = processedData.map((item) => (
  //   <div
  //     key={item.boardId}
  //     className='content-text-wrapper'
  //   >
  //     <div className='text-wrapper a1'>{item.boardId}</div>
  //     <div className='text-wrapper a3'>{item.title}</div>
  //     <div className='text-wrapper a4'>{item.userId}</div>
  //     <div className='text-wrapper a5'>{item.regDate}</div>
  //   </div>
  // ));

  const boarddetailhandleClick = (selectedItem) => {
    // 선택된 아이템에 대한 로직을 수행
    redirection('/board/question/detail', { state: { board: selectedItem } });
  };

  const QnaAddBoardHandler = async () => {
    const Addcate = 0;
    const titleAddElement = document.getElementsByClassName('title')[0];
    const contentAddElement = document.getElementsByClassName('content')[0];
    const titleAdd = titleAddElement ? titleAddElement.value : '';
    const contentAdd = contentAddElement ? contentAddElement.value : '';
    // document.getElementsByClassName('title')[0].value = '';
    // document.getElementsByClassName('content')[0].value = '';

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

    fetchData(Addcate);
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
    //setCurrentPage(pageNumber);
    setStartIndex((buttonText - 1) * 10);
    setEndIndex(buttonText * 10);
    setRealCurrentPage(Number(buttonText));
  };

  const RenderPageButtons = () => {
    const startNumber = (currentPage - 1) * itemsPerPage + 1;
    const endNumber = startNumber + itemsPerPage - 1;
    let pageNumber;

    return Array.from({ length: itemsPerPage }).map((_, index) => {
      if (data.length <= (startNumber + index - 1) * 10) {
        return <></>;
      } else {
        pageNumber = startNumber + index;
      }

      console.log(realCurrentPage, pageNumber);
      console.log(realCurrentPage === pageNumber);
      return (
        <>
          {realCurrentPage === pageNumber ? (
            <PaginationItem active>
              <PaginationLink
                key={pageNumber}
                onClick={pageNumHandler}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          ) : (
            <PaginationItem>
              <PaginationLink
                key={pageNumber}
                onClick={pageNumHandler}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          )}
        </>
      );
    });
  };

  console.log(realCurrentPage);

  return (
    <>
      <board id='qna-board'>
        <div className='App_wrap-content__1j7ZVa'>
          <div className='rec_center2'>
            Community
            <div className='side2'>
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
          </div>
          <div className='ppps'>
            <div id='community'>
              <div className='overlap-wrapper'>
                <div className='overlap'>
                  <div className='content-text-wrapper'>
                    <div className='text-wrapper a1'>No</div>
                    {/* <div className='text-wrapper a2'>게시판</div> */}
                    <div className='text-wrapper a3'>제목</div>
                    <div className='text-wrapper a4'>글쓴이</div>
                    <div className='text-wrapper a5'>작성일자</div>
                  </div>
                  {showWrite ? (
                    <>
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
                          <Button
                            className='btnBoard'
                            onClick={QnaAddBoardHandler}
                          >
                            등록
                          </Button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div>
                      <Button
                        block
                        className='show-write'
                        onClick={() => setShowWrite(true)}
                      >
                        질문 등록
                      </Button>
                    </div>
                  )}

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
                        <div className='text-wrapper a5'>{item.regDate}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <Pagination>
              <PaginationItem>
                <PaginationLink
                  previous
                  onClick={beforePageHandler}
                />
              </PaginationItem>
              <RenderPageButtons />
              {countNum ? (
                ''
              ) : (
                <PaginationItem>
                  <PaginationLink
                    next
                    onClick={afterPageHandler}
                  />
                </PaginationItem>
              )}
            </Pagination>
          </div>
        </div>
      </board>
    </>
  );
};

export default BoardQuestion;
