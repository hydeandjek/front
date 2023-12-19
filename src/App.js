import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './utils/AuthContext';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Recipes from './Components/Recipe/Recipes';
import Kakao from './Components/Kakao/Kakao';
import Join from './Components/User/Join/Join';
import Login from './Components/User/Login/Login';
import styles from './App.module.scss';
import NaverLoginHandler from './Components/User/Login/NaverLoginHandler';
import KakaoLoginHandler from './Components/User/Login/KakaoLoginHandler';
import './style.module.scss';
import styled from 'styled-components';
import { Index } from './assets/constants';
import Emergency from './Components/Emergency/Emergency';
import axios from 'axios';
import { useState } from 'react';
import Life from './Components/Life/Life';

function App() {
  return (
    <AuthContextProvider>
      <div className='App'>
        <Header />
        <div className={styles['wrap-content']}>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/user/login'
              element={<Login />}
            />
            <Route
              path='/user/join'
              element={<Join />}
            />
            <Route
              path='/oauth/redirected/kakao'
              element={<KakaoLoginHandler />}
            />
            <Route
              path='/oauth/redirected/naver'
              element={<NaverLoginHandler />}
            />
            <Route
              path='/kakao'
              element={<Kakao />}
            />
            <Route
              path='/Life'
              element={<Life />}
            />
            <Route
              path='/recipes'
              element={<Recipes />}
            />
          </Routes>
        </div>
      </div>
    </AuthContextProvider>
  );
}

export default App;
