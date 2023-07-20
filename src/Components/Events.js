import React from 'react'
import EventClass from './EventClass';
import EventFunc from './EventFunc';

const Events = () => {
    return (
        <div className='theme'>
            <div className='theme__title'>События</div>
            <div className='theme__text text'>
                <p className='text__item'>События в React именуются в стиле camelCase вместо нижнего регистра.
                    С JSX вы передаёте функцию как обработчик события вместо строки.
                    Популярные обработчики событий: onClick, onChange
                </p>
                <p className='text__item'>В React нельзя предотвратить обработчик события по умолчанию, вернув false. Нужно явно вызвать preventDefault.</p>
                <p className='text__item'>Существует множество поддерживаемых событий, вот общий список:
                    <ol type='1' className='text__item_list list'>
                        <li className='list_item'>Буфер обмена: onCopy, onCut, onPaste</li>
                        <li className='list_item'>Составление/ввод данных: onCompositionEnd, onCompositionStart, onCompositionUpdate</li>
                        <li className='list_item'>Клавиатура: onKeyDown, onKeyPress, onKeyUp</li>
                        <li className='list_item'>Фокусировка: onFocus, onBlur</li>
                        <li className='list_item'>Форма: onChange, onInput, onSubmit</li>
                        <li className='list_item'>Мышь: onClick, onContextMenu, onDoubleClick, onDrag, onDragEnd, onDragEnter, onDragExit, onDragLeave, onDragOver, onDragStart, onDrop, onMouseDown, onMouseEnter, onMouseLeave, onMouseMove, onMouseOut, onMouseOver, onMouseUp</li>
                        <li className='list_item'>Выделение: onSelect</li>
                        <li className='list_item'>Касание: onTouchCancel, onTouchEnd, onTouchMove, onTouchStart</li>
                        <li className='list_item'>UI: onScroll</li>
                        <li className='list_item'>Колёсико мышки: onWheel</li>
                        <li className='list_item'>Медиа: onAbort, onCanPlay, onCanPlayThrough, onDurationChange, onEmptied, onEncrypted, onEnded, onError, onLoadedData, onLoadedMetadata, onLoadStart, onPause, onPlay, onPlaying, onProgress, onRateChange, onSeeked, onSeeking, onStalled, onSuspend, onTimeUpdate, onVolumeChange, onWaiting</li>
                        <li className='list_item'>Изображение: onLoad, onError</li>
                        <li className='list_item'>Анимация: onAnimationStart, onAnimationEnd, onAnimationIteration</li>
                        <li className='list_item'>Переход: onTransitionEnd</li>
                    </ol>
                </p>
            </div>


            <div className=' theme__code code'>
                <p className='code__title'>Код в функциональной компоненте:</p>
                <pre className='code__item'>
                    <code>{`import React, { useState } from "react";
const EventFunc = () => {
    const [is, setIs] = useState(true)
    let handleClick = () => {
        setIs((is) => !is)
    }
    return (
        <>
            <input onChange={(event) => console.log(event.target.value)} />
            <button onClick={handleClick}>{is ? 'Включено' : 'Выключено'}</button>
        </>
    )
}
export default EventFunc;`}
                    </code>
                </pre>
            </div>
            <div className=' theme__code code'>
                <p className='code__title'>Код в классовой компоненте:</p>
                <pre className='code__item'>
                    <code>{`import React from "react";
class EventClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { is: true }
    }
    handleChange = (event) => {
        console.log(event.target.value)
    }
    handeleClick = () => { this.setState((state) => ({ is: !state.is })) }
    render() {
        return (
            <>
                <button onClick={this.handeleClick}>{this.state.is ? 'Включено' : 'Выключено'}</button>
                <input onChange={this.handleChange} />
            </>
        )
    }
}
export default EventClass;`}
                    </code>
                </pre>
            </div>
            <div className='theme__example'>
                <p className='theme__example_title'>Результат кода будет одинаков для классовой и для функциональной компонент.</p>
                <EventFunc />
            </div>
        </div>

    )
}

export default Events;