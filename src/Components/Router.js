import React from "react";

const Router = () => {
  return (
    <div className="theme">
      <div className="theme__title">React Router</div>
      <div className="theme__text text">
        <p className="text__item text__item_padding">
          В React имеется своя система маршрутизации, которая позволяет
          сопоставлять запросы к приложению с определенными компонентами.
          Ключевым звеном в работе маршрутизации является модуль react-router,
          который содержит основной функционал по работе с маршрутизацией.
          Однако если мы собираемся работать в браузере, то нам также надо
          использовать модуль react-router-dom.
        </p>
        <p className="text__item text__item_padding">{`react-router-dom включает в себя все, что есть в react-router, и добавляет несколько специфичных для DOM API компонентов, включая <BrowserRouter> и <Link>.`}</p>
      </div>
      <div className=" theme__code code code">
        <p className="code__title">Установка react-router-dom</p>
        <pre className="code__item">
          <code>{`npm i react-router-dom`}</code>
        </pre>
      </div>
      <div className="theme__text text">
        <p className="text__item text__item_padding">{`Router — это компонент верхнего уровня с отслеживанием состояния, который заставляет работать все остальные компоненты навигации и хуки. В React Router есть BrowserRouter, HashRouter, StaticRouter, NativeRouter и MemoryRouter. Для веб-приложений обычно используется BrowserRouter. Приложение должно иметь один <BrowserRouter>, который обертывает один или несколько <Routes>.`}</p>
        <p className="text__item text__item_padding">{`<Routes> проверяет все свои дочерние элементы <Route>, чтобы найти наилучшее соответствие, и отображает эту часть пользовательского интерфейса.`}</p>
        <p className="text__item text__item_padding">{`<Route> можно определить либо как объект, либо элемент Route. Если это объект, он имеет форму { path, element }. Если это элемент Route, компонент имеет вид <Route path element>. Когда указанный путь path соответствует текущему URL-адресу, то отображается компонент, указанный в качестве элемента element.`}</p>
      </div>
      <div className=" theme__code code code">
        <p className="code__title">Пример:</p>
        <pre className="code__item">
          <code>{`import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageOne, PageTwo } from './Components/Pages';
import  MainPage from './Components/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<MainPage />} />
        <Route path="one" element={<PageOne />} />
        <Route path="two" element={<PageTwo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;`}</code>
        </pre>
      </div>
      <div className="theme__text text">
        <p className="text__item text__item_padding">{`В этом коде <BrowserRouter> и <Routes> используются для определения маршрутизатора.`}</p>
        <p className="text__item text__item_padding">{`В приложении есть три <Route>. Когда URL-адрес соответствует пути one, приложение показывает компонент PageOne. Когда URL-адрес соответствует пути two, приложение показывает компонент PageTwo.`}</p>
        <p className="text__item">{`* - подстановочный путь`}</p>
        <p className="text__item text__item_padding">{`Подстановочный путь позволяет во всех остальных случаях отображать MainPage. `}</p>
        <p className="text__item text__item_padding">{`Порядок указания маршрутов не имеет значения, так как React Router выбирает в первую очередь наиболее точное совпадение.`}</p>
      </div>
      <div className=" theme__code code code">
        <p className="code__title">{`<Link> отображает доступный элемент <a> с реальным href, указывающим на ресурс, на который он ссылается. Клик по ссылке устанавливает URL-адрес и отслеживает историю просмотров.`}</p>
        <pre className="code__item">
          <code>{`import { Link } from 'react-router-dom';

export const MainPage = () => (
  <nav>
    <ul>
      <li>
        <Link to="/one">Page One</Link>
      </li>
      <li>
        <Link to="/two">Page Two</Link>
      </li>
    </ul>
  </nav>
);`}</code>
        </pre>
      </div>
      <div className="theme__text text">
        <p className="text__item text__item_padding">{`Хук useLocation возвращает объект текущего местоположения.`}</p>
      </div>
      <div className=" theme__code code code">
        <p className="code__title">Пример:</p>
        <pre className="code__item">
          <code>{`import React, { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const MainPage = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('Current location is ', location);
  }, [location]);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/one">Page One</Link>
          </li>
          <li>
            <Link to="/two">Page Two</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </>
  );
};`}</code>
        </pre>
      </div>
      <div className="theme__text text">
        <p className="text__item text__item_padding">{`В переменную location мы сохраняем местоположение, которое генерируется хуком useLocation. Внутри хука useEffect мы будем выводить текущее местоположение при каждом изменении параметра location.`}</p>
        <p className="text__item text__item_padding">{`Если URL-адрес http://localhost:3000/one, то консоль регистрирует:`}</p>
        <p className="text__item text__item_padding">{`Current location is {pathname: '/one', search: '', hash: '', state: null, key: 'f2114bru'}`}</p>
      </div>
    </div>
  );
};

export default Router;
