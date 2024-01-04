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
import Mealkit from './Components/Food/Mealkit';
import Restaurant from './Components/Food/Restaurant';
import ExpressCenter from './Components/Express/ExpressCenter';
import SharedWarehouse from './Components/Express/SharedWarehouse';
import Product from './Components/Express/Product';
import Appliance from './Components/Express/Appliance';
import Furniture from './Components/Express/Furniture';
import ConvenienceStore from './Components/Life/ConvenienceStore';
import DrugStore from './Components/Life/DrugStore';
import CoinLaundry from './Components/Life/CoinLaundry';

import { ChatContextProvider } from './utils/ChatContext';
import AdminChatMain from './Components/Chat/AdminChat/AdminChatMain';
import ChatModal from './Components/Chat/UserChatModal/ChatModal';
import Emergency from './Components/Life/Emergency';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import Policy1 from './Components/Policy/Policy1';
import RecipeDetail from './Components/Food/Recipe/RecipeDetail';
import BoardQuestion from './Components/BoardQuestion/BoardQuestion';
import BoardDetail from './Components/BoardQuestion/BoardDetail';
import Policy2 from './Components/Policy/Policy2';
import Cctv from './Components/Policy/Cctv';
import CategoryBoard from './Components/BoardCategory/CategoryBoard';
import CateBoardDetail from './Components/BoardCategory/CateBoardDetail';
import { ErrorBoundary } from 'react-error-boundary';
import DonaList from './Components/DonationBoard/Donation/DonaList';
import DonaRegist from './Components/DonationBoard/Donation/DonaRegist';
import DonaDetail from './Components/DonationBoard/Donation/DonaDetail';
import ApproList from './Components/DonationBoard/Approval/ApproList';
import ApproDetail from './Components/DonationBoard/Approval/ApproDetail';
import LikeList from './Components/User/MyPage/LikeList';
import MyPost from './Components/User/MyPage/MyPost';
import Modify from './Components/User/MyPage/Modify';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyDonationBoard from './Components/User/MyPage/MyDonationBorad';
import MyApproveBoard from './Components/DonationBoard/MyPage/MyApproveBoard';
import MyRejectBoard from './Components/DonationBoard/MyPage/MyRejectBoard';
import MyHoldBoard from './Components/DonationBoard/MyPage/MyHoldBoard';
import RejectList from './Components/DonationBoard/Approval/RejectList';
import RejectDetail from './Components/DonationBoard/Approval/RejectDetail';

function App() {
  const [loading, setLoading] = useState(true);

  const errorHandler = (error, info) => {
    console.log('에러 발생:', error);
    console.log('에러 정보:', info);
    // 에러 처리 로직 추가 가능
  };

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
        <ErrorBoundary
          FallbackComponent={Error}
          onError={errorHandler}
        >
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
          </Routes>
          {showHeader && <Header />}
          <div className='App'>
            <div
              className={classNames({ [styles['wrap-content']]: showHeader })}
            >
              <Routes>
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
                  path='/food/recipes/'
                  element={<Recipes />}
                />
                <Route
                  path='/food/mealkit'
                  element={<Mealkit />}
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
                  path='/express/product'
                  element={<Product />}
                />
                <Route
                  path='/express/appliance'
                  element={<Appliance />}
                />
                <Route
                  path='/express/furniture'
                  element={<Furniture />}
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
                {/* <Route
                  path='/life/deliveryBox'
                  element={<DeliveryBox />}
                /> */}
                <Route
                  path='/life/emergency'
                  element={<Emergency />}
                />
                <Route
                  path='/AdminChat'
                  element={<AdminChatMain />}
                />
                <Route
                  path='/policy/seoul'
                  element={<Policy1 />}
                />
                <Route
                  path='/policy/place'
                  element={<Policy2 />}
                />
                <Route
                  path='/policy/cctv'
                  element={<Cctv />}
                />
                <Route
                  path='/food/recipes/detail'
                  element={<RecipeDetail />}
                />
                <Route
                  path='/board/question'
                  element={<BoardQuestion />}
                />
                <Route
                  path='/board/question/detail'
                  element={<BoardDetail />}
                />
                {/* <Route
                  path='/*'
                  element={<NotFound />}
                /> */}
                <Route
                  path='/board/onelife'
                  element={<CategoryBoard />}
                />
                <Route
                  path='/board/onelife/detail'
                  element={<CateBoardDetail />}
                />
                <Route
                  path='/board/donation'
                  element={<DonaList />}
                />
                <Route
                  path='/board/donation/regist'
                  element={<DonaRegist />}
                />
                <Route
                  path='/board/donation/:shareId'
                  element={<DonaDetail />}
                />
                <Route
                  path='/board/approval'
                  element={<ApproList />}
                />
                <Route
                  path='/board/reject'
                  element={<RejectList />}
                />
                <Route
                  path='/board/donation/approval/:shareId'
                  element={<ApproDetail />}
                />
                <Route
                  path='/board/donation/approval/reject/:shareId'
                  element={<RejectDetail />}
                />
                <Route
                  path='/mypage/likelist'
                  element={<LikeList />}
                />
                <Route
                  path='/mypage/mypost'
                  element={<MyPost />}
                />
                <Route
                  path='/mypage/modify'
                  element={<Modify />}
                />
                <Route
                  path='/board/donation/mypage'
                  element={<MyDonationBoard />}
                />
                <Route
                  path='/board/donation/mypage/approve'
                  element={<MyApproveBoard />}
                />
                <Route
                  path='/board/donation/mypage/reject'
                  element={<MyRejectBoard />}
                />
                <Route
                  path='/board/donation/mypage/hold'
                  element={<MyHoldBoard />}
                />
              </Routes>
            </div>
          </div>
        </ErrorBoundary>
        <ChatModal />
      </ChatContextProvider>
    </AuthContextProvider>
  );
}

export default App;
