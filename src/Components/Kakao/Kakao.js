import React, { useEffect } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import './Kakao.scss';

const { kakao } = window;

function Kakao() {
  useEffect(() => {
    const container = document.getElementById('map'); // 지도를 담을 DOM 레퍼런스
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심 좌표.
      level: 3,
    };
    const map = new kakao.maps.Map(container, options); // 지도생성 및 객체 리턴
  }, []);
  return (
    <div className='mapBox'>
      <div
        id='map'
        style={{ width: '900px', height: '550px' }}
      ></div>
    </div>
  );
}

export default Kakao;
