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
import { countBy } from 'lodash';

const SideBarContent = ({
  name,
  src,
  onClick,
  style,
  onMouseEnter,
  onMouseLeave,
  likeList,
}) => {
  const [liked, setLiked] = useState(false);
  // 좋아요 요청 상태 관리
  const [isWishAdd, setIsWishAdd] = useState(false);

  // 좋아요 버튼 클릭 시 mypage/likelist로 이동
  useEffect(() => {
    setLiked(liked);
  }, []);

  useEffect(() => {
    console.log('SideBarContent', likeList, name);
    if (likeList.includes(name)) {
      setLiked(true);
      setIsWishAdd(true);
      console.log(true);
    } else {
      setLiked(false);
      setIsWishAdd(false);
    }
  }, [name]);

  const redirection = useNavigate();
  const { onLogout } = useContext(AuthContext);
  // 로그인 인증 토큰 얻어오기
  const [token, setToken] = useState(getLoginUserInfo().token);

  // fetch 요청 보낼 때 사용할 요청 헤더 설정
  const requestHeader = {
    'content-type': 'application/json',
    // JWT에 대한 인증 토큰이라는 타입을 선언
    Authorization: 'Bearer ' + localStorage.getItem('LOGIN_TOKEN'),
  };

  const onLikeAddHandler = (e) => {
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
        } else if (res.status === 406) {
          alert('찜은 한 번만 할 수 있습니다.');
          return;
        } else {
          alert('알 수 없는 문제가 발생했습니다. 관리자에게 문의하세요!');
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
          // console.log('-------------e: ', e.target); div임
          console.log('해당 회원의 찜 개수: ', json.likeCount);
          console.log(json.likedRecipeList);
          if (json.likedRecipeList.length > 0) {
            changeFillStyleOfLikedRecipeList(json.likedRecipeList);
          }
          // e.target.parentNode.querySelector(
          //   '.heart-icon'
          // ).style.backgroundImage = `url(${heartImage_liked})`;
        } else {
          setLiked(false);
          alert('찜이 취소되었습니다.');
          // console.log('-------------e: ', e.target);
          console.log('해당 회원의 찜 개수: ', json.likeCount);
          console.log(json.likedRecipeList);
          if (json.likedRecipeList.length > 0) {
            changeBlankStyleOfLikedRecipeList(json.likedRecipeList);
          }
          // e.target.parentNode.querySelector(
          //   '.heart-icon'
          // ).style.backgroundImage = `url(${heartImage})`;
        }
      });
    // .catch((err) => {
    //   console.log('err: ', err);
    //   alert('알 수 없는 에러가 발생했습니다. 관리자에게 문의하세요.');
    // })
  };

  // json.likedRecipeList 배열의 요소들의 스타일을 변경하는 함수
  function changeFillStyleOfLikedRecipeList(likedRecipeList) {
    // likedRecipeList.forEach((element) => {
    //   element.style.backgroundImage = `url(${heartImage_liked})`;
    //   // 원하는 스타일 변경을 여기에 추가할 수 있습니다.
    // });
  }
  function changeBlankStyleOfLikedRecipeList(likedRecipeList) {
    // likedRecipeList.forEach((element) => {
    //   element.style.backgroundImage = `url(${heartImage})`;
    //   // 원하는 스타일 변경을 여기에 추가할 수 있습니다.
    // });
  }

  console.log(onClick);
  console.log('rt:', name, liked);

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
        {/* <Heart /> */}
        <div
          className='heart-icon'
          style={{
            backgroundImage: liked
              ? `url(${heartImage_liked})`
              : `url(${heartImage})`,
          }}
          // style={{
          //   backgroundImage: `url(${
          //     liked
          //       ? '../../assets/img/like.png'
          //       : '../../assets/img/notLike.png'
          //   })`,
          // }}
          onClick={(e) => onLikeAddHandler(e, name, isWishAdd)}
        ></div>
      </div>
    </div>
  );
};

export default SideBarContent;
