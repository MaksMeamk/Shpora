import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navigation from './Components/Navigation';
import MainPage from './Components/MainPage';

import Components from './Components/Components';

function App() {
  return (
    <div className="wrapper">
      <div className='block'>
        <div className='block__container'>
          <div className='block__items'>
            <BrowserRouter>
              <div className='block__item'>
                <Navigation />
              </div>
              <div className='block__item'><header className="header">
                <div className='main-title'>
                  Основная теория по библиотеке React
                </div>
                <div className='logo'>
                  <img src={logo} className="logo__item" alt="logo" />
                </div>
              </header>
                <main className='main'>

                  <div className='main__content'>
                    <Routes>
                      <Route path='/' element={<MainPage />}></Route>
                      <Route path='/components' element={<Components />}></Route>
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
                </footer></div>

            </BrowserRouter>
          </div>
        </div>
      </div>


    </div >
  );
}

export default App;
