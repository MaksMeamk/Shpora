import React from 'react'
import '../css/Page.css'

const Components = () => {
    return (
        <div className='theme'>
            <div className='theme__title'> Компоненты </div>
            <div className='theme__text text'>
                <p className='text-item'>Компоненты React — это многократно иcпользуемые фрагменты JavaScript-кода, которые выводят HTML-элементы (благодаря JSX ).</p>
                <p className='text-item'>Компоненты бывают функциональные и классовые.</p>
                <p className='text-item'>Проще всего объявить React-компонент как функцию:</p>
            </div>
            <div className='theme__code'>
                <pre><code>{
                    `function Welcome() {
    return (
        <h1>Привет, мир!</h1>
    );
}`}</code>
                </pre>
            </div>
        </div>
    )
}
export default Components;
