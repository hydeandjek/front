import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SelectModal.scss';

const SelectModal = ({ handleSubmit }) => {
  const [guOptions, setGuOptions] = useState([]);
  const [dongOptions, setDongOptions] = useState([]);

  const [selectedGu, setSelectedGu] = useState('');
  const [selectedDong, setSelectedDong] = useState('');

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
    setDongOptions([]);

    try {
      const response = await axios.get(
        `http://localhost:8181/map/${encodeURIComponent(selectedValue)}`
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
              value=''
              hidden
            >
              구
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
              value=''
              hidden
            >
              동
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
