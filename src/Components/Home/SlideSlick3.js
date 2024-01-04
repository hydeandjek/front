import React from 'react';
import Slider from 'react-slick';
import './SlideSlick3.scss';
import slide4 from '../../../src/assets/img/12312312.png';
import slide5 from '../../../src/assets/img/나눔게시판 상세글.png';
import slide6 from '../../../src/assets/img/나눔게시판 보류상황.png';
import slide7 from '../../../src/assets/img/나눔게시판 소통댓글.png';
import slide8 from '../../../src/assets/img/24시간 관리자와 소통 및 다양한 서비스 제공.png';
// import slide9 from '../../../src/assets/img/mainpage-slice33.png';

const SlideSlick3 = () => {
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
        <div className='slick-content3'>
          <img src={slide4} />
          <h1>관리자 인증을 통한 나눔게시판 목록</h1>
        </div>
        <div className='slick-content3'>
          <img src={slide5} />
          <h1>나눔게시판 상세 글</h1>
        </div>
        <div className='slick-content3'>
          <img src={slide6} />
          <h1>보류게시판의 보류글 및 보류사유</h1>
        </div>
        <div className='slick-content3'>
          <img src={slide7} />
          <h1>나눔글의 댓글을 통한 소통 및 후기</h1>
        </div>
        <div className='slick-content3'>
          <img src={slide8} />
          {/* <h1>주제에 따른 커뮤니티 게시판</h1> */}
        </div>
      </Slider>
    </div>
  );
};

export default SlideSlick3;
