import React from 'react'
import '../css/Page.css'

const Components = () => {
    return (
        <div className='theme'>
            <div className='theme__title'> Компоненты </div>
            <div className='theme__text text'>
                <p className='text-item'>Компоненты React — это многократно иcпользуемые фрагменты JavaScript-кода, которые выводят HTML-элементы (благодаря JSX ).</p>
                <p className='text-item'>Компоненты позволяют разбить интерфейс на независимые части, про которые легко думать в отдельности.</p>
                <p className='text-item'>Компоненты бывают функциональные и классовые.</p>
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

        </div >
    )
}
export default Components;

class ClassComponent extends React.Component {
    render() {
        return (
            <h1>Привет, мир!</h1>
        )
    }
}
