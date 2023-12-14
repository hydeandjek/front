import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import styles from './App.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Example from './Example';

// import './styles.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Example />
      <index />
      <div className={styles['wrap-content']}>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
