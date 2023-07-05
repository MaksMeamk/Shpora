import React from 'react'
import '../css/Page.css'


const Props = () => {
    return (
        <div className='theme'>
            <div className='theme__title'>Props</div>
            <div className='theme__text text'>
                <p className='text__item'>Главное, что нужно запомнить при работе с пропсами: их нельзя изменять!!!</p>
                <p className='text__item'>Props представляют собой объект, содержащие свойства.</p>
                <p className='text__item'>Пропсы —  механизм передачи данных в компоненты.</p>
            </div>
            <div className='theme__code code' >
                <p className='code__title'>Обратиться в функциональной компоненте можно через props.имя-свойства:</p>
                <pre className='code__item'>
                    <code>{
                        `function FuncComponent(props) {
    return (
        <h1>Привет, {props.name}!</h1>
    );
}`}
                    </code>
                </pre>
            </div>
            <div className='theme__code code' >
                <p className='code__title'>Обратиться в классовой компоненте можно через this.props.имя-свойства:</p>
                <pre className='code__item'>
                    <code>{
                        `class ClassComponent extends React.Component {
    render() {
        return (
            <h1>Привет, this.props.name!</h1>
        )
    }
}`}
                    </code>
                </pre>
            </div>

            <div className=' theme__code code code'>
                <p className='code__title'>Раньше мы сталкивались только с элементами React, представляющие DOM-теги, однако элементы также могут быть пользовательскими компонентами:</p>
                <pre className='code__item'>
                    <code>{`const element = <FuncComponent name="Memak" />;`}
                    </code>
                </pre>
            </div>
            <div className='theme__text text'>
                <p className='text__item'>Когда React видит элемент, представляющий пользовательский компонент, он передаёт JSX-атрибуты этому компоненту в виде единственного объекта. Мы называем этот объект «props».</p>
            </div>
            <div className=' theme__code code code'>
                <p className='code__title'>Например, этот код отображает «Привет, Memak» на странице:</p>
                <pre className='code__item'>
                    <code>{`function FuncComponent(props) {
  return <h1>Привет, {props.name}</h1>;
}

const element = <FuncComponent name="Memak" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);`}
                    </code>
                </pre>
            </div>
            <div className='theme__text text'>
                <p className='text__item'>
                    Давайте посмотрим, что происходит в этом примере:
                </p>
                <p className='text__item'>{`1. Мы вызываем ReactDOM.render() с элементом <FuncComponent name="Memak" />`}
                </p>
                <p className='text__item'>{`2. React вызывает компонент FuncComponent с объектом {name: 'Memak'} как props.`}</p>
                <p className='text__item'>{`3. Наш компонент FuncComponent возвращает элемент <h1>Hello, Memak</h1> в качестве результата.`}</p>
                <p className='text__item'>{`4. React DOM эффективно обновляет DOM, чтобы соответствовать <h1>Hello, Sara</h1>.`}</p>
            </div>




        </div>

    )
}
export default Props;