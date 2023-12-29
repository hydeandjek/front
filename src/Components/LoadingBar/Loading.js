// Loading.js
import React from 'react';
import { Background, LoadingText } from './styles';
// import { Spinner } from 'reactstrap';
// import Spinner from '../../assets/gif/Spinner1.gif';
import Spinner from '../../assets/gif/BeanEater.gif';

const Loading = () => {
  return (
    <Background>
      <LoadingText style={{ fontFamily: 'nanumSquareNeo' }}>
        로딩중입니다.
      </LoadingText>
      <img
        src={Spinner}
        alt='로딩중'
        width='5%'
      />
    </Background>
  );
};

export default Loading;
