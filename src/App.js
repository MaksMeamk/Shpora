import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navigation from './Components/Navigation';
import MainPage from './Components/MainPage';
import { HomeOutlined } from '@ant-design/icons'

function App() {
  return (
    <div className="wrapper">

      <BrowserRouter>
        <header className="header">
          <div className='image-home'>
            <Link className='image-home__link' to='/'>
              <HomeOutlined className='image-home__item' />
            </Link>
          </div>
          <div className='main-title'>
            Основная теория по библиотеке React
          </div>
          <div className='logo'>
            <img src={logo} className="logo__item" alt="logo" />
          </div>
        </header>
        <main className='main'>
          <div className='main__navigation'>
            <Navigation />
          </div>
          <div className='main__content'>
            <Routes>
              <Route path='/' element={<MainPage />}></Route>
              <Route path='/components' element=''></Route>
              <Route path='/props' element=''></Route>
              <Route path='/state' element=''></Route>
              <Route path='/lifecycle' element=''></Route>
              <Route path='/events' element=''></Route>
              <Route path='/key' element=''></Route>
              <Route path='/refs' element=''></Route>
              <Route path='/asynchronous-requests' element=''></Route>
              <Route path='/virtual-dom' element=''></Route>
              <Route path='/fragment' element=''></Route>
              <Route path='/react-memo' element=''></Route>
              <Route path='/useEffect' element=''></Route>
              <Route path='/router' element=''></Route>
              <Route path='/context' element=''></Route>
              <Route path='/form' element=''></Route>
            </Routes>
          </div>
        </main>
        <footer className='footer'>
          <div className='footer__item'>Create app in 2023</div>
        </footer>
      </BrowserRouter>
    </div >
  );
}

export default App;
