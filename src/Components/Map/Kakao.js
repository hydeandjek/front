import React, { useState, useEffect } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import axios from 'axios';

import './Kakao.scss';
import { map } from 'lodash';
import SelectModal from '../Map/SelectModal';
import { CLIENT_ID } from '../../config/kakao-config';

const { kakao } = window;
function Kakao({ Category }) {
  const [selectedGu, setSelectedGu] = useState('');
  const [selectedDong, setSelectedDong] = useState('');

  const handleSubmit = (selectedGu, selectedDong) => {
    if (selectedDong === '동') { alert('동을 선택해주세요.'); window.location.reload(); return; }
    const container = document.getElementById('map'); // 지도를 담을 DOM 레퍼런스
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심 좌표.
      level: 5,
    };
    const map = new kakao.maps.Map(container, options); // 지도생성 및 객체 리턴

    const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(selectedGu + selectedDong + Category, placeSearchCB);

    function placeSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();

        for (var i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        map.setBounds(bounds);
      }
    }

    function displayMarker(place) {
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      kakao.maps.event.addListener(marker, 'click', function () {
        // const infowindowIsOpen = infowindow.getMap() !== null;

        axios
          .get('https://dapi.kakao.com/v2/local/search/keyword.json', {
            params: {
              query: place.place_name,
            },
            headers: {
              Authorization: `KakaoAK ${CLIENT_ID}`,
            },
          })
          .then((response) => {
            const data = response.data;
            const place = data.documents[0];
            const content = `<div class="customoverlay"><a href="${place.place_url}" ><span class="title">${place.place_name}</span></a></div>`;
            infowindow.setContent(content);
          })
          .catch((error) => {
            console.error(error);
          });

        // infowindowIsOpen ? infowindow.close() :
        infowindow.open(map, marker);
      });
    }
  };

  useEffect(() => {
    handleSubmit(selectedGu, selectedDong);
  }, []);

  return (
    <div id='kakao'>
      <div className='title_name_map'>{Category}</div>
      <div
        id='map'
        style={{
          position: 'absolute',
          display: 'flex',
          top: '55%',
          left: '55%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '10px',
          width: '60%',
          height: '720px',
          margin: '0 10px',
        }}
      ></div>
      <SelectModal handleSubmit={handleSubmit} />
    </div>
  );
}

export default Kakao;
