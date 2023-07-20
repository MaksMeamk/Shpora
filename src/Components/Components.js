import React from 'react'
import '../css/Page.css'

const Components = () => {
    return (
        <div className='theme'>
            <div className='theme__title'> Компоненты </div>
            <div className='theme__text text'>
                <p className='text__item'>Компоненты React — это многократно иcпользуемые фрагменты JavaScript-кода, которые выводят HTML-элементы (благодаря JSX ).</p>
                <p className='text__item'>Компоненты позволяют разбить интерфейс на независимые части, про которые легко думать в отдельности.</p>
                <p className='text__item'>Компоненты бывают функциональные и классовые.</p>
            </div>
            <div className='theme__code code'>
                <p className='code__title'>Проще всего объявить React-компонент как функцию:</p>
                <pre className='code__item'><code>{
                    `function FuncComponent() {
    return (
        <h1>Привет, мир!</h1>
    );
}`}</code>
                </pre>
            </div>
            <div className='theme__code code'>
                <p className='code__title'>Ещё компоненты можно определять как классы:</p>
                <pre className='code__item'><code>{`class ClassComponent extends React.Component {
    render() {
        return (
            <h1>Привет, мир!</h1>
        )
    }
}`}</code>
                </pre>
            </div>
            <div className='theme__text text'>
                <p className='text__item'>Компонента должна себя вести как чистая функция.</p>
                <p className='text__item'>«Чистой» называется функция, которая:
                    <ol type='1' className='text__item_list list'>
                        <li className='list_item'>иммутабельна</li>
                        <li className='list_item'>что либо возвращает</li>
                        <li className='list_item'>без побочных эффектов</li>
                        <li className='list_item'>идемпотентна(детерминированность) - свойство объекта или операции при повторном применении операции к объекту давать тот же результат, что и при первом.</li>
                    </ol>
                </p>
            </div>

        </div >
    )
}
export default Components;


