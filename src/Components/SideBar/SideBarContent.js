import React, { useContext, useEffect, useState } from 'react';
import './SideBarContent.scss';
import PageChange from '../Food/Recipe/PageChange';
import RecipeDetail from '../Food/Recipe/RecipeDetail';
import { redirect, useNavigate } from 'react-router-dom';
import heartImage from '../../assets/img/notLike.png';
import heartImage_liked from '../../assets/img/like.png';
import { API_BASE_URL } from '../../config/host-config';
import { getLoginUserInfo } from '../../utils/login-utill';
import AuthContext from '../../utils/AuthContext';
import { faL } from '@fortawesome/free-solid-svg-icons';

const SideBarContent = ({
  name,
  src,
  onClick,
  style,
  onMouseEnter,
  onMouseLeave,
}) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {}, []);

  const redirection = useNavigate();
  const { onLogout } = useContext(AuthContext);
  // 로그인 인증 토큰 얻어오기
  const [token, setToken] = useState(getLoginUserInfo().token);
  // 좋아요 요청 상태 관리
  const [isWishAdd, setIsWishAdd] = useState(false);

  //  응답 상태 관리
  // const [likeOrNotData, setLikeOrNotData] = useState(false);

  // fetch 요청 보낼 때 사용할 요청 헤더 설정
  const requestHeader = {
    'content-type': 'application/json',
    // JWT에 대한 인증 토큰이라는 타입을 선언
    Authorization: 'Bearer ' + localStorage.getItem('LOGIN_TOKEN'),
  };

  const onLikeAddHandler = () => {
    // userid, recipe id 필요
    setIsWishAdd(!isWishAdd);

    // setWishCount(wishCount +1)
    fetch(API_BASE_URL + '/api/menu/recipe/like', {
      method: 'POST',
      headers: requestHeader,
      body: JSON.stringify({
        // userId: token,
        recipeName: name,
        done: !isWishAdd,
      }),
    })
      .then((res) => {
        // console.log(res.json);
        if (res.status === 200) {
          // alert('찜 완료!');
          return res.json();
        } else if (res.status === 403) {
          alert('로그인이 필요한 서비스입니다.');
          return;
        }
      })
      .then((json) => {
        console.log(json);
        if (!json) {
          return;
        } else if (json.done === true) {
          setLiked(true);
          alert('찜했어요!');
          document.querySelector('.heart-icon').style.backgroundImage = {
            heartImage_liked,
          };
        } else {
          setLiked(false);
          alert('찜이 취소되었습니다.');
          document.querySelector('.heart-icon').style.backgroundImage = {
            heartImage,
          };
        }
      });
    // .catch((err) => {
    //   console.log('err: ', err);
    //   alert('알 수 없는 에러가 발생했습니다. 관리자에게 문의하세요.');
    // })
  };

  // const divStyle = {
  //   backgroundImage:
  //     json.done === 'true'
  //       ? 'url("new_image.jpg")'
  //       : 'url("default_image.jpg")',
  // };

  console.log(onClick);

  return (
    <div
      className='sidebar-content'
      onClick={onClick}
    >
      <div className='content-item'>
        <img
          src={src}
          style={style}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
        <p onClick={onclick}>{name}</p>
        <div
          className='heart-icon'
          // style={{
          //   backgroundImage: `url(${
          //     liked
          //       ? '../../assets/img/like.png'
          //       : '../../assets/img/notLike.png'
          //   })`,
          // }}
          onClick={() => onLikeAddHandler(name, isWishAdd)}
        ></div>
      </div>
    </div>
  );
};

export default SideBarContent;
