import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Emergency() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 100;

  const fetchData = async (pageNumber) => {
    try {
      const response = await axios.get(
        `http://openapi.seoul.go.kr:8088/63714f544868796437314365456f6a/json/TbPharmacyOperateInfo/${pageNumber}/${itemsPerPage}/`
      );

      if (response.data && response.data.TbPharmacyOperateInfo) {
        const fetchedData = response.data.TbPharmacyOperateInfo.row.map(
          (item) => ({
            DUTYADDR: item.DUTYADDR,
            DUTYMAPIMG: item.DUTYMAPIMG,
            DUTYTEL3: item.DUTYTEL3,
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

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1 > 0 ? currentPage - 1 : 1);
  };

  return (
    <div>
      <div>
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          이전 페이지
        </button>
        <button onClick={handleNextPage}>다음 페이지</button>
      </div>
      {data && (
        <div>
          {data.map((item, index) => (
            <div key={index}>
              <p>DUTYADDR: {item.DUTYADDR}</p>
              <p>DUTYMAPIMG: {item.DUTYMAPIMG}</p>
              <p>DUTYTEL3: {item.DUTYTEL3}</p>
              <p>WGS84LON: {item.WGS84LON}</p>
              <p>WGS84LAT: {item.WGS84LAT}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Emergency;
