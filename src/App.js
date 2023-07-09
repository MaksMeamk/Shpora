import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './Components/Navigation';
import MainPage from './Components/MainPage';
import Components from './Components/Components';
import State from './Components/State';
import Props from './Components/Props';
import LifeCycle from './Components/LifeCycle';
import Events from './Components/Events';
import Key from './Components/Key';
import Refs from './Components/Refs';
import AsyncRequests from './Components/AsyncRequests';
import VirtualDOM from './Components/VirtualDOM';
import Fragment from './Components/Fragment';
import ReactMemo from './Components/ReactMemo';
import UseEffect from './Components/UseEffect';
import Router from './Components/Router';
import Context from './Components/Context';
import Form from './Components/Form';



function App() {
  return (
    <div className="wrapper">
      <div className='block'>
        <div className='block__container'>
          <div className='block__items'>
            <BrowserRouter>
              <div className='block__item_navigation'>
                <Navigation />
              </div>
              <div className='block__item'>
                <header className="header">
                  <div className='header-title'>
                    Основная теория по библиотеке React
                  </div>
                  <div className='header-logo'>
                    <img src={logo} className="logo__item" alt="logo" />
                  </div>
                </header>
                <main className='main'>
                  <div className='main__content'>
                    <Routes>
                      <Route path='/' element={<MainPage />}></Route>
                      <Route path='/components' element={<Components />}></Route>
                      <Route path='/props' element={<Props />}></Route>
                      <Route path='/state' element={<State />}></Route>
                      <Route path='/lifecycle' element={<LifeCycle />}></Route>
                      <Route path='/events' element={<Events />}></Route>
                      <Route path='/key' element={<Key />}></Route>
                      <Route path='/refs' element={<Refs />}></Route>
                      <Route path='/asynchronous-requests' element={<AsyncRequests />}></Route>
                      <Route path='/virtual-dom' element={<VirtualDOM />}></Route>
                      <Route path='/fragment' element={<Fragment />}></Route>
                      <Route path='/react-memo' element={<ReactMemo />}></Route>
                      <Route path='/useEffect' element={<UseEffect />}></Route>
                      <Route path='/router' element={<Router />}></Route>
                      <Route path='/context' element={<Context />}></Route>
                      <Route path='/form' element={<Form />}></Route>
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
