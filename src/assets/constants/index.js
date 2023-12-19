import React from 'react';
import Image1 from '../img/kakao_login_medium_wide.png';

export const menus = [
  { name: ' 혼밥하기 좋은 맛집 ', path: '/' },
  { name: ' 레시피 ', path: '/mylist' },
  { name: ' 편의점 ', path: '/likedlist' },
  { name: ' 검색 ', path: '/setting' },
];
export const rec = [
  {
    name: 'Image1',
    src: Image1,
  },
  { name: '', src: '' },
  { name: '', src: '' },
  { name: '', src: '' },
  { name: '', src: '' },
  { name: '', src: '' },
];
export const Life = [
  { name: ' 혼밥하기 좋은 맛집 ', path: '/' },
  { name: ' 레시피 ', path: '/mylist' },
  { name: ' 즐겨찾기 한 맛집 리스트 ', path: '/likedlist' },
  { name: ' 설정 ', path: '/setting' },
];

export function Index() {
  return (
    <div>
      {rec.map((item, index) => (
        <div key={index}>
          <img
            src={item.src}
            alt=''
          />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}
