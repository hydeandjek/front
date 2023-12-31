import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { board } from '../../../assets/constants';
import axios from 'axios';
import './scss/DonaRegist.scss';
import '../List/BoardList.scss';
import SideBarItem2 from '../../SideBar/SideBar2/SideBarItem2';
import { API_BASE_URL } from '../../../config/host-config';

const DonaRegist = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageList, setImageList] = useState([]);
  const [imageNames, setImageNames] = useState([]);
  const [showImageList, setShowImageList] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [rotation, setRotation] = useState(0);
  const imageInput = useRef(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleImageClick = () => {
    imageInput.current.click();
  };

  const handleImageUpload = (event) => {
    const files = event.target.files;
    const newNames = [];
    const newImages = [];
  
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
  
      reader.onload = () => {
        const newImage = {
          name: file.name,
          url: reader.result,
        };
        newNames.push(file.name);
        newImages.push(newImage);
  
        setImageNames([...imageNames, ...newNames]);
        setImageList([...imageList, ...newImages]);
      };
  
      reader.readAsDataURL(file);
    }
  };

  const handleImageBtnClick = () => {
    if (rotation === 0) {
      setRotation(-45);
      setBackgroundColor("Gainsboro");
      document.querySelector('.imageBtn').style.borderBottom = 'none';
    } else {
      setRotation(0);
      setBackgroundColor("white");
      document.querySelector('.imageBtn').style.borderBottom = '1px solid silver';
    }
    setShowImageList(!showImageList);
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleSubmit = async () => {
    try {
      console.log("전송할 데이터:", {
        title: title,
        image: imageList,
        content: content
      });

      const response = await axios.post(API_BASE_URL + '/donation/regist', {
        title: title,
        image: imageList,
        content: content
      });
      console.log(response.data);  // 응답 데이터 처리
    } catch (error) {
      console.error(error);  // 오류 처리
    }
  };

  return (
    <>
      <div id='registBoard'>
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
          <div className='registBoard'>
            <div className="warp-content">
              <div className="registBox">
                <div className="titleBox">
                  <input
                    type="text"
                    placeholder="제목을 입력해주세요."
                    value={title}
                    onChange={handleTitleChange}
                  />
                </div>

                <p className='boundaryLine'></p>

                <div className="imageBox">
                  {imageNames.map((imageName, index) => (
                    <p key={index}>{imageName}</p>
                  ))}
                  {imageNames.length === 0 && <p style={{color: '#a9a9a9'}}>이미지 선택</p>}
                </div>

                <div className="contentBox">
                  <textarea
                    placeholder="상품에 대한 설명을 작성해주세요."
                    value={content}
                    onChange={handleContentChange}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className='imageBtn' style={{ backgroundColor: backgroundColor }}>
            <div
              className="rotateBtn"
              onClick={handleImageBtnClick}
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              +
            </div>
            {showImageList && (
              <div className="imageList">
                <label htmlFor="imageInput" onClick={handleImageClick}>
                  <img
                    src="https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/658fd9dc1389d7227cb6ba65/img/group@2x.png"
                    alt="PictureImage"
                  />
                  <span>사진</span>
                </label>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              id="imageInput"
              onChange={handleImageUpload}
              ref={imageInput}
              style={{ display: 'none' }}
              multiple
            />
          </div>

          <div
            className='submitBtn'
            onClick={handleSubmit}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ borderColor: isHovered ? 'black' : 'silver' }}
          >
            {isHovered ? (
              <img
                src="https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/6590315334bd3cdd86f37b35/img/group@2x.png"
                alt="SubmitImage"
              />
            ) : (
              <img
                src="https://cdn.animaapp.com/projects/65741ad69db072ad359ef23b/releases/659034e8ebd5f41b5ff0ab42/img/group@2x.png"
                alt="SubmitImage"
              />
            )}
            <span style={{ color: isHovered ? 'black' : 'silver' }}>저장</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonaRegist;