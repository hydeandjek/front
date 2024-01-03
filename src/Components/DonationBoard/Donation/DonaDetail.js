import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './scss/DonaDetail.scss';
import { API_BASE_URL } from '../../../config/host-config';
import { useHorizontalScroll } from '../UseSideScroll';
import '../List/DetailList.scss';
import DetailList from '../List/DetailList';
import qs from 'qs';

const DonaDetail = () => {
  const redirection = useNavigate();

  const onClickRegist = () => {
    redirection('/board/donation/regist');
  };

  const { shareId } = useParams();
  const [showCommentList, setShowCommentList] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [rotation, setRotation] = useState(0);
  const [comment, setComment] = useState('');
  const [liCount, setLiCount] = useState(0);
  
  const board = [
    { name: '카테고리 게시판', path: '/' },
    { name: '질문 게시판', path: '/board/question' },
    { name: '나눔 게시판', path: '/board/donation' },
  ];

  const [isHover, setIsHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  

  const handleMouseEnter = () => {
    setIsHover(true);
    setIsOpen(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
    setIsOpen(false);
  };

  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };
  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  const handleMouseEnter3 = () => {
    setIsHovered3(true);
  };
  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };
  
  const [donation, setDonations] = useState([]);
  const scrollRef = useHorizontalScroll();
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/board/donation/${shareId}`);
      const data = response.data;
      console.log(response.data);
      setDonations(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (donation && Array.isArray(donation.comments)) {
      setLiCount(donation.comments.length);
    }
  }, [donation]);

  const handlePrev = () => {
    redirection(-1);
  };

  const handleDelete = async () => {
    const confirmed = window.confirm('게시글을 삭제하시겠습니까?');
    if (confirmed) {
      try {
        const response = await axios.delete(`${API_BASE_URL}/board/donation/${shareId}`, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('LOGIN_TOKEN'),
            'Content-Type': 'application/json',
          },
        });
        redirection('/board/donation');
      } catch (error) {
        alert('삭제 권한이 없습니다.')
      }
    }
  };

  const [hoveredStates, setHoveredStates] = useState(Array(donation.length).fill(false));

  const handleMouseEnter4 = (index) => {
    const updatedHoveredStates = [...hoveredStates];
    updatedHoveredStates[index] = true;
    setHoveredStates(updatedHoveredStates);
  };
  
  const handleMouseLeave4 = () => {
    setHoveredStates(Array(donation.length).fill(false));
  };

  const handleCommentBtnClick = () => {
    if (rotation === 0) {
      setRotation(-45);
    } else {
      setRotation(0);
    }
    setShowCommentList(!showCommentList);
  };

  const handleInputChange = (event) => {
    setComment(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      saveComment();
    }
  };

  const saveComment = async () => {
    try {
      const encodedComment = JSON.stringify({
        content: comment,
      });
      const response = await axios.post(
        `${API_BASE_URL}/board/donation/${shareId}/reply`,
        encodedComment,
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('LOGIN_TOKEN'),
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response.data);
      // 댓글 저장 후 입력창을 초기화합니다.
      setComment('');
      fetchData();
    } catch (error) {
      alert('로그인 후 이용 가능합니다.');
      setComment('');
    }
  };

  const handleCommentDelete = async (indexToDelete) => {
    const confirmed = window.confirm('댓글을 삭제하시겠습니까?');
    if (confirmed) {

      try {
        const replyId = donation.comments[indexToDelete].commentId;
        const response = await axios.delete(`${API_BASE_URL}/board/donation/${shareId}/reply/${replyId}`, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('LOGIN_TOKEN'),
            'Content-Type': 'application/json',
          },
        });
        fetchData();
      } catch (error) {
        alert('삭제 권한이 없습니다.');
      }
    }
  };

  function formatDateTime(dateTime) {
    const formattedDateTime = dateTime.replace(/-/g, '/');
    return formattedDateTime;
  }

  return (
    <>
      <div id='donationBoard'>
        <div className='rec_center2'>
          Community
          <div className='side2'>
            <div className='sidebar2'>
              {board.map((menu, index) => (
                <div className='sidebar-item2' key={index}>
                  {menu.name === '나눔 게시판' ? (
                    <div
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <NavLink
                        to={menu.path}
                        activeClassName='active-link'
                        exact
                      >
                        <p>{menu.name}</p>
                      </NavLink>
                      {isHover && (
                        <p
                          onClick={onClickRegist}
                          style={{
                            fontSize: '14px',
                            width: '150px',
                            padding: '3px 10px',
                            margin: '5px 0px',
                            position: 'relative',
                            textAlign: 'center',
                            textDecoration: 'none',
                            marginLeft: '25px',
                            color: '#000',
                            display: 'block',
                            borderRadius: '10px',
                            cursor: 'pointer'
                          }}
                        >
                          등록
                        </p>
                      )}
                    </div>
                  ) : (
                    <NavLink to={menu.path} activeClassName='active-link' exact>
                      <p>{menu.name}</p>
                    </NavLink>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='warp-content'>
          <div className='detailBoard'>
            <div className="warp-content">
              <div className="detailBox">
                <div className="userIdBox">
                  <p>{donation?.userName}</p>
                  <p>{donation?.approvalDate}</p>
                </div>

                <div className="imageBox" ref={scrollRef}>
                  <img src={donation?.imageUrl} />
                </div>

                <div className="titleBox">
                  {donation?.title}

                  <div
                    className='commentBtn'
                    onClick={handleCommentBtnClick}
                    style={{ backgroundColor: backgroundColor }}
                  >
                    <div className='commentCount'>댓글 {liCount}</div>
                    <div
                      className="rotateBtn"
                      style={{ transform: `rotate(${rotation}deg)` }}
                    >
                      +
                    </div>
                  </div>
                </div>

                <div className="detailContentBox">
                  {donation?.content}
                </div>

                {showCommentList && (
                  <>
                    <p className='boundaryLine'></p>
                    <div className="commentList">
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                      {donation.comments.map((content, index) => (
                        <li className='comments' key={index} style={{ marginBottom: '10px' }}>
                          <div className='comment-top'>
                            <div className='comment-title'>
                              <div className='comment-id'>{content.userName}</div>
                              <div className='comment-date'>{content.regDate}</div>
                            </div>
                            <div
                              className='comment-delete'
                              key={index}
                              onClick={() => handleCommentDelete(index)}
                              onMouseEnter={() => handleMouseEnter4(index)}
                              onMouseLeave={() => handleMouseLeave4(index)}
                            >
                              <img
                                src={hoveredStates[index] ? 'https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/659278261e7516556beef78b/img/vector.svg' :
                                  'https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/659278ab34bd3cdd86f37c00/img/vector.svg'}
                              />
                            </div>
                          </div>
                          <div className='comment-content'>{content.content}</div>
                        </li>
                      ))}
                      </ul>
                      <div className={`commentInput  ${liCount > 0 ? 'with-margin' : ''}`}>
                        <textarea
                          className="comment-input"
                          placeholder="댓글을 입력하세요... Enter를 누르시면 댓글이 등록됩니다."
                          value={comment}
                          onChange={handleInputChange}
                          onKeyDown={handleKeyDown}
                        ></textarea>
                        <button className="comment-submit" onClick={saveComment}>등록</button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className='Btn'>
            <div
              className='prevBtn'
              onClick={handlePrev}
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
              style={{ borderColor: isHovered2 ? 'black' : 'silver' }}
            >
              {isHovered2 ? (
                <img src="https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/6590315334bd3cdd86f37b35/img/group@2x.png" />
              ) : (
                <img src="https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/659034e8ebd5f41b5ff0ab42/img/group@2x.png" />
              )}
              <span style={{ color: isHovered2 ? 'black' : 'silver' }}>이전</span>
            </div>

            <div
              className='deleteBtn'
              onClick={handleDelete}
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
              style={{ borderColor: isHovered3 ? 'black' : 'silver' }}
            >
              {isHovered3 ? (
                <img src="https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/6590315334bd3cdd86f37b35/img/group@2x.png" />
              ) : (
                <img src="https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/659034e8ebd5f41b5ff0ab42/img/group@2x.png" />
              )}
              <span style={{ color: isHovered3 ? 'black' : 'silver' }}>삭제</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonaDetail;