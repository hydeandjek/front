import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
//import KakaoMap from './Components/KakaoMap/KakaoMap';
import Login from './Components/User/Login/Login';
import NaverLoginHandler from './Components/User/Login/NaverLoginHandler';
import KakaoLoginHandler from './Components/User/Login/KakaoLoginHandler';
import Header from './Components/Header/Header';
import styles from './App.module.scss';
import Join from './Components/User/Join/Join';
import ChattingModal from './Components/Modal/ChattingModal';
import { AuthContextProvider } from './utils/AuthContext';
import Recipes from './Components/Food/Recipe/Recipes';
import Restaurant from './Components/Food/Restaurant';
import ExpressCenter from './Components/Express/ExpressCenter';
import SharedWarehouse from './Components/Express/SharedWarehouse';
import ConvenienceStore from './Components/Life/ConvenienceStore';
import DrugStore from './Components/Life/DrugStore';
import CoinLaundry from './Components/Life/CoinLaundry';
import DeliveryBox from './Components/Life/DeliveryBox';

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
          </Routes>
          <ChattingModal />
        </div>
      </div>
    </AuthContextProvider>
  );
}

export default App;
