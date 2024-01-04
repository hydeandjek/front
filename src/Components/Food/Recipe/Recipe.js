import React, { useEffect, useState } from 'react';
import './Recipe.scss';

import arrowR from '../../../assets/img/Right.png';
import arrowL from '../../../assets/img/Left.png';

import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import SideBarContent from '../../SideBar/SideBarContent';
import PageChange from './PageChange';
import axios from 'axios';
import { API_BASE_URL } from '../../../config/host-config';
import Loading from '../../LoadingBar/Loading';

const Recipe = ({ recipeData, onArrowClick }) => {
  const [loading, setLoading] = useState(false);
  //화면 전환 위해
  const redirection = useNavigate();

  //페이지넘 상태 관리
  let [pageNum, setPageNum] = useState(1);

  // 마우스 오버 효과
  const [isHovered, setIsHovered] = useState(false);

  const [isClicked, setIsClicked] = useState(false);

  const [hoveredRecipe, setHoveredRecipe] = useState(null);
  const [likeList, setLikeList] = useState([]);

  const handleMouseEnter = (recipeId) => {
    setIsHovered(true);
    setHoveredRecipe(recipeId);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHoveredRecipe(null);
  };

  // 좋아요
  const [isWishAdd, setIsWishAdd] = useState(false);

  // fetch 요청 보낼 때 사용할 요청 헤더 설정
  const requestHeader = {
    'content-type': 'application/json',
    // JWT에 대한 인증 토큰이라는 타입을 선언
    Authorization: 'Bearer ' + localStorage.getItem('LOGIN_TOKEN'),
  };

  const onLikeAddHandler = (e) => {
    setIsWishAdd(!isWishAdd);
    if (!isWishAdd) {
      // setWishCount(wishCount +1)
      fetch(API_BASE_URL + '/api/menu/recipe/like', {
        method: 'POST',
        body: JSON.stringify({
          user_id: 8,
          recipe_id: e.target.RCP_NM,
        }),
      });
    } else if (isWishAdd) {
      // setWishCount(wishCount -1)
      fetch('http://localhost:8000/product/dip', {
        method: 'POST',
        body: JSON.stringigy({
          user_id: 8,
          recipe_id: e.target.RCP_NM,
        }),
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(API_BASE_URL + '/api/menu/recipe/like', {
        headers: requestHeader,
      });

      if (res.status === 200) {
        setLikeList(res.data);
      }
    };

    fetchData();
  }, []);

  if (!recipeData) return;

  const res = [
    {
      id: 1,
      seq: recipeData.COOKRCP01.row[0].RCP_SEQ,
      cate: recipeData.COOKRCP01.row[0].RCP_PAT2,
      src: recipeData.COOKRCP01.row[0].ATT_FILE_NO_MAIN,
      name: recipeData.COOKRCP01.row[0].RCP_NM,
    },
    {
      id: 2,
      seq: recipeData.COOKRCP01.row[1].RCP_SEQ,
      cate: recipeData.COOKRCP01.row[1].RCP_PAT2,
      src: recipeData.COOKRCP01.row[1].ATT_FILE_NO_MAIN,
      name: recipeData.COOKRCP01.row[1].RCP_NM,
    },
    {
      id: 3,
      seq: recipeData.COOKRCP01.row[2].RCP_SEQ,
      cate: recipeData.COOKRCP01.row[2].RCP_PAT2,
      src: recipeData.COOKRCP01.row[2].ATT_FILE_NO_MAIN,
      name: recipeData.COOKRCP01.row[2].RCP_NM,
    },
    {
      id: 4,
      seq: recipeData.COOKRCP01.row[3].RCP_SEQ,
      cate: recipeData.COOKRCP01.row[3].RCP_PAT2,
      src: recipeData.COOKRCP01.row[3].ATT_FILE_NO_MAIN,
      name: recipeData.COOKRCP01.row[3].RCP_NM,
    },
    {
      id: 5,
      seq: recipeData.COOKRCP01.row[4].RCP_SEQ,
      cate: recipeData.COOKRCP01.row[4].RCP_PAT2,
      src: recipeData.COOKRCP01.row[4].ATT_FILE_NO_MAIN,
      name: recipeData.COOKRCP01.row[4].RCP_NM,
    },
    {
      id: 6,
      seq: recipeData.COOKRCP01.row[5].RCP_SEQ,
      cate: recipeData.COOKRCP01.row[5].RCP_PAT2,
      src: recipeData.COOKRCP01.row[5].ATT_FILE_NO_MAIN,
      name: recipeData.COOKRCP01.row[5].RCP_NM,
    },
    {
      id: 7,
      seq: recipeData.COOKRCP01.row[6].RCP_SEQ,
      cate: recipeData.COOKRCP01.row[6].RCP_PAT2,
      src: recipeData.COOKRCP01.row[6].ATT_FILE_NO_MAIN,
      name: recipeData.COOKRCP01.row[6].RCP_NM,
    },
    {
      id: 8,
      seq: recipeData.COOKRCP01.row[7].RCP_SEQ,
      cate: recipeData.COOKRCP01.row[7].RCP_PAT2,
      src: recipeData.COOKRCP01.row[7].ATT_FILE_NO_MAIN,
      name: recipeData.COOKRCP01.row[7].RCP_NM,
    },
    {
      id: 9,
      seq: recipeData.COOKRCP01.row[8].RCP_SEQ,
      cate: recipeData.COOKRCP01.row[8].RCP_PAT2,
      src: recipeData.COOKRCP01.row[8].ATT_FILE_NO_MAIN,
      name: recipeData.COOKRCP01.row[8].RCP_NM,
    },
  ];

  // console.log('res: ', res);

  const pageCount = Math.floor(recipeData.COOKRCP01.total_count / 9);
  // console.log(recipeData);
  const sendPageNum = async (e) => {
    if (e.target.id === 'right' && pageNum < pageCount) {
      setPageNum((pageNum += 1));
    } else if (e.target.id === 'left' && pageNum > 1) {
      setPageNum((pageNum -= 1));
    }

    // console.log('총 클릭한 횟수:', totalClicked);
    console.log('페이지 넘버:', pageNum);

    // 부모에서 선언된 함수를 호출하여 페이지넘을 매개변수로 보내자.
    await onArrowClick(pageNum);
  };

  const onRecipeDetail = async (name, cate, seq, e) => {
    if (
      e.target.classList.contains('heart-icon') &&
      e.target.tagName === 'DIV'
    ) {
      console.log('heart-icon 클래스명을 가진 div 태그가 클릭되었습니다.');
      return;
    }
    setLoading(true);

    console.log(
      `메뉴명: ${name}, 카테고리:${cate}, id: ${seq}인 레시피 상세 요청!`
    );
    try {
      // await onDetailClick();
      const res = await axios.get(
        API_BASE_URL +
          '/api/menu/recipe/detail/' +
          name +
          '/' +
          cate +
          '/' +
          seq
      );
      const data = await res.data.COOKRCP01.row; // []
      console.log(data);
      console.log(data[0]);

      // if (data.length > 0) {
      // setDetailData(data[0]);
      // setIsClicked(true);
      // 경로 이동 시 데이터 전달 가능
      redirection('/food/recipes/detail', { state: { data } });
      // }
      setLoading(false);
    } catch (error) {
      console.error('레시피 상세보기 요청에 실패했습니다.', error);
    }
  };

  // Loading이 true면 컴포넌트를 띄우고, false면 null(빈 값)처리 하여 컴포넌트 숨김
  return (
    <>
      {loading ? <Loading /> : null}
      <div className='arrowBox'>
        {pageNum > 1 && (
          <PageChange
            id='left'
            src={arrowL}
            alt='이전 페이지'
            onClick={sendPageNum}
            style={{
              opacity: isHovered ? 0.5 : 1,
              display: pageNum === 1 ? 'none' : 'block',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        )}
      </div>
      <div className='contentBox'>
        {res.map((content, index) => {
          // console.log('src in map: ', content.src);
          return (
            <SideBarContent
              src={content.src}
              key={index}
              name={content.name}
              onClick={(e) =>
                onRecipeDetail(content.name, content.cate, content.seq, e)
              }
              likeList={likeList}
              style={{ opacity: hoveredRecipe === index ? 0.5 : 1 }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            ></SideBarContent>
          );
        })}
      </div>
      <div className='arrowBox'>
        {pageNum < pageCount && (
          <PageChange
            id='right'
            src={arrowR}
            alt='다음 페이지'
            onClick={sendPageNum}
            style={{ opacity: isHovered ? 0.5 : 1 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        )}
      </div>
    </>
  );
};

export default Recipe;
