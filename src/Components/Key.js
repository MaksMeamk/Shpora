import React from 'react'

const Key = () => {
    return (
        <div className='theme'>
            <div className='theme__title'>Key (Ключи)</div>
            <div className='theme__text text'>
                <p className='text__item'>Ключи помогают React определять, какие элементы были изменены, добавлены или удалены.</p>
            </div>
            <div className=' theme__code code'>
                <p className='code__title'>Их необходимо указывать, чтобы React мог сопоставлять элементы массива с течением времени:</p>
                <pre className='code__item'>
                    <code>{`const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
    <li key={number.toString()}> {number} </li>
);`}
                    </code>
                </pre>
            </div>
            <div className='theme__text text'>
                <p className='text__item'>Лучший способ выбрать ключ — это использовать строку, которая будет явно отличать элемент списка от его соседей.</p>
            </div>
            <div className=' theme__code code'>
                <p className='code__title'>Чаще всего вы будете использовать ID из ваших данных как ключи:</p>
                <pre className='code__item'>
                    <code>{`const todoItems = todos.map((todo) =>
    <li key={todo.id}> {todo.text} </li>
);`}
                    </code>
                </pre>
            </div>
            <div className='theme__text text'>
                <p className='text__item text__item_padding'>Ключи нужно определять непосредственно внутри массивов.</p>
                <p className='text__item text__item_padding'>Если не указать ключи, в консоли увидим сообщение: Warning: Each child in an array or iterator should have a unique “key” prop.</p>
                <p className='text__item text__item_padding'>Ключи оптимизируют работу с элементами массивов, уменьшают количество ненужных удалений и созданий элементов.</p>
                <p className='text__item text__item_padding'>Без key механизм reconciliation сверяет компоненты попарно между текущим и новым VDOM. Из-за этого может происходить большое количество лишних перерисовок интерфейса, что замедляет работу приложения.</p>
                <p className='text__item text__item_padding'>Добавляя key, вы помогаете механизму reconciliation тем, что с key он сверяет не попарно, а ищет компоненты с тем же key (тег / имя компонента при этом учитывается) — это уменьшает количество перерисовок интерфейса. Обновлены/добавлены будут только те элементы, которые были изменены/не встречались в предыдущем дереве.</p>
                <p className='text__item text__item_padding'>Следите, чтобы не появлялись дублирующие key, при переключении отображения у новых данных не совпадали ключи. Это может привести к нежелательным сайд-эффектам, таким как анимации, или некорректной логике поведения элемента.</p>
            </div>
        </div>

    )
}

export default Key;