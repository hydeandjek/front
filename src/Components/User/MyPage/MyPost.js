import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyPost = () => {
  const [boardList, setBoardList] = useState([]);

  const getBoardList = async () => {
    const resp = (await axios.get('//localhost:3000/mypage/mypost')).data;
    setBoardList(resp.data);

    const pngn = resp.pagination;
    console.log(pngn);
  };

  useEffect(() => {
    getBoardList(); // 1) 게시글 목록 조회 함수 호출
  }, []);

  return (
    <div>
      {/* <ul>
        {boardList.map((board) => (
          // map 함수로 데이터 출력
          <li key={board.idx}>{board.title}</li>
        ))}
      </ul> */}
      test
    </div>
  );
};

export default MyPost;
