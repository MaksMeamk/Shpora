import React from 'react'

const AsyncRequests = () => {
    return (
        <div className='theme'>
            <div className='theme__title'>Асинхронные запросы</div>
            <div className='theme__text text'>
                <p className='text__item text__item_padding'>Большинство веб-приложений работают с данными, которые, как правило, хранятся в базе данных (БД). Что получить эти данные приложения обычно используют AJAX, то есть асинхронные запросы к серверу. Сервер, получив такой запрос, обращается к БД, а затем возвращает данные обратно приложению.</p>
                <p className='text__item text__item_padding'>Рассмотрим базовые стадии взаимодействия клиент-сервер.</p>
                <p className='text__item text__item_padding'>Итак, у нас есть клиент. Обычно это программа, которая запрашивает данные по определённом протоколу у сервера. Как правило, мы используем протокол HTTPS - это HTTP с шифрованием. Сначала клиент создаёт запрос определённого типа: GET, POST, PUT, DELETE и т.д. Также он может добавить в запрос какие-то данные, например данные формы, если запрос типа POST или PUT. Кроме этого клиент может указать заголовки и параметры запроса. Когда запрос создан, клиент посылает его серверу.В ваших приложениях вы всегда будете иметь дело с HTTP запросами.</p>
                <p className='text__item text__item_padding'>После того как запрос попал в сеть, он идёт к серверу. Сервер - это тоже программа, только на другой машине, которая может быть расположена в любой точке земного шара. Как только сервер получил запрос, он начинает его обрабатывать. Сервер получает у запроса всю информацию, необходимую для выборки запрошенных данных. Эта информация включает в себя:
                    <ol type='1' className='text__item_list list'>
                        <li className='list_item'>URL - он же путь к запрашиваемому ресурсу.</li>
                        <li className='list_item'>Заголовки - строки в HTTP-сообщении, содержащие разделённую двоеточием пару параметр-значение. Например X-AuthToken: vuaw672387heHh33298Sei92372wi0rsdg836194 - заголовок, передающий в запросе токен текущего залогиненного пользователя, он же - токен сессии. Заголовки не видны в адресной строке - они не присутствуют в URL.</li>
                        <li className='list_item'>Параметры запроса - пары вида ключ=значение, которые могут быть добавлены в URL после знака ?. Если параметров больше одного, они разделяются между собой символом &.</li>
                    </ol></p>
                <p className='text__item text__item_padding'>Стоит упомянуть тот факт, что послав последовательно N запросов, нет гарантии, что ответы придут в таком же порядке. Дело в том, что сервер на обработку этих запросов может тратить разное количество времени.</p>
                <p className='text__item text__item_padding'>Чтобы выполнить AJAX-запрос к серверу, можете использовать встроенный в браузер метод window.fetch или любую AJAX-библиотеку, например Axios или jQuery AJAX.</p>
                <p className='text__item text__item_padding'>Лучшее место для асинхронного запроса в методе componentDidMount.</p>
            </div>
            <div className=' theme__code code code'>
                <p className='code__title'>Компонент ниже показывает, как в componentDidMount задать внутреннее состояние из результата AJAX-запроса. Допустим, наш API возвращает следующий JSON-объект:</p>
                <pre className='code__item'>
                    <code>{`{
    "items": [
        { "id": 1, "name": "Яблоки",  "price": "$2" },
        { "id": 2, "name": "Персики", "price": "$5" }
    ] 
}`}
                    </code>
                </pre>
            </div>
            <div className=' theme__code code'>
                <p className='code__title'></p>
                <pre className='code__item'>
                    <code>{`class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
              
    componentDidMount() {
        fetch("https://api.example.com/items")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(), чтобы не перехватывать 
        //исключения из ошибок в самих компонентах.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
              
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Загрузка...</div>;
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            {item.name} {item.price}
                        </li>
                    ))}
                </ul>
            );
        }
    }
}`}
                    </code>
                </pre>
            </div>
            <div className=' theme__code code'>
                <p className='code__title'>Вот эквивалент с хуками:</p>
                <pre className='code__item'>
                    <code>{`function MyComponent() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()
  useEffect(() => {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} {item.price}
          </li>
        ))}
      </ul>
    );
  }
}`}
                    </code>
                </pre>
            </div>
        </div>

    )
}

export default AsyncRequests;