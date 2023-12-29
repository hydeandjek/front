import React, { useEffect, useState } from 'react';
import { NavLink, redirect, useLocation, useNavigate } from 'react-router-dom';
import { API_BASE_URL, QUESTIONBOARD } from '../../config/host-config';
import BoardDetailItem from './BoardDetailItem';
import './BoardDetail.scss';
import { board } from '../../assets/constants/index.js';
import SideBarItem2 from '../SideBar/SideBar2/SideBarItem2';

const BoardDetaile = () => {
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
  const [commentmody, setCommentMody] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [regDate, setRegDate] = useState(false);

  const REQUEST_URL = API_BASE_URL + QUESTIONBOARD;

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
          regDate: new Date(item.regDate).toISOString().split('T')[0],
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
      setCommentMody(true);
    }
  };

  useEffect(() => {
    fetchData();
    fetchCommentData();
    setRefresh(false);
  }, [refresh]);

  const boardDelHandler = async (boardId) => {
    const boardDel = await fetch(REQUEST_URL + '/' + boardId, {
      method: 'DELETE',
      headers: requestHeader,
    });
    setRefresh(!refresh);
    redirection('/board/question');
  };

  const commentaddhandle = async (value, boardId) => {
    document.getElementsByClassName('comment')[0].value = '';
    const commentAdd = await fetch(REQUEST_URL + '/' + boardId + '/reply', {
      method: 'POST', // 또는 'PUT'에 따라 사용하고자 하는 HTTP 메서드 선택
      headers: requestHeader,
      body: JSON.stringify(value),
    });

    setRefresh(!refresh);
  };

  const QnaChangeBoardHandler = async (boardId) => {
    const titleAddElement =
      document.getElementsByClassName('text-wrappera202')[0];
    const contentAddElement =
      document.getElementsByClassName('text-wrappera302')[0];
    const titleAdd = titleAddElement ? titleAddElement.value : '';
    const contentAdd = contentAddElement ? contentAddElement.value : '';
    if (!titleAdd || !contentAdd) {
      alert('제목과 내용을 모두 입력해주세요.');
      return; // 요청을 보내지 않고 함수를 종료
    } else {
      const BoardChange = await fetch(REQUEST_URL + '/' + boardId, {
        method: 'PUT', // 또는 'PUT'에 따라 사용하고자 하는 HTTP 메서드 선택
        headers: requestHeader,
        body: JSON.stringify({
          title: titleAdd, // 이 부분에서 직접 사용
          content: contentAdd, // 이 부분에서 직접 사용
        }),
      });
    }
    setCommentMody(!commentmody);
    setRefresh(!refresh);
  };

  return (
    <>
      <board id='board'>
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
        <div className='rec1' />
        <div className='overlap'>
          {userName === data.userName ? (
            <div>
              <div className='content-text-wrapperaaa'>
                <div className='aaa'>
                  <div className='text-wrappera4'>{data.userName}</div>
                  <div className='text-wrappera5'>
                    {new Date(data.regDate).toISOString().split('T')[0]}
                  </div>
                </div>
                <div className='iii'>
                  <button
                    className='text-wrappera20'
                    onClick={() => setCommentMody(!commentmody)}
                  >
                    <span>수정</span>
                  </button>
                  <button
                    className='text-wrappera30'
                    onClick={(e) => boardDelHandler(data.boardId)}
                  >
                    <span>삭제</span>
                  </button>
                </div>
                {commentmody ? (
                  <>
                    <div className='OOO'>
                      <div className='lll'>
                        <input
                          type='text'
                          placeholder={data.title}
                          className='text-wrappera202'
                        />

                        <input
                          type='text'
                          placeholder={data.content}
                          className='text-wrappera302'
                        />
                      </div>
                      <div>
                        <button
                          className='text-wrappera22'
                          onClick={() => QnaChangeBoardHandler(data.boardId)}
                        >
                          등록
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className='text-wrappera2'>{data.title}</div>
                    <div className='text-wrappera3'>{data.content}</div>
                  </>
                )}
              </div>
            </div>
          ) : (
            <div className='content-text-wrapperaa'>
              <div className='aa'>
                <div className='text-wrappera4'>{data.userName}</div>
                <div className='text-wrappera5'>{data.regDate}</div>
              </div>
              <div className='text-wrappera2'>{data.title}</div>
              <div className='text-wrappera3'>{data.content}</div>
            </div>
          )}

          {/* <div className='aaaaaaa'></div> */}

          <div className='content-text-wrapper00'>
            {' '}
            <input
              type='text'
              placeholder='댓글을 입력하고 다른 곳을 클릭해주세요~'
              className='comment'
              onBlur={(e) => commentaddhandle(e.target.value, data.boardId)}
            />
          </div>

          {comment.map((item) => (
            <BoardDetailItem
              item={item}
              fetchCommentData={fetchCommentData}
            />
          ))}
        </div>
      </board>
    </>
  );
};

export default BoardDetaile;
