import React from 'react'

const LifeCycle = () => {
    return (
        <div className='theme'>
            <div className='theme__title'>Методы жизненного цикла</div>
            <div className=' theme__code code code'>
                <p className='code__title'>1) constructor</p>
                <div className='theme__text text'>
                    <p className='text__item'>Конструкторы — это отличное место для инициализации компонента – создание любых полей (переменные начинающиеся с this.), инициализации состояния компонента путём присваивания объекта this.state, назначение this для методов которые будут переданы как коллбэки.</p>
                    <p className='text__item'> Очень важно вызывать функцию super(props) в случаях, когда наш класс расширяет поведение другого класса, который имеет конструктор.</p>
                    <p className='text__item'></p>
                </div>
                <pre className='code__item'>
                    <code>{`constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
}`}
                    </code>
                </pre>
            </div>

            <div className=' theme__code code code'>
                <p className='code__title'>2) render()</p>
                <div className='theme__text text'>
                    <p className='text__item'>Рендеринг компонента (если shouldComponentUpdate возвращает true)</p>
                </div>
                <pre className='code__item'>
                    <code>{` render () {
    return (
        <div>
            'Hello'
        </div>
    )
}`}
                    </code>
                </pre>
            </div>

            <div className=' theme__code code code'>
                <p className='code__title'>3) componentDidMount()</p>
                <div className='theme__text text'>
                    <p className='text__item'>Вызывается лишь раз во всем жизненном цикле сразу после монтирования компонента (вставки в дерево). </p>
                    <p className='text__item'>Используется для отправки запросов на сервер к удаленным ресурсам, setTimeout, обращение к DOM-элементам.</p>
                </div>
                <pre className='code__item'>
                    <code>{`componentDidMount()`}
                    </code>
                </pre>
            </div>

            <div className=' theme__code code code'>
                <p className='code__title'>4) componentWillUnmount()</p>
                <div className='theme__text text'>
                    <p className='text__item'>Вызывается перед удалением компонента из DOM. </p>
                    <p className='text__item'>Используется для закрытия асинхронных запросов, таймеров.</p>
                </div>
                <pre className='code__item'>
                    <code>{`componentWillUnmount()`}
                    </code>
                </pre>
            </div>

            <div className=' theme__code code code'>
                <p className='code__title'>5) shouldComponentUpdate(nextProps, nextState)</p>
                <div className='theme__text text'>
                    <p className='text__item'>Вызывается каждый раз при обновлении объекта props или state. В качестве параметра передаются новый объект props и state. Эта функция должна возвращать true (надо делать обновление) или false (игнорировать обновление). По умолчанию возвращается true. Но если функция будет возвращать false, то тем самым мы отключим обновление компонента, а последующие функции не будут срабатывать.</p>
                </div>
                <pre className='code__item'>
                    <code>{`shouldComponentUpdate(nextProps, nextState)`}
                    </code>
                </pre>
            </div>

            <div className=' theme__code code code'>
                <p className='code__title'>6) componentDidUpdate(prevProps, prevState)</p>
                <div className='theme__text text'>
                    <p className='text__item'>Вызывается после обновления компонента. В качестве параметров передаются старые значения объектов: props и state.</p>
                </div>
                <pre className='code__item'>
                    <code>{`componentDidUpdate(prevProps, prevState)`}
                    </code>
                </pre>
            </div>
        </div>

    )
}

export default LifeCycle;