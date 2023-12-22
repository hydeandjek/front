import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { life } from '../../assets/constants';
import SideBarItem2 from '../SideBar/SideBar2/SideBarItem2';

function Parcel() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 67;
  const [searchAddress, setSearchAddress] = useState('');
  const { kakao } = window;

  const fetchData = async (pageNumber) => {
    try {
      const response = await axios.get(
        `http://openapi.seoul.go.kr:8088/63714f544868796437314365456f6a/json/safeOpenBox/${pageNumber}/${itemsPerPage}/`
      );

      if (response.data && response.data.safeOpenBox) {
        const fetchedData = response.data.safeOpenBox.row.map((item) => ({
          ADDRDETAIL: item.ADDRDETAIL,
          ANSIMIADDR: item.ANSIMIADDR,
          ANSIMINM: item.ANSIMINM,
          WGSXPT: item.WGSXPT,
          WGSYPT: item.WGSYPT,
        }));
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
        return item.ANSIMIADDR.includes(searchAddress);
      });

      console.log(filterdData);

      if (filterdData === null || filterdData.length === 0) return;

      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(
          filterdData[0].WGSXPT,
          filterdData[0].WGSYPT
        ),
        level: 3,
      };
      const map = new kakao.maps.Map(container, options);
      const bounds = new kakao.maps.LatLngBounds();

      // Add markers based on fetched data
      filterdData.forEach((item) => {
        const markerPosition = new kakao.maps.LatLng(item.WGSXPT, item.WGSYPT);
        const marker = new kakao.maps.Marker({
          position: markerPosition,
        });

        kakao.maps.event.addListener(marker, 'click', function () {
          const infowindow = new kakao.maps.InfoWindow({
            content: `<div><p>${item.ADDRDETAIL}</p><p>${item.ANSIMINM}</p><p>${item.ANSIMIADDR}</p></div>`,
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
        `https://dapi.kakao.com/v2/local/search/address.json?query=${searchAddress}`
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
      <div
        id='Parcel'
        style={{ height: '50px' }}
      >
        <div className='rec_center2'>
          Life
          <div className='side2'>
            <div className='sidebar2'>
              {life.map((menu, index) => {
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
      </div>
      <div>
        <input
          style={{ marginLeft: '360px' }}
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
          style={{
            width: '1000px',
            height: '650px',
            marginLeft: '360px',
            marginTop: '50px',
          }}
        ></div>
      </div>
      {data && (
        <div>
          {data
            .filter((item) => {
              return item.ANSIMIADDR.includes(searchAddress);
            })
            .map((item, index) => (
              <div key={index}></div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Parcel;
