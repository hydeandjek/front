import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './utils/AuthContext';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Join from './Components/User/Join/Join';
import ChattingModal from './Components/Modal/ChattingModal';
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
import Parcel from './Components/Life/Parcel';

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
              path='/Emergency'
              element={<Emergency />}
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
              path='/life/emergency'
              element={<Emergency />}
            />
          </Routes>
          <ChattingModal />
        </div>
      </div>
    </AuthContextProvider>
  );
}

export default App;
