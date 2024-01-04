import React, { useEffect, useState } from 'react';
import { NavLink, redirect, useParams, useNavigate } from 'react-router-dom';
import { decision } from '../../../assets/constants';
import axios from 'axios';
import './scss/ApproDetail.scss';
import { API_BASE_URL } from '../../../config/host-config';
import { useHorizontalScroll } from '../UseSideScroll';
import '../List/DetailList.scss';
import DetailList from '../List/DetailList';
import SideBarItem2 from '../../SideBar/SideBar2/SideBarItem2';

const RejectDetail = () => {
  const { shareId } = useParams();
  const [showCommentList, setShowCommentList] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [rotation, setRotation] = useState(0);
  const [comment, setComment] = useState('');
  const [liCount, setLiCount] = useState(0);

  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const redirection = useNavigate();

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

  const [approval, setApprovals] = useState([]);
  const scrollRef = useHorizontalScroll();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/board/donation/approval/reject/${shareId}`
      );
      const data = response.data;
      setApprovals(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (approval && Array.isArray(approval.comments)) {
      setLiCount(approval.comments.length);
    }
  }, [approval]);

  const handlePrev = () => {
    redirection(-1);
  };

  const handleDelete = async () => {
    const confirmed = window.confirm('게시글을 삭제하시겠습니까?');
    if (confirmed) {
      try {
        const response = await axios.delete(
          `${API_BASE_URL}/board/donation/${shareId}`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('LOGIN_TOKEN'),
              'Content-Type': 'application/json',
            },
          }
        );
        redirection('/board/donation');
      } catch (error) {
        alert('삭제 권한이 없습니다.');
      }
    }
  };

  const [hoveredStates, setHoveredStates] = useState(
    Array(approval.length).fill(false)
  );

  const handleMouseEnter4 = (index) => {
    const updatedHoveredStates = [...hoveredStates];
    updatedHoveredStates[index] = true;
    setHoveredStates(updatedHoveredStates);
  };

  const handleMouseLeave4 = () => {
    setHoveredStates(Array(approval.length).fill(false));
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
    if (!comment.trim()) {
      alert('댓글을 입력해주세요.');
      return;
    }
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
      setComment('');
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleCommentDelete = async (indexToDelete) => {
    const confirmed = window.confirm('댓글을 삭제하시겠습니까?');
    if (confirmed) {
      try {
        const replyId = approval.comments[indexToDelete].commentId;
        const response = await axios.delete(
          `${API_BASE_URL}/board/donation/${shareId}/reply/${replyId}`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('LOGIN_TOKEN'),
              'Content-Type': 'application/json',
            },
          }
        );
        fetchData();
      } catch (error) {
        alert('삭제 권한이 없습니다.');
      }
    }
  };

  const [imageStyles, setImageStyles] = useState({});

  const applyImageStyle = (image) => {
    const img = new Image();
    img.src = image.filePath;

    return new Promise((resolve, reject) => {
      img.addEventListener('load', () => {
        const imageStyles = {};

        const { naturalWidth, naturalHeight } = img;

        if (naturalWidth / naturalHeight > 1) {
          imageStyles.className = 'img1';
        } else if (naturalWidth / naturalHeight < 1) {
          imageStyles.className = 'img2';
        } else {
          imageStyles.className = 'img3';
        }

        resolve(imageStyles);
      });

      img.addEventListener('error', reject);
    });
  };

  useEffect(() => {
    if (approval?.uploadImages) {
      const promises = approval.uploadImages.map((image) =>
        applyImageStyle(image)
      );

      Promise.all(promises)
        .then((styles) => {
          setImageStyles(styles);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [approval?.uploadImages]);

  return (
    <>
      <div id='donationBoard'>
        <div className='rec_center2'>
          Decision
          <div className='side2'>
            <div className='sidebar2'>
              {decision.map((menu, index) => (
                <NavLink
                  style={{ textDecoration: 'none' }}
                  to={menu.path}
                  key={index}
                >
                  <SideBarItem2 menu={menu} />
                </NavLink>
              ))}
            </div>
          </div>
        </div>

        <div className='warp-content'>
          <div className='detailBoard'>
            <div className='warp-content'>
              <div className='detailBox'>
                <div className='userIdBox'>
                  <p>{approval?.userName}</p>
                  <p>{approval.regDate}</p>
                </div>

                <div
                  className='imageBox'
                  ref={scrollRef}
                >
                  {approval?.uploadImages &&
                    approval.uploadImages.map((image, index) => (
                      <div
                        className='imageList'
                        key={index}
                      >
                        <img
                          src={image.filePath}
                          className={imageStyles[index]?.className}
                        />
                      </div>
                    ))}
                </div>

                <div className='titleBox'>
                  {approval?.title}

                  <div
                    className='commentBtn'
                    onClick={handleCommentBtnClick}
                    style={{ backgroundColor: backgroundColor }}
                  >
                    <div className='commentCount'>댓글 {liCount}</div>
                    <div
                      className='rotateBtn'
                      style={{ transform: `rotate(${rotation}deg)` }}
                    >
                      +
                    </div>
                  </div>
                </div>

                <div className='detailContentBox'>{approval?.content}</div>

                {showCommentList && (
                  <>
                    <p className='boundaryLine'></p>
                    <div className='commentList'>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {approval?.comments &&
                          approval.comments.map((content, index) => (
                            <li
                              className='comments'
                              key={index}
                              style={{ marginBottom: '10px' }}
                            >
                              <div className='comment-top'>
                                <div className='comment-title'>
                                  <div className='comment-id'>
                                    {content.userName}
                                  </div>
                                  <div className='comment-date'>
                                    {content.regDate}
                                  </div>
                                </div>
                                <div
                                  className='comment-delete'
                                  key={index}
                                  onClick={() => handleCommentDelete(index)}
                                  onMouseEnter={() => handleMouseEnter4(index)}
                                  onMouseLeave={() => handleMouseLeave4(index)}
                                >
                                  <img
                                    src={
                                      hoveredStates[index]
                                        ? 'https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/659278261e7516556beef78b/img/vector.svg'
                                        : 'https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/659278ab34bd3cdd86f37c00/img/vector.svg'
                                    }
                                  />
                                </div>
                              </div>
                              <div className='comment-content'>
                                {content.content}
                              </div>
                            </li>
                          ))}
                      </ul>
                      <div
                        className={`commentInput  ${
                          liCount > 0 ? 'with-margin' : ''
                        }`}
                      >
                        <textarea
                          className='comment-input'
                          placeholder='댓글을 입력하세요... Enter를 누르시면 댓글이 등록됩니다.'
                          value={comment}
                          onChange={handleInputChange}
                          onKeyDown={handleKeyDown}
                        ></textarea>
                        <button
                          className='comment-submit'
                          onClick={saveComment}
                        >
                          등록
                        </button>
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
                <img src='https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/6590315334bd3cdd86f37b35/img/group@2x.png' />
              ) : (
                <img src='https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/659034e8ebd5f41b5ff0ab42/img/group@2x.png' />
              )}
              <span style={{ color: isHovered2 ? 'black' : 'silver' }}>
                이전
              </span>
            </div>

            <div
              className='deleteBtn'
              onClick={handleDelete}
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
              style={{ borderColor: isHovered3 ? 'black' : 'silver' }}
            >
              {isHovered3 ? (
                <img src='https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/6590315334bd3cdd86f37b35/img/group@2x.png' />
              ) : (
                <img src='https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/659034e8ebd5f41b5ff0ab42/img/group@2x.png' />
              )}
              <span style={{ color: isHovered3 ? 'black' : 'silver' }}>
                삭제
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RejectDetail;
