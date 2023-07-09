import React from 'react'
import '../css/Counter.css'

class CounterClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }
    minus = () => {
        this.setState((state) => ({ count: state.count - 1 }))
    }
    plus = () => {
        this.setState((state) => ({ count: state.count + 1 }))
    }

    render() {
        return (
            <div className='counter'>
                <div className='counter__buttons'>
                    <button className='counter__minus' onClick={this.minus}>-</button>
                    <div className='counter__count'>{this.state.count}</div>
                    <button className='counter__plus' onClick={this.plus}>+</button>
                </div>
                <div className="counter__code">
                    <pre>
                        <code>{`class CounterClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }
    minus = () => {
        this.setState((state) => ({ count: state.count - 1 }))
    }
    plus = () => {
        this.setState((state) => ({ count: state.count + 1 }))
    }
    render() {
        return (
            <div className='counter__buttons'>
                <button className='counter__minus' onClick={this.minus}>-</button>
                <div className='counter__count'>{this.state.count}</div>
                <button className='counter__plus' onClick={this.plus}>+</button>
            </div>           
        )
    }
}`}</code>
                    </pre>
                </div>

            </div>
        )
    }
}

export default CounterClass;
