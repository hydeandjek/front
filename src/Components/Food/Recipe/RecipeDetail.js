import React from 'react';

const RecipeDetailPage = () => {
  return (
    <div className='recipeDetail'>
      <h1>레시피 상세</h1>
      <div className='bookContainer'>
        <div className='page'>
          <h2>페이지 1</h2>
          <p>이곳에 첫 번째 페이지의 내용을 표시합니다.</p>
        </div>
        <div className='page'>
          <h2>페이지 2</h2>
          <p>이곳에 두 번째 페이지의 내용을 표시합니다.</p>
        </div>
        <div className='page'>
          <h2>페이지 3</h2>
          <p>이곳에 세 번째 페이지의 내용을 표시합니다.</p>
        </div>
        {/* 추가적인 페이지 내용을 필요에 따라 추가할 수 있습니다 */}
      </div>
    </div>
  );
};

export default RecipeDetailPage;
