import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './Components/Navigation';
import MainPage from './Components/MainPage';

function App() {
  return (
    <div className="wrapper">

      <BrowserRouter>
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
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
        <footer></footer>
      </BrowserRouter>
    </div >
  );
}

export default App;
