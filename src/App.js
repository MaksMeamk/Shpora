import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
      </header>
      <main>
        <nav className='menu'>
          <ul className='menu__list'>
            <li className='menu__item'></li>
          </ul>
        </nav>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
