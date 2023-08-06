import React from 'react'

const Form = () => {
    return (
        <div className='theme'>
            <div className='theme__title'>Работа с формами</div>

            <div className=' theme__code code'>
                <p className='code__title'>В React мы можем использовать все стандартные элементы форм, которые есть в html, однако здесь эти элементы приобретают дополнительные возможности. Рассмотрим, как работать с формами в React.</p>
                <pre className='code__item'>
                    <code>{`class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ""};
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
              
    onChange(e) {
        let val = e.target.value;
        this.setState({name: val});
    }
              
    handleSubmit(e) {
        e.preventDefault();
        alert("Имя: " + this.state.name);
    }
              
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>
                    <label>Имя:</label><br />
                    <input type="text" value={this.state.name} onChange={this.onChange}/>
                </p>
                <input type="submit" value="Отправить" />
            </form>
        );
    }
}
              
ReactDOM.render(
    <UserForm />,
    document.getElementById("app")
)`}
                    </code>
                </pre>
            </div>
            <div className=' theme__code code'>
                <p className='code__title'>Чтобы контролировать введенные значения, в конструкторе устанавливается объект state:</p>
                <pre className='code__item'>
                    <code>{`this.state = {name: ""};`}
                    </code>
                </pre>
            </div>
            <div className=' theme__code code'>
                <p className='code__title'>При определении поля ввода каждое поле связывается с определенным значением в state:</p>
                <pre className='code__item'>
                    <code>{`<input type="text" value={this.state.name} onChange={this.onChange} />`}
                    </code>
                </pre>
            </div>
            <div className='theme__text text'>
                <p className='text__item text__item_padding'>Так, источником значения для поля ввода имени является объект this.state.name.</p>
                <p className='text__item text__item_padding'>Для отслеживания изменений в поле ввода нам надо определить обработчик для события change с помощью атрибута onChange. Этот обработчик будет срабатывать при каждом нажатии клавиши клавиатуры. Если мы не определим для поля подобный обработчик, то это поле ввода будет доступно только для чтения.</p>
            </div>
            <div className=' theme__code code'>
                <p className='code__title'>Суть каждого обработчика заключается в изменении значений в this.state:</p>
                <pre className='code__item'>
                    <code>{` onChange(e) {
    let val = e.target.value;
    this.setState({name: val});
}`}
                    </code>
                </pre>
            </div>
            <div className='theme__text text'>
                <p className='text__item'>С помощью e.target.value получаем введенное значение. После обновления новое значение this.state.name отобразится в поле ввода.</p>
            </div>
        </div>

    )
}

export default Form;