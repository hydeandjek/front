import React, { useState } from 'react';
import { API_BASE_URL, CATEGORYBOARD } from '../../config/host-config';

const CategoryBoardDetailItem = ({
  item,
  fetchCategoryCommentData,
  category,
}) => {
  const QUESTION_URL = API_BASE_URL + CATEGORYBOARD;
  const userName = localStorage.getItem('LOGIN_USERNAME');
  const [commentmody, setCommentMody] = useState(false);
  const [refreshA, setRefreshA] = useState(false);
  const requestHeader = {
    'content-type': 'application/json',
    // JWT에 대한 인증 토큰이라는 타입을 선언
    Authorization: 'Bearer ' + localStorage.getItem('LOGIN_TOKEN'),
  };

  //  댓글 바꾸기
  const commentdetailhandle = async (commentId, boardId) => {
    // 선택된 아이템에 대한 로직을 수행
    const CommentAddElement =
      document.getElementsByClassName('changeComment')[0];
    const CommentAdd = CommentAddElement ? CommentAddElement.value : '';

    if (!CommentAdd) {
      alert('수정 내용을 입력하세요');
      return;
    }
    try {
      const responseMody = await fetch(
        QUESTION_URL + '/' + category + '/' + boardId + '/reply/' + commentId,
        {
          method: 'PUT', // 또는 'PUT'에 따라 사용하고자 하는 HTTP 메서드 선택
          headers: requestHeader,
          body: JSON.stringify({ content: CommentAdd }),
        }
      );
      setRefreshA(!refreshA);

      const result = await responseMody.json();
      // setChangeComment(result);
      fetchCategoryCommentData();
      setCommentMody(!commentmody);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  //  댓글 삭제
  const CatecommentDelHandler = async (commentId, boardId) => {
    const commentDel = await fetch(
      QUESTION_URL + '/' + category + '/' + boardId + '/reply/' + commentId,
      {
        method: 'DELETE', // 또는 'PUT'에 따라 사용하고자 하는 HTTP 메서드 선택
        headers: requestHeader,
      }
    );
    setRefreshA(true);
    fetchCategoryCommentData();
  };

  // const myElements = document.getElementsByClassName('text-wrappera33');
  // // console.log(item);
  // const myElementBox = document.getElementsByClassName('content-textwrapper1v');

  // for (let i = 0; i < item.length; i++) {
  //   const comment = item[i];
  //   const myElement = String(comment.content);

  //   // 각 데이터에 대해 길이를 확인하고 처리
  //   if (myElement.length > 1) {
  //     console.log('fffff');

  //     // 해당 데이터에 대해 클래스 변경
  //     myElementBox[i].classList.replace(
  //       'content-textwrapper1v',
  //       'content-textwrapper1vp'
  //     );
  //     myElements[i].classList.replace('text-wrappera33', 'text-wrapperaq33');
  //   }
  // }

  return (
    <div
      key={item.boardId}
      className='content-textwrapper1v'
    >
      {/* <div className='text-wrapper a1'>{item.boardId}</div> */}
      <div className='vvoo'>
        <div className='text-wrappera34'>
          {item.userName.substring(0, 2)}***
        </div>
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
              onClick={() =>
                CatecommentDelHandler(item.commentId, item.boardId)
              }
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

export default CategoryBoardDetailItem;
