import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
//import KakaoMap from './Components/KakaoMap/KakaoMap';
import Login from './Components/User/Login';
import NaverLoginHandler from './Components/User/NaverLoginHandler';
import KakaoLoginHandler from './Components/User/KakaoLoginHandler';
import Header from './Components/Header/Header';
import styles from './App.module.scss';
import Recipes from './Components/Recipe/Recipes';
import Kakao from './Components/Kakao/Kakao';

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
    <div className='App'>
      <Header />
      <div className={styles['wrap-content']}>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/recipes'
            element={<Recipes />}
          />
          <Route
            path='/login'
            element={<Login />}
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
        </Routes>
      </div>
    </div>
  );
}

export default App;
