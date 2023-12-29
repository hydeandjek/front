import { Route, Routes, useLocation } from 'react-router-dom';
import { AuthContextProvider } from './utils/AuthContext';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Join from './Components/User/Join/Join';
import Login from './Components/User/Login/Login';
import styles from './App.module.scss';
import NaverLoginHandler from './Components/User/Login/NaverLoginHandler';
import KakaoLoginHandler from './Components/User/Login/KakaoLoginHandler';
import './style.module.scss';
import Parcel from './Components/Life/Parcel';
import Recipes from './Components/Food/Recipe/Recipes';
import Restaurant from './Components/Food/Restaurant';
import ExpressCenter from './Components/Express/ExpressCenter';
import SharedWarehouse from './Components/Express/SharedWarehouse';
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

function App() {
  const images = [
    '640bd914-f8d6-48da-88a5-3019f779a1fa.jpg',
    'b1089d49-a597-472b-bcc4-4b1e29074c22.jpg',
  ];

  const [showHeader, setShowHeader] = useState(true);

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/') {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
  }, [location]);

  return (
    <AuthContextProvider>
      <ChatContextProvider>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
        </Routes>
        {showHeader && <Header />}
        <div className='App'>
          <div className={classNames({ [styles['wrap-content']]: showHeader })}>
            <Routes>
              <Route
                path='/life/Parcel'
                element={<Parcel />}
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
                path='/life/emergency'
                element={<Emergency />}
              />
              <Route
                path='/AdminChat'
                element={<AdminChatMain />}
              />
            </Routes>
          </div>
        </div>
        <ChatModal />
      </ChatContextProvider>
    </AuthContextProvider>
  );
}

export default App;
