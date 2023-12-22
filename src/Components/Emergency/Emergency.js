import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Map } from 'react-kakao-maps-sdk';

function Emergency() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 67;
  const [searchAddress, setSearchAddress] = useState('');
  const { kakao } = window;

  const fetchData = async (pageNumber) => {
    try {
      const response = await axios.get(
        `http://openapi.seoul.go.kr:8088/63714f544868796437314365456f6a/json/TvEmgcHospitalInfo/${pageNumber}/${itemsPerPage}/`
      );

      if (response.data && response.data.TvEmgcHospitalInfo) {
        const fetchedData = response.data.TvEmgcHospitalInfo.row.map(
          (item) => ({
            DUTYADDR: item.DUTYADDR,
            DUTYMAPIMG: item.DUTYMAPIMG,
            DUTYNAME: item.DUTYNAME,
            DUTYTEL1: item.DUTYTEL1,
            WGS84LON: item.WGS84LON,
            WGS84LAT: item.WGS84LAT,
          })
        );
        setData(fetchedData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (data) {
      const filterdData = data.filter((item) => {
        return item.DUTYADDR.includes(searchAddress);
      });

      console.log(filterdData);

      if (filterdData === null || filterdData.length === 0) return;

      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(
          filterdData[0].WGS84LAT,
          filterdData[0].WGS84LON
        ),
        level: 3,
      };
      const map = new kakao.maps.Map(container, options);
      const bounds = new kakao.maps.LatLngBounds();

      // Add markers based on fetched data
      filterdData.forEach((item) => {
        const markerPosition = new kakao.maps.LatLng(
          item.WGS84LAT,
          item.WGS84LON
        );
        const marker = new kakao.maps.Marker({
          position: markerPosition,
        });

        kakao.maps.event.addListener(marker, 'click', function () {
          const infowindow = new kakao.maps.InfoWindow({
            content: `<div><p>${item.DUTYADDR}</p><p>${item.DUTYMAPIMG}</p><p>${item.DUTYNAME}</p></div>`,
          });
          infowindow.open(map, marker);
        });

        marker.setMap(map);

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        bounds.extend(markerPosition);
      });
      // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
      map.setBounds(bounds);
    }
  }, [data, kakao, searchAddress]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1 > 0 ? currentPage - 1 : 1);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://dapi.kakao.com/v2/local/search/address.json?query=${searchAddress}`,
        {
          headers: {
            Authorization: 'KakaoAK YOUR_KAKAO_REST_API_KEY',
          },
        }
      );

      if (response.data.documents.length > 0) {
        const { x, y } = response.data.documents[0].address;
        const map = new kakao.maps.Map(document.getElementById('map'), {
          center: new kakao.maps.LatLng(y, x),
          level: 3,
        });
      } else {
      }
    } catch (error) {
      console.error('Error fetching search data:', error);
    }
  };

  return (
    <div>
      <div>
        <input
          type='text'
          value={searchAddress}
          placeholder='입력해주세요.'
          onChange={(e) => setSearchAddress(e.target.value)}
        />
        {/* <button onClick={handleSearch}>Search Address</button> */}
      </div>
      <div className='mapBox'>
        <div
          id='map'
          style={{ width: '900px', height: '550px' }}
        ></div>
      </div>
      {data && (
        <div>
          {data
            .filter((item) => {
              return item.DUTYADDR.includes(searchAddress);
            })
            .map((item, index) => (
              <div key={index}>
                <p>주소: {item.DUTYADDR}</p>
                <p>전화번호: {item.DUTYTEL1}</p>
                <p>병원명: {item.DUTYNAME}</p>
                <hr />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Emergency;