import React from 'react'

const Refs = () => {
    return (
        <div className='theme'>
            <div className='theme__title'>Refs</div>
            <div className='theme__text text'>
                <p className='text__item text__item_padding'>Refs (далее просто «ссылки») предоставляет способ доступа к DOM-узлам или React-элементам, созданным в методе render().</p>
                <p className='text__item'>Есть несколько хороших примеров использования ссылок:</p>
                <ol type='a' className='text__item_list list'>
                    <li className='list_item'>Управление фокусом, выделение текста или воспроизведение медиаресурсами.</li>
                    <li className='list_item'>Выполнение анимаций в императивном подходе.</li>
                    <li className='list_item'>Интеграция со сторонними библиотеками, взаимодействующие с DOM.</li>
                </ol>
            </div>
            <div className=' theme__code code'>
                <p className='code__title'>Ссылки создаются с использованием React.createRef() и добавляются к React-элементам с помощью атрибута ref. Ссылки обычно присваиваются свойству экземпляра, когда компонент создаётся таким образом, чтобы на них можно было ссылаться по всему компоненту.</p>
                <pre className='code__item'>
                    <code>{`class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    render() {
        return <div ref={this.myRef} />;
    }
}`}
                    </code>
                </pre>
            </div>
            <div className=' theme__code code'>
                <p className='code__title'>В функциональных компонентах используется хук useRef:</p>
                <pre className='code__item'>
                    <code>{`import { useRef } from 'react';
function MyComponent () {
    const refContainer = useRef(initialValue);
    return (
        <div ref={refContainer} />
    );
}`}
                    </code>
                </pre>
            </div>



            <div className='theme__text text'>
                <p className='text__item text__item_padding'></p>
                <p className='text__item'></p>
            </div>



            <div className='theme__text text'>
                <p className='text__item text__item_padding'></p>
                <p className='text__item'></p>
            </div>
        </div>

    )
}

export default Refs;