import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { board } from '../../../assets/constants';
import axios from 'axios';
import '../Donation/scss/DonaList.scss';
import BoardList from '../List/BoardList';
import '../List/BoardList.scss';
import SideBarItem2 from '../../SideBar/SideBar2/SideBarItem2';
import { useHorizontalScroll } from '../UseSideScroll';

const ApproList = () => {
  let [pageNum, setPageNum] = useState(1);
  const [approval, setApprovals] = useState([]);
  const scrollRef = useHorizontalScroll();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8181/appliance/${pageNum}`);
        const data = response.data;
        setApprovals(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [pageNum]);

  return (
    <>
      <div id='donationBoard'>
        <div className='rec_center2'>
          Community
          <div className='side2'>
            <div className='sidebar2'>
              {board.map((menu, index) => (
                <NavLink
                  style={{ textDecoration: 'none' }}
                  to={menu.path}
                  key={index}
                >
                  <SideBarItem2 menu={menu} />
                </NavLink>
              ))}
            </div>
          </div>
        </div>

        <div className='warp-content'>
          <div className='contentBox' ref={scrollRef}>
            {approval.map((content, index) => (
              <BoardList
                key={index}
                url={content.applianceUrl}
                src={content.applianceImg}
                price={content.appliancePrice}
                name={content.applianceName}
                price2={content.appliancePrice}
                price3={content.appliancePrice}
              />
            ))}
          </div>
        </div>

      </div>
    </>
  );
};

export default ApproList;