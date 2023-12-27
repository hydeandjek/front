import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
//import KakaoMap from './Components/KakaoMap/KakaoMap';
import Login from './Components/User/Login/Login';
import NaverLoginHandler from './Components/User/Login/NaverLoginHandler';
import KakaoLoginHandler from './Components/User/Login/KakaoLoginHandler';
import Header from './Components/Header/Header';
import styles from './App.module.scss';
import Join from './Components/User/Join/Join';
import { AuthContextProvider } from './utils/AuthContext';
import BoardQuestion from './Components/BoardQuestion/BoardQuestion';
import BoardDetaile from './Components/BoardQuestion/BoardDetaile';

import Parcel from './Components/Life/Parcel';
import Recipes from './Components/Food/Recipe/Recipes';
import Mealkit from './Components/Food/Mealkit';
import Restaurant from './Components/Food/Restaurant';
import ExpressCenter from './Components/Express/ExpressCenter';
import SharedWarehouse from './Components/Express/SharedWarehouse';
// import Product from './Components/Express/Product';
// import Appliance from './Components/Express/Appliance';
import ConvenienceStore from './Components/Life/ConvenienceStore';
import DrugStore from './Components/Life/DrugStore';
import CoinLaundry from './Components/Life/CoinLaundry';
import DeliveryBox from './Components/Life/DeliveryBox';
import { ChatContextProvider } from './utils/ChatContext';
import AdminChatMain from './Components/Chat/AdminChat/AdminChatMain';
import ChatModal from './Components/Chat/UserChatModal/ChatModal';
import Emergency from './Components/Life/Emergency';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import Policy1 from './Components/Policy/Policy1';
import RecipeDetail from './Components/Food/Recipe/RecipeDetail';

function App() {
  // return (
  //   <div className='App'>
  //     <KakaoMap
  //       searchWord={'약국'}
  //       address={'서울특별시 마포구 백범로 23'}
  //     />
  //   </div>
  // );
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
              path='/food/recipes'
              element={<Recipes />}
            />
            <Route
              path='/food/restaurant'
              element={<Restaurant />}
            />
            <Route
              path='/express/expressCenter'
              element={<ExpressCenter />}
            />
            <Route
              path='/express/sharedWarehouse'
              element={<SharedWarehouse />}
            />
            <Route
              path='/life/convenienceStore'
              element={<ConvenienceStore />}
            />
            <Route
              path='/life/drugStore'
              element={<DrugStore />}
            />
            <Route
              path='/life/coinLaundry'
              element={<CoinLaundry />}
            />
            <Route
              path='/life/deliveryBox'
              element={<DeliveryBox />}
            />
            <Route
              path='/emergency'
              element={<Emergency />}
            />
            <Route
              path='/board/question'
              element={<BoardQuestion />}
            />
            <Route
              path='/board/detail'
              element={<BoardDetaile />}
            />
          </Routes>
          {/* <ChattingModal /> */}
        </div>
      </div>
    </AuthContextProvider>
  );
}

export default App;
