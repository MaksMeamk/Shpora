import React from 'react'

const State = () => {
    return (
        <div className='theme'>
            <div className='theme__title'>State</div>
            <div className='theme__text text'>

                <p className='text__item'>State (состояние) в React – это объект простого JS, позволяющий отслеживать данные компонента. Состояние компонента может меняться. Смена состояния компонента зависит от функциональности приложения. Изменения могут основываться на ответе от пользователя, новых сообщениях с сервера, ответа сети и т.д.</p>
                <p className='text__item'>Состояние компонента должно быть приватным для компонента и контролироваться им. Изменения состояния компонента необходимо делать внутри компонента – инициализация и обновление состояния компонента.</p>
            </div>
            <div className=' theme__code code code'>
                <p className='code__title'>Пример использования state в классовой компоненте:</p>
                <pre className='code__item'>
                    <code>{`class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { username: 'Memak' }
    }
    render() {
        return (
            <div> { this.state.username } </div>
        )
    }
}`}
                    </code>
                </pre>
            </div>
            <div className='theme__text text'>
                <p className='text__item'>Единственный допустимый способ обновления состояния компонента – через setState().</p>
                <p className='text__item'><span className='text__item_false'>this.state.username='Memak'</span> - так нельзя менять состояние!!!</p>
            </div>
            <div className=' theme__code code code'>
                <p className='code__title'>Если вы не зависите от старого состояния, передайте методу this.setState объект с новыми значениями:</p>
                <pre className='code__item'>
                    <code>{`this.setState({username:'Memak'});`}
                    </code>
                </pre>
            </div>
            <div className=' theme__code code code'>
                <p className='code__title'>Если вы хотите изменить состояние в зависимости от предыдущих значений, передайте функцию методу this.setState:</p>
                <pre className='code__item'>
                    <code>{`this.setState(() => ({ username: 'Memak' }))`}
                    </code>
                </pre>
            </div>
            <div className='theme__text text'>
                <p className='text__item'>В функциональных компонентах state создается с помощью хука useState()  </p>
            </div>
            <div className=' theme__code code code'>
                <p className='code__title'>Чтобы воспользоваться им, необходимо импортировать useState из 'react':</p>
                <pre className='code__item'>
                    <code>{`import {useState} from 'react';`}
                    </code>
                </pre>
            </div>
            <div className='theme__text text'>
                <p className='text__item_title'>Хук useState()</p>
                <p className=''>Хук useState() - применяется для задания состояния в функциональных компонентах.</p>
                <p className='text__item'>В качестве параметра принимает первоначальное значение для переменной, а возвращает массив, содержащий переменную и функцию, которая изменяет эту переменную.
                </p>
            </div>
            <div className=' theme__code code code'>
                <p className='code__title'>При объявлении state используют деструктурирующее присваивание:</p>
                <pre className='code__item'>
                    <code>{`const [name, setName] = useState('Memak');`}
                    </code>
                </pre>
            </div>
        </div>

    )
}

export default State;