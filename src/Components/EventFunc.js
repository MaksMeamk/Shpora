import React, { useState } from "react";

const EventFunc = () => {
    const [is, setIs] = useState(true)
    let handleClick = () => {
        setIs((is) => !is)
    }
    return (
        <>
            <p>Поле ввода input передаёт в консоль каждое изменение</p>
            <input className="theme__example_input" onChange={(event) => console.log(event.target.value)} />
            <p>Кнопка меняет надпись по нажатию</p>
            <button className="theme__example_button" onClick={handleClick}>{is ? 'Включено' : 'Выключено'}</button>
        </>

    )
}

export default EventFunc;