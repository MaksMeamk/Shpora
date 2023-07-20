import React from "react";

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
                <p>Поле ввода input передаёт в консоль каждое изменение</p>
                <input className="theme__example_input" onChange={this.handleChange} />
                <p>Кнопка меняет надпись по нажатию</p>
                <button className="theme__example_button" onClick={this.handeleClick}>{this.state.is ? 'Включено' : 'Выключено'}</button>
            </>
        )
    }
}
export default EventClass;