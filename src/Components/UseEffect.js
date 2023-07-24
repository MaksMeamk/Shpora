import React from 'react'

const UseEffect = () => {
    return (
        <div className='theme'>
            <div className='theme__title'>UseEffect</div>
            <div className='theme__text text'>
                <p className='text__item'></p>
                <p className='text__item'></p>
                <p className='text__item'></p>
            </div>
            <div className=' theme__code code code'>
                <p className='code__title'>Для использования методов жизненного цикла в функциональных компонентах предназначек хук useEffect.</p>
                <pre className='code__item'>
                    <code>{`import {useEffect} from 'react';`}
                    </code>
                </pre>
            </div>
            <div className='theme__text text'>
                <p className='text__item text__item_padding'>Хук позволяет использовать 3 метода жизненного цикла:
                    <ol type='1' className='text__item_list list'>
                        <li className='list_item'>componentDidMount()</li>
                        <li className='list_item'>componentDidUpdate(prevProps, prevState)</li>
                        <li className='list_item'>componentWillUnmount()</li>
                    </ol></p>
            </div>
            <div className=' theme__code code code'>
                <p className='code__title'>UseEffect принимает в качестве первого параметра функцию, в качестве второго - [ ] (аналог componentDidMount).</p>
                <pre className='code__item'>
                    <code>{`useEffect ( () => { }, [])`}
                    </code>
                </pre>
            </div>
            <div className=' theme__code code code'>
                <p className='code__title'>UseEffect принимает в качестве первого параметра функцию, в качестве второго - массив с зависимостью (или несколькими) (аналог componentDidUpdate).</p>
                <pre className='code__item'>
                    <code>{`useEffect ( () => { }, [name])`}
                    </code>
                </pre>
            </div>
            <div className=' theme__code code code'>
                <p className='code__title'>UseEffect принимает в качестве первого параметра функцию, второго параметра - нет (аналог componentDidMount + componentDidUpdate).</p>
                <pre className='code__item'>
                    <code>{`useEffect ( () => { } )`}
                    </code>
                </pre>
            </div>
            <div className=' theme__code code code'>
                <p className='code__title'>UseEffect принимает в качестве первого параметра функцию, которая возвращает другую функцию (аналог componentWillUnmount).</p>
                <pre className='code__item'>
                    <code>{`useEffect ( () => {
    return () => {};
})`}
                    </code>
                </pre>
            </div>
        </div>

    )
}

export default UseEffect;