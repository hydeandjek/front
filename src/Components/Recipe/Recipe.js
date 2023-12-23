import React, { useState } from 'react';
import './Recipe.scss';

import { NavLink } from 'react-router-dom';
import SideBarContent from '../SideBar/SideBarContent';

const Recipe = ({ recipeData }) => {
  if (!recipeData) return;

  const res = [
    {
      id: 1,
      src: recipeData.COOKRCP01.row[0].ATT_FILE_NO_MAIN,
      name: recipeData.COOKRCP01.row[0].RCP_NM,
    },
    {
      id: 2,
      src: recipeData.COOKRCP01.row[1].ATT_FILE_NO_MAIN,
      name: recipeData.COOKRCP01.row[1].RCP_NM,
    },
    {
      id: 3,
      src: recipeData.COOKRCP01.row[2].ATT_FILE_NO_MAIN,
      name: recipeData.COOKRCP01.row[2].RCP_NM,
    },
    {
      id: 4,
      src: recipeData.COOKRCP01.row[3].ATT_FILE_NO_MAIN,
      name: recipeData.COOKRCP01.row[3].RCP_NM,
    },
    {
      id: 5,
      src: recipeData.COOKRCP01.row[4].ATT_FILE_NO_MAIN,
      name: recipeData.COOKRCP01.row[4].RCP_NM,
    },
    {
      id: 6,
      src: recipeData.COOKRCP01.row[5].ATT_FILE_NO_MAIN,
      name: recipeData.COOKRCP01.row[5].RCP_NM,
    },
    {
      id: 7,
      src: recipeData.COOKRCP01.row[6].ATT_FILE_NO_MAIN,
      name: recipeData.COOKRCP01.row[6].RCP_NM,
    },
    {
      id: 8,
      src: recipeData.COOKRCP01.row[7].ATT_FILE_NO_MAIN,
      name: recipeData.COOKRCP01.row[7].RCP_NM,
    },
  ];

  console.log('res: ', res);

  return (
    <div className='contentBox'>
      {res.map((content, index) => {
        // console.log('src in map: ', content.src);
        return (
          <SideBarContent
            src={content.src}
            key={index}
            name={content.name}
          ></SideBarContent>
        );
      })}
    </div>
  );
};

export default Recipe;
