import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../config/host-config';
import './sass/Policy2.scss';
import { NavLink } from 'react-router-dom';
import SideBarItem2 from '../SideBar/SideBar2/SideBarItem2';
import { policy } from '../../assets/constants';

const { kakao } = window;

let __pagination = {
  first: 1,
  last: 10,
  current: 1,
  totalCount: 125,
  hasNextPage: true,
  hasPrevPage: false,
};

const Policy2 = () => {
  const [_pagination, _setPagination] = useState(__pagination);
  const API_URL = API_BASE_URL + '/api/public';

  let container; //= document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
  let options = {
    //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
    level: 3, //지도의 레벨(확대, 축소 정도)
  };

  // 마커를 담을 배열입니다
  let markers = [];

  //지도 생성 및 객체 리턴
  let map; // = new kakao.maps.Map(container, options);

  // 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
  const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

  // 검색 결과 목록과 마커를 표출하는 함수입니다
  const displayPlaces = (places) => {
    let listEl = document.getElementById('placesList'),
      menuEl = document.getElementById('menu_wrap'),
      fragment = document.createDocumentFragment(),
      bounds = new kakao.maps.LatLngBounds(),
      listStr = '';

    // 검색 결과 목록에 추가된 항목들을 제거합니다
    removeAllChildNods(listEl);

    // 지도에 표시되고 있는 마커를 제거합니다
    removeMarker();

    for (let i = 0; i < places.length; i++) {
      // 마커를 생성하고 지도에 표시합니다
      let placePosition = new kakao.maps.LatLng(places[i].y, places[i].x),
        marker = addMarker(placePosition, i),
        itemEl = getListItem(i, places[i]); // 검색 결과 항목 Element를 생성합니다

      // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
      // LatLngBounds 객체에 좌표를 추가합니다
      bounds.extend(placePosition);

      // 마커와 검색결과 항목에 mouseover 했을때
      // 해당 장소에 인포윈도우에 장소명을 표시합니다
      // mouseout 했을 때는 인포윈도우를 닫습니다
      (function (marker, title) {
        kakao.maps.event.addListener(marker, 'mouseover', function () {
          displayInfowindow(marker, title, places[i]);
        });

        kakao.maps.event.addListener(marker, 'mouseout', function () {
          infowindow.close();
        });

        itemEl.onmouseover = function () {
          displayInfowindowCenter(marker, title, places[i]);
        };

        itemEl.onmouseout = function () {
          infowindow.close();
        };
      })(marker, places[i].publicTitle);

      fragment.appendChild(itemEl);
    }

    // 검색결과 항목들을 검색결과 목록 Element에 추가합니다
    listEl.appendChild(fragment);
    menuEl.scrollTop = 0;

    // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
    map.setBounds(bounds);
  };

  // 검색결과 항목을 Element로 반환하는 함수입니다
  const getListItem = (index, places) => {
    let el = document.createElement('li'),
      itemStr =
        '<span class="markerbg marker_' +
        (index + 1) +
        '"></span>' +
        '<div class="info">' +
        '   <h5>' +
        places.publicTitle +
        '</h5>';

    itemStr += '    <span>' + places.publicAddr + '</span>';

    itemStr += '  <span class="tel">' + places.publicNum + '</span></div>';

    el.innerHTML = itemStr;
    el.className = 'item';

    return el;
  };

  // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
  const addMarker = (position, idx, title) => {
    let imageSrc =
        'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png', // 마커 이미지 url, 스프라이트 이미지를 씁니다
      imageSize = new kakao.maps.Size(36, 37), // 마커 이미지의 크기
      imgOptions = {
        spriteSize: new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
        spriteOrigin: new kakao.maps.Point(0, idx * 46 + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
        offset: new kakao.maps.Point(13, 37), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
      },
      markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
      marker = new kakao.maps.Marker({
        position: position, // 마커의 위치
        image: markerImage,
      });

    marker.setMap(map); // 지도 위에 마커를 표출합니다
    markers.push(marker); // 배열에 생성된 마커를 추가합니다

    return marker;
  };

  // 지도 위에 표시되고 있는 마커를 모두 제거합니다
  const removeMarker = () => {
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers = [];
  };

  // 검색결과 목록 하단에 페이지번호를 표시는 함수입니다
  const displayPagination = (pagination) => {
    let paginationEl = document.getElementById('pagination'),
      fragment = document.createDocumentFragment(),
      i;

    // 기존에 추가된 페이지번호를 삭제합니다
    while (paginationEl.hasChildNodes()) {
      paginationEl.removeChild(paginationEl.lastChild);
    }

    if (pagination.hasPrevPage) {
      let el = document.createElement('a');
      el.href = '#';
      el.innerHTML = '<';

      el.onclick = (function (i) {
        return function () {
          gotoPrevPage(pagination.first - 1);
        };
      })(i);

      fragment.appendChild(el);
    }

    for (i = pagination.first; i <= pagination.last; i++) {
      let el = document.createElement('a');
      el.href = '#';
      el.innerHTML = i;

      if (i === pagination.current) {
        el.className = 'on';
      } else {
        el.onclick = (function (i) {
          return function () {
            gotoPage(i);
          };
        })(i);
      }

      fragment.appendChild(el);
    }

    if (pagination.hasNextPage) {
      let el = document.createElement('a');
      el.href = '#';
      el.innerHTML = '>';

      el.onclick = (function (i) {
        return function () {
          gotoNextPage(pagination.last + 1);
        };
      })(i);

      fragment.appendChild(el);
    }

    paginationEl.appendChild(fragment);
  };

  // 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
  // 인포윈도우에 장소명을 표시합니다
  const displayInfowindow = (marker, title, _place) => {
    let content = '<div style="padding:5px;z-index:1;">' + title + '</div>';

    infowindow.setContent(content);
    infowindow.open(map, marker);
  };

  const displayInfowindowCenter = (marker, title, place) => {
    let content = '<div style="padding:5px;z-index:1;">' + title + '</div>';

    infowindow.setContent(content);
    infowindow.open(map, marker);
    map.setCenter(new kakao.maps.LatLng(place.y, place.x));
  };

  // 검색결과 목록의 자식 Element를 제거하는 함수입니다
  const removeAllChildNods = (el) => {
    while (el.hasChildNodes()) {
      el.removeChild(el.lastChild);
    }
  };

  const fetchData = async (i) => {
    const res = await axios.get(`${API_URL}/${i}`);
    if (res.status === 200) {
      // 정상적으로 검색이 완료됐으면
      // 검색 목록과 마커를 표출합니다
      displayPlaces(await res.data);

      // 페이지 번호를 표출합니다
      displayPagination(__pagination);
    } else {
      console.log(await res.data);
    }
  };

  const setPagination = (pagination) => {
    __pagination = { ...pagination };
    _setPagination({ ...__pagination });
  };

  const gotoPage = (i) => {
    if (i < 11) {
      setPagination({
        first: 1,
        last: 10,
        current: i,
        totalCount: 125,
        hasNextPage: true,
        hasPrevPage: false,
      });
    } else {
      setPagination({
        first: 11,
        last: 13,
        current: i,
        totalCount: 125,
        hasNextPage: false,
        hasPrevPage: true,
      });
    }

    fetchData(i);
  };

  const gotoNextPage = (i) => {
    setPagination({
      first: 11,
      last: 13,
      current: i,
      totalCount: 125,
      hasNextPage: false,
      hasPrevPage: true,
    });
    fetchData(i);
  };

  const gotoPrevPage = (i) => {
    setPagination({
      first: 1,
      last: 10,
      current: i,
      totalCount: 125,
      hasNextPage: true,
      hasPrevPage: false,
    });
    fetchData(i);
  };

  useEffect(() => {
    container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스

    //지도 생성 및 객체 리턴
    map = new kakao.maps.Map(container, options);

    fetchData(1);
  }, []);
  return (
    <div className='content-wrap'>
      <div className='rec_center2'>
        Policy
        <div className='side2'>
          <div className='sidebar2'>
            {policy.map((menu, index) => {
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
      </div>
      <div className='map_wrap'>
        <div
          id='menu_wrap'
          className='bg_white'
        >
          <ul id='placesList'></ul>
          <div id='pagination'></div>
        </div>
        <div
          id='map'
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            overflow: 'hidden',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Policy2;
