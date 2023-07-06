import React from 'react'

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
                <button className='counter__minus' onClick={this.minus}>-</button>
                <div className='counter__count'>{this.state.count}</div>
                <button className='counter__plus' onClick={this.plus}>+</button>
            </div>
        )
    }
}

export default CounterClass;
