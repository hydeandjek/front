import React, { useState, useEffect } from 'react';
import { Map } from 'react-kakao-maps-sdk';

import './Kakao.scss';
import { map } from 'lodash';
import SelectModal from '../Map/SelectModal';

const { kakao } = window;
function Kakao({ Category }) {
  const [selectedGu, setSelectedGu] = useState('마포구');
  const [selectedDong, setSelectedDong] = useState('대흥동');

  const handleSubmit = ( selectedGu, selectedDong ) => {
    
    const container = document.getElementById('map'); // 지도를 담을 DOM 레퍼런스
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심 좌표.
      level: 5,
    };
    const map = new kakao.maps.Map(container, options); // 지도생성 및 객체 리턴
    
    const infowindow = new kakao.maps.InfoWindow({zIndex:1});
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch( selectedGu + selectedDong + Category, placeSearchCB);
    
    function placeSearchCB (data, status, pagination) {
      if(status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();
        
        for (var i=0; i<data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        
        map.setBounds(bounds);
      }
    }
    
    function displayMarker(place) {
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x)
      });
      
      kakao.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent('<div style="padding:5px; font-size:13px;">' + place.place_name + '</div>');
        infowindow.open(map, marker);
      })
    }
  };

  useEffect(() => {
    handleSubmit(selectedGu, selectedDong);
  }, []);
    
  return (
    <div id='kakao'>
      <div
        id='map'
        style={{ width: '1020px', height: '720px' }}
      ></div>
      <SelectModal handleSubmit={handleSubmit} />
    </div>
  );
}

export default Kakao;
