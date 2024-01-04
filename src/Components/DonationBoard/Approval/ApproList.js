import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { board } from '../../../assets/constants';
import axios from 'axios';
import '../Donation/scss/DonaList.scss';
import BoardList from '../List/BoardList';
import '../List/BoardList.scss';
import SideBarItem2 from '../../SideBar/SideBar2/SideBarItem2';
import { useHorizontalScroll } from '../UseSideScroll';
import { API_BASE_URL } from '../../../config/host-config';

const ApproList = () => {
  const [approval, setApprovals] = useState([]);
  const scrollRef = useHorizontalScroll();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          API_BASE_URL + '/board/donation/approval'
        );
        const data = response.data;
        setApprovals(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

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
          <div
            className='contentBox'
            ref={scrollRef}
          >
            {approval.map((content, index) => (
              <BoardList
                key={index}
                url={'approval/' + content.id}
                src={content.imageUrl}
                name={content.userName}
                title={content.title}
                date={content.approvalDate}
                content={content.content}
                count={content.commentCount}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ApproList;
