import React from 'react';
import Slider from 'react-slick';
import './SlideSlick2.scss';
import slide3 from '../../../src/assets/img/44444444.png';
import slide4 from '../../../src/assets/img/1244214124.png';
import slide5 from '../../../src/assets/img/qweroiqwuer.png';
import slide6 from '../../../src/assets/img/24시간 관리자와 소통 및 다양한 서비스 제공.png';
import slide7 from '../../../src/assets/img/안마건 댓글.png';

const SlideSlick2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className='slick-warp'>
      <Slider {...settings}>
        <div className='slick-content2'>
          <img src={slide3} />
          <h1>로그인 서비스</h1>
        </div>
        <div className='slick-content2'>
          <img src={slide4} />
          <h1>회원 주소에 따른 지도 자동좌표 변환</h1>
        </div>
        <div className='slick-content2'>
          <img src={slide5} />
          <h1>사용자의 레시피 찜목록</h1>
        </div>
        <div className='slick-content2'>
          <img src={slide6} />
          <h1>관리자와의 1대1 채팅을 통한 빠른 질의응답</h1>
        </div>
        <div className='slick-content2'>
          <img src={slide7} />
          <h1>게시판을 통한 후기 및 친목 커뮤니티</h1>
        </div>
      </Slider>
    </div>
  );
};

export default SlideSlick2;
