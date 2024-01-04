import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SelectModal.scss';
import { API_BASE_URL } from '../../config/host-config';

const SelectModal = ({ handleSubmit }) => {
  const [guOptions, setGuOptions] = useState([]);
  const [dongOptions, setDongOptions] = useState([]);

  const [selectedGu, setSelectedGu] = useState('');
  const [selectedDong, setSelectedDong] = useState('');

  const API_URL = API_BASE_URL + '/map';

  const [myaddress, setMyaddress] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/map/myaddress/gudong`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('LOGIN_TOKEN'),
              'Content-Type': 'application/json',
            },
          }
        );
        const data = response.data;
        console.log(response.data);
        setMyaddress(data);

        // 구 추출
        const startIndex = data.indexOf(' ') + 1;
        const endIndex = data.indexOf('구') + 1;
        const gu = data.substring(startIndex, endIndex);

        // 동 추출
        const startParenthesesIndex = data.indexOf('(') + 1;
        const endParenthesesIndex = data.indexOf(')');
        const dong = data.substring(startParenthesesIndex, endParenthesesIndex);

        setSelectedGu(gu);
        setSelectedDong(dong);
        handleSubmit(gu, dong);
        setDongOptions([]);

        try {
          const response = await axios.get(
            `${API_URL}/${encodeURIComponent(gu)}`
          );
          const data = response.data;

          setDongOptions(data);
        } catch (error) {
          console.error('Error occurred:', error);
        }
      } catch (error) {
        console.log('로그인 정보가 없어 기본값이 출력됩니다.');
        setSelectedGu('마포구');
        setSelectedDong('대흥동');

        handleSubmit('마포구', '대흥동');
        setDongOptions([]);

        try {
          const response = await axios.get(
            `${API_URL}/${encodeURIComponent('마포구')}`
          );
          const data = response.data;

          setDongOptions(data);
        } catch (error) {
          console.error('Error occurred:', error);
        }
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const adr0 = [
      '강남구',
      '강동구',
      '강북구',
      '강서구',
      '관악구',
      '광진구',
      '구로구',
      '금천구',
      '노원구',
      '도봉구',
      '동대문구',
      '동작구',
      '마포구',
      '서대문구',
      '서초구',
      '성동구',
      '성북구',
      '송파구',
      '양천구',
      '영등포구',
      '용산구',
      '은평구',
      '종로구',
      '중구',
      '중랑구',
    ];

    setGuOptions(adr0);
  }, []);

  const handleGuChange = async (event) => {
    const selectedValue = event.target.value;

    setSelectedGu(selectedValue);
    setSelectedDong('동');
    setDongOptions([]);

    try {
      const response = await axios.get(
        `${API_URL}/${encodeURIComponent(selectedValue)}`
      );
      const data = response.data;

      setDongOptions(data);
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  return (
    <div
      id='selectModal'
      role='selectModal'
    >
      <div className='address-select-modal'>
        <div className='gu-select'>
          <img
            className='select-icon'
            alt='Select icon'
            src='https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/65797466ded6cea163ae631d/img/select-icon.svg'
          />
          <select
            className='text-wrapper'
            onChange={handleGuChange}
            value={selectedGu}
          >
            <option
              value={selectedGu}
              hidden
            >
              {selectedGu}
            </option>
            {guOptions.map((option, index) => (
              <option
                key={index}
                value={option}
              >
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className='dong-select'>
          <img
            className='select-icon'
            alt='Select icon'
            src='https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/65797466ded6cea163ae631d/img/select-icon.svg'
          />
          <select
            className='text-wrapper'
            value={selectedDong}
            onChange={(event) => setSelectedDong(event.target.value)}
          >
            <option
              value={selectedDong}
              hidden
            >
              {selectedDong}
            </option>
            {dongOptions.map((option, index) => (
              <option
                key={index}
                value={option.dong}
              >
                {option.dong}
              </option>
            ))}
          </select>
        </div>
      </div>

      <img
        className='address-search-icon'
        src='https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/65797466ded6cea163ae631d/img/address-search-icon.svg'
        onClick={() => handleSubmit(selectedGu, selectedDong)}
      />
    </div>
  );
};

export default SelectModal;
