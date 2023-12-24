import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './utils/AuthContext';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Join from './Components/User/Join/Join';
import Login from './Components/User/Login/Login';
import styles from './App.module.scss';
import NaverLoginHandler from './Components/User/Login/NaverLoginHandler';
import KakaoLoginHandler from './Components/User/Login/KakaoLoginHandler';
import './style.module.scss';
import Emergency from './Components/Life/Emergency';
import Recipes from './Components/Food/Recipe/Recipes';
import Restaurant from './Components/Food/Restaurant';
import ExpressCenter from './Components/Express/ExpressCenter';
import SharedWarehouse from './Components/Express/SharedWarehouse';
import ConvenienceStore from './Components/Life/ConvenienceStore';
import DrugStore from './Components/Life/DrugStore';
import CoinLaundry from './Components/Life/CoinLaundry';
import DeliveryBox from './Components/Life/DeliveryBox';
import Parcel from './Components/Life/Parcel';
import { ChatContextProvider } from './utils/ChatContext';
import AdminChatMain from './Components/Chat/AdminChat/AdminChatMain';
import ChatModal from './Components/Chat/UserChatModal/ChatModal';
import HomeHeader from './Components/Home/HomeHeader';

function App() {
  const images = [
    '640bd914-f8d6-48da-88a5-3019f779a1fa.jpg',
    'b1089d49-a597-472b-bcc4-4b1e29074c22.jpg',
  ];

  return (
    <AuthContextProvider>
      <ChatContextProvider>
        <div className='App'>
          <Header />
          <div className={styles['wrap-content']}>
            <Routes>
              {/* <Route
                path='/'
                element={<HomeHeader />}
              /> */}
              <Route
                path='/'
                element={<Home />}
              />

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
                path='/life/Emergency'
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
