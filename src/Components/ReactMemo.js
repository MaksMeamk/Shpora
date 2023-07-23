import React from 'react'

const ReactMemo = () => {
    return (
        <div className='theme'>
            <div className='theme__title'>React.memo</div>
            <div className='theme__text text'>
                <p className='text__item'>React.memo — это компонент высшего порядка.</p>
                <p className='text__item'>Если ваш компонент всегда рендерит одно и то же при неменяющихся пропсах, вы можете обернуть его в вызов React.memo для повышения производительности в некоторых случаях, мемоизируя тем самым результат. Это значит, что React будет использовать результат последнего рендера, избегая повторного рендеринга.</p>
                <p className='text__item'>React.memo затрагивает только изменения пропсов. Если функциональный компонент обёрнут в React.memo и использует useState, useReducer или useContext, он будет повторно рендериться при изменении состояния или контекста.</p>
            </div>

            <div className='theme__text text'>
                <p className='text__item'></p>
                <p className='text__item'></p>
                <p className='text__item'></p>
            </div>
            <div className='theme__text text'>
                <p className='text__item'></p>
                <p className='text__item'></p>
                <p className='text__item'></p>
            </div>
            <div className=' theme__code code code'>
                <p className='code__title'>По умолчанию он поверхностно сравнивает вложенные объекты в объекте props. Если вы хотите контролировать сравнение, вы можете передать свою функцию сравнения в качестве второго аргумента.</p>
                <pre className='code__item'>
                    <code>{`function MyComponent(props) {
                /* рендер с использованием пропсов */
}

function areEqual(prevProps, nextProps) {
    /*возвращает true, если nextProps рендерит тот же результат что и prevProps, 
    иначе возвращает false */
}

export default React.memo(MyComponent, areEqual);`}
                    </code>
                </pre>
            </div>
        </div>

    )
}

export default ReactMemo;