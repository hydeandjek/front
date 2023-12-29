import React, { useContext, useState } from 'react';
import './SideBarContent.scss';
import PageChange from '../Food/Recipe/PageChange';
import RecipeDetail from '../Food/Recipe/RecipeDetail';
import { redirect, useNavigate } from 'react-router-dom';
import heartImage from '../../assets/img/notLike.png';
import heartImage_liked from '../../assets/img/like.png';
import { API_BASE_URL } from '../../config/host-config';
import { getLoginUserInfo } from '../../utils/login-utill';
import AuthContext from '../../utils/AuthContext';

const SideBarContent = ({
  name,
  src,
  onClick,
  style,
  onMouseEnter,
  onMouseLeave,
}) => {
  const redirection = useNavigate();
  const { onLogout } = useContext(AuthContext);
  // 로그인 인증 토큰 얻어오기
  const [token, setToken] = useState(getLoginUserInfo().token);
  // 좋아요 상태 관리
  const [isWishAdd, setIsWishAdd] = useState(false);

  // fetch 요청 보낼 때 사용할 요청 헤더 설정
  const requestHeader = {
    'content-type': 'application/json',
    // JWT에 대한 인증 토큰이라는 타입을 선언
    Authorization: 'Bearer ' + token,
  };

  const onLikeAddHandler = (recipeName, done) => {
    // userid, recipe id 필요
    setIsWishAdd(!isWishAdd);

    // setWishCount(wishCount +1)
    fetch(API_BASE_URL + '/api/menu/recipe/like', {
      method: 'POST',
      body: JSON.stringify({
        userId: token,
        recipeName: name,
        done: !isWishAdd,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        // setTodos(json.todos);
      });
  };

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
          onClick={() => onLikeAddHandler(name, isWishAdd)}
        ></div>
      </div>
    </div>
  );
};

export default SideBarContent;
