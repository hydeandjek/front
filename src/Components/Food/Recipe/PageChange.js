import React from 'react';

import './Recipe.scss';

const PageChange = (props) => {
  return (
    <img
      id={props.id}
      className='arrow'
      src={props.src}
      alt={props.alt}
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    />
  );
};

export default PageChange;
