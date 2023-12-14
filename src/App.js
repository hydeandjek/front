import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
//import KakaoMap from './Components/KakaoMap/KakaoMap';
import Login from './Components/User/Login/Login';
import NaverLoginHandler from './Components/User/Login/NaverLoginHandler';
import KakaoLoginHandler from './Components/User/Login/KakaoLoginHandler';
import Header from './Components/Header/Header';
import styles from './App.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Example from './Example';

// import './styles.css';
//import KakaoMap from './Components/KakaoMap/KakaoMap';

import Join from './Components/User/Join/Join';
import { AuthContextProvider } from './utils/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <div className='App'>
        <Header />
        <Example />
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
