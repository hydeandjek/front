import React, { useEffect, useState } from 'react';
import { NavLink, redirect, useLocation, useNavigate } from 'react-router-dom';
import { API_BASE_URL, QUESTIONBOARD } from '../../config/host-config.js';
import BoardDetailItem from './BoardDetailItem.js';
import './BoardDetail.scss';
import { board } from '../../assets/constants/index.js';
import SideBarItem2 from '../SideBar/SideBar2/SideBarItem2.js';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap';
import { BsPencil } from 'react-icons/bs';

const BoardDetail = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [comment, setComment] = useState([]);
  const requestHeader = {
    'content-type': 'application/json',
    // JWT에 대한 인증 토큰이라는 타입을 선언
    Authorization: 'Bearer ' + localStorage.getItem('LOGIN_TOKEN'),
  };
  const userName = localStorage.getItem('LOGIN_USERNAME');
  const redirection = useNavigate();
  const [modifyMode, setModifyMode] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [regDate, setRegDate] = useState(false);
  const [showContentDropDown, setShowContentDropDown] = useState(false);

  const REQUEST_URL = API_BASE_URL + QUESTIONBOARD;

  const dateFormator = (date) => {
    return date.toLocaleString('ko-kr', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      dayPeriod: 'narrow',
      hour: '2-digit',
      minute: '2-digit',
    });
  };
  // 다른 페이지로부터 전달된 정보에 접근

  const yourData = location.state?.board;

  const fetchData = async () => {
    try {
      const res = await fetch(REQUEST_URL + '/' + yourData, {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
      });

      const result = await res.json();

      if (result) {
        // 데이터를 상태에 업데이트

        setData(result);
        // 새로운 아이템 추가하고 상태 업데이트
        setRegDate(new Date(result.regDate).toISOString().split('T')[0]);
      } else {
        console.log('No data received from the server.');
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const fetchCommentData = async () => {
    try {
      const responseComment = await fetch(
        REQUEST_URL + '/' + yourData + '/reply',
        {
          method: 'GET',
          headers: { 'content-type': 'application/json' },
        }
      );

      const resultComment = await responseComment.json();

      if (resultComment.length > 0) {
        const CommentData = resultComment.map((item) => ({
          boardId: item.boardId,
          commentId: item.commentId,
          content: item.content,
          regDate: dateFormator(new Date(item.regDate)),
          userId: item.userId.slice(0, 4),
          userName: item.userName,
          updateDate: item.updateDate,
        }));

        // 데이터를 상태에 업데이트

        setComment(CommentData);
      } else {
        setComment([]);
        console.log('No data received from the server.');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setModifyMode(true);
    }
  };

  useEffect(() => {
    fetchData();
    fetchCommentData();
    setRefresh(false);
  }, [refresh]);

  const boardDelHandler = async (boardId) => {
    const res = await fetch(REQUEST_URL + '/' + boardId, {
      method: 'DELETE',
      headers: requestHeader,
    });

    if (res.status === 200) {
      alert('삭제 성공');
    } else {
      alert('삭제에 실패했습니다.');
    }

    setRefresh(!refresh);
    redirection('/board/question');
  };

  const commentaddhandle = async (value, boardId) => {
    if (!localStorage.getItem('LOGIN_TOKEN')) {
      alert('로그인 후 이용해주세요');
      return;
    }

    document.getElementsByClassName('comment')[0].value = '';
    const res = await fetch(REQUEST_URL + '/' + boardId + '/reply', {
      method: 'POST', // 또는 'PUT'에 따라 사용하고자 하는 HTTP 메서드 선택
      headers: requestHeader,
      body: JSON.stringify(value),
    });

    if (res.status === 200) {
      alert('댓글 등록 성공');
    } else {
      alert('댓글 등록에 실패했습니다.');
    }

    if (res.status === 400) {
      console.log(await res.text());
    }

    setRefresh(!refresh);
  };

  const QnaChangeBoardHandler = async (boardId) => {
    const titleAddElement =
      document.getElementsByClassName('text-wrappera202')[0];
    const contentAddElement =
      document.getElementsByClassName('text-wrappera302')[0];
    const titleAdd = titleAddElement ? titleAddElement.value : '';
    const contentAdd = contentAddElement ? contentAddElement.value : '';

    if (!localStorage.getItem('LOGIN_TOKEN')) {
      alert('로그인 후 이용해주세요');
      return;
    }

    if (!titleAdd || !contentAdd) {
      alert('제목과 내용을 모두 입력해주세요.');
      return; // 요청을 보내지 않고 함수를 종료
    } else {
      const res = await fetch(REQUEST_URL + '/' + boardId, {
        method: 'PUT', // 또는 'PUT'에 따라 사용하고자 하는 HTTP 메서드 선택
        headers: requestHeader,
        body: JSON.stringify({
          title: titleAdd, // 이 부분에서 직접 사용
          content: contentAdd, // 이 부분에서 직접 사용
        }),
      });

      if (res.status === 200) {
        alert('수정 성공');
      } else {
        alert('수정에 실패했습니다.');
      }
    }

    setModifyMode(!modifyMode);
    setRefresh(!refresh);
  };

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
          <div class='ppps-qna'>
            <div className='overlap'>
              {userName === data.userName ? (
                <div>
                  <div className='content-text-wrapperaaa'>
                    <div className='detail-header'>
                      {modifyMode ? (
                        <input
                          type='text'
                          placeholder={data.title}
                          className='text-wrappera202'
                        />
                      ) : (
                        <div className='detail-title'>{data.title}</div>
                      )}
                      <Dropdown
                        className='detail-content-dropdown'
                        isOpen={showContentDropDown}
                        toggle={() => {
                          setShowContentDropDown((prev) => !prev);
                        }}
                      >
                        <DropdownToggle caret>
                          <BsPencil />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem
                            onClick={() => setModifyMode(!modifyMode)}
                          >
                            수정
                          </DropdownItem>
                          <DropdownItem
                            onClick={(e) => boardDelHandler(data.boardId)}
                          >
                            삭제
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                    <div className='aaa'>
                      <div className='text-wrappera4'>{data.userName}</div>
                      <div className='text-wrappera5'>
                        {dateFormator(new Date(data.regDate))}
                      </div>
                    </div>

                    {modifyMode ? (
                      <>
                        <div className='OOO'>
                          <div className='lll'>
                            <input
                              type='text'
                              placeholder={data.content}
                              className='text-wrappera302'
                            />
                          </div>
                          <div>
                            <Button
                              className='button-style'
                              onClick={() =>
                                QnaChangeBoardHandler(data.boardId)
                              }
                            >
                              등록
                            </Button>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className='text-wrappera3'>{data.content}</div>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                <div className='content-text-wrapperaaa'>
                  <div className='detail-header'>
                    <div className='detail-title'>{data.title}</div>
                  </div>
                  <div className='aaa'>
                    <div className='text-wrappera4'>{data.userName}</div>
                    <div className='text-wrappera5'>
                      {dateFormator(new Date(data.regDate))}
                    </div>
                  </div>
                  <div className='text-wrappera3'>{data.content}</div>
                </div>
              )}
              {/* <div className='aaaaaaa'></div> */}
              <div className='content-text-wrapper00'>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    console.log(e.target.firstChild.value);
                    commentaddhandle(e.target.firstChild.value, data.boardId);
                  }}
                >
                  <input
                    type='text'
                    placeholder='댓글을 입력하고 엔터를 입력해주세요~'
                    className='comment'
                  />
                </form>
              </div>
              {comment.map((item) => (
                <BoardDetailItem
                  item={item}
                  fetchCommentData={fetchCommentData}
                />
              ))}
            </div>
          </div>
        </div>
      </board>
    </>
  );
};

export default BoardDetail;
