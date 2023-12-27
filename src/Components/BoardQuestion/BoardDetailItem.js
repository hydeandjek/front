import React, { useState } from 'react';
import { API_BASE_URL, QUESTIONBOARD } from '../../config/host-config';
import './BoardDetail.scss';

const BoardDetailItem = ({ item, fetchCommentData }) => {
  const userName = localStorage.getItem('LOGIN_USERNAME');
  const [commentmody, setCommentMody] = useState(false);
  const [refreshA, setRefreshA] = useState(false);
  const [changeComment, setChangeComment] = useState([]);

  const REQUEST_URL = API_BASE_URL + QUESTIONBOARD;

  // console.log('aaaa');

  const requestHeader = {
    'content-type': 'application/json',
    // JWT에 대한 인증 토큰이라는 타입을 선언
    Authorization: 'Bearer ' + localStorage.getItem('LOGIN_TOKEN'),
  };

  const commentdetailhandle = async (commentId, boardId) => {
    // 선택된 아이템에 대한 로직을 수행
    const CommentAddElement =
      document.getElementsByClassName('changeComment')[0];
    const CommentAdd = CommentAddElement ? CommentAddElement.value : '';

    try {
      const responseMody = await fetch(
        REQUEST_URL + '/' + boardId + '/reply/' + commentId,
        {
          method: 'PUT', // 또는 'PUT'에 따라 사용하고자 하는 HTTP 메서드 선택
          headers: requestHeader,
          body: JSON.stringify({ content: CommentAdd }),
        }
      );
      setRefreshA(!refreshA);

      const result = await responseMody.json();
      console.log(result);
      // setChangeComment(result);
      fetchCommentData();
      setCommentMody(!commentmody);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  // console.log(item);

  const commentDelHandler = async (commentId, boardId) => {
    console.log(REQUEST_URL + '/' + boardId + '/reply/' + commentId);
    console.log(requestHeader);
    const commentDel = await fetch(
      REQUEST_URL + '/' + boardId + '/reply/' + commentId,
      {
        method: 'DELETE', // 또는 'PUT'에 따라 사용하고자 하는 HTTP 메서드 선택
        headers: requestHeader,
      }
    );
    setRefreshA(true);
    // // fetchData()
    fetchCommentData();
  };

  return (
    <div
      key={item.boardId}
      className='content-text-wrapper1v'
    >
      {/* <div className='text-wrapper a1'>{item.boardId}</div> */}
      <div className='vvoo'>
        <div className='text-wrappera34'>{item.userName}</div>
        <div className='text-wrappera35'>({item.regDate})</div>
      </div>

      {userName === item.userName && (
        <>
          {/* <div className='ieie' /> */}
          <div className='pqq'>
            <div
              className='button text-wrappera15'
              // className='button'
              onClick={() => setCommentMody(!commentmody)}
            >
              수정
            </div>
            <div
              className='button text-wrappera16'
              // className='button'
              onClick={() => commentDelHandler(item.commentId, item.boardId)}
            >
              삭제
            </div>
          </div>
        </>
      )}

      <div className='content-text-wrapper2'>
        {commentmody ? (
          // 이 부분에 mody가 true일 때 보여줄 UI를 넣어주세요

          <div className='iww'>
            <input
              placeholder={item.content}
              type='text'
              className='changeComment'
            />
            <button
              className='ffi'
              onClick={(e) => commentdetailhandle(item.commentId, item.boardId)}
            >
              등록
            </button>
          </div>
        ) : (
          <div className='contentlocation'>
            {/* <div className='text-wrapper a31'>{item.commentId}</div> */}
            <div className='text-wrappera33'>{item.content}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BoardDetailItem;
