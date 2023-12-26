import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SideBarItem2 from '../SideBar/SideBar2/SideBarItem2';
import SideBarContent3 from '../SideBar/SideBar3/SideBarContent3';
import '../SideBar/SideBar2/SideBarItem2.scss';
import '../SideBar/SideBar3/SideBarContent3';
import { food } from '../../assets/constants';
import axios from 'axios';
import './Mealkit.scss';

const Mealkit = () => {
  const page = 1;
  const [mealkits, setMealkits] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8181/mealKit/${page}`);
        const data = response.data;

        setMealkits(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div id='warp-side'>
        <div className='rec_center2'>
          FOOD
          <div className='side2'>
            <div className='sidebar2'>
              {food.map((menu, index) => {
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

        <div className='warp-content'>
          <div className='contentBox'>
            {mealkits.map((content, index) => {
              return (
                <SideBarContent3
                key={index}
                  url={content.mealKitUrl}
                  src={content.mealKitImg}
                  name={content.mealKitName}
                  price={content.mealKitPrice + '원'}
                  ></SideBarContent3>
                  );
                })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Mealkit;