import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { API_BASE_URL, CATEGORYBOARD } from '../../config/host-config';
import { Refresh } from '@mui/icons-material';
import CategoryBoardDetailItem from './CategoryBoardDetailItem';
import { board } from '../../assets/constants';

const CateBoardDetail = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [regDate, setRegDate] = useState([]);
  const QUESTION_URL = API_BASE_URL + CATEGORYBOARD;
  const [refresh, setRefresh] = useState(false);
  const [comment, setComment] = useState([]);
  const [commentmody, setCommentMody] = useState(false);

  const userName = localStorage.getItem('LOGIN_USERNAME');

  const requestHeader = {
    'content-type': 'application/json',
    // JWT에 대한 인증 토큰이라는 타입을 선언
    Authorization: 'Bearer ' + localStorage.getItem('LOGIN_TOKEN'),
  };

  const { boardId, category } = location.state || {};
  console.log(boardId, category);

  const Boarddetailhandler = async () => {
    try {
      const res = await fetch(QUESTION_URL + '/' + category + '/' + boardId, {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
      });

      const result = await res.json();
      console.log(result);

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

  useEffect(() => {
    Boarddetailhandler();
    fetchCategoryCommentData();
  }, [refresh]);

  const fetchCategoryCommentData = async () => {
    try {
      const responseComment = await fetch(
        QUESTION_URL + '/' + category + '/' + boardId + '/reply',
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

  const commentaddhandle = async (value) => {
    console.log(value);
    document.getElementsByClassName('comment')[0].value = '';
    console.log(QUESTION_URL + '/' + boardId + '/reply');
    const commentAdd = await fetch(QUESTION_URL + '/' + boardId + '/reply', {
      method: 'POST', // 또는 'PUT'에 따라 사용하고자 하는 HTTP 메서드 선택
      headers: requestHeader,
      body: JSON.stringify(value),
    });

    setRefresh(!refresh);
  };

  return (
    <>
      <div className='rec1' />
      <div className='overlap'>
        {userName === data.userName ? (
          <div>
            <div className='content-text-wrapperaaa'>
              <div className='aaa'>
                <div className='text-wrappera4'>{data.userName}</div>
                <div className='text-wrappera5'>{regDate}</div>
              </div>
              <div className='iii'>
                <button
                  className='text-wrappera20'
                  // onClick={() => setCommentMody(!commentmody)}
                >
                  <span>수정</span>
                </button>
                <button
                  className='text-wrappera30'
                  // onClick={(e) => boardDelHandler(data.boardId)}
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
                        //   onClick={() => QnaChangeBoardHandler(data.boardId)}
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
              <div className='text-wrappera5'>{regDate}</div>
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
            onBlur={(e) => commentaddhandle(e.target.value)}
          />
        </div>

        {comment.map((item) => (
          <CategoryBoardDetailItem
            item={item}
            fetchCategoryCommentData={fetchCategoryCommentData}
            category={category}
          />
        ))}
      </div>
    </>
  );
};
export default CateBoardDetail;
