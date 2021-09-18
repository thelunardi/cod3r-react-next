import { Component } from 'react'

export default class CounterComponent extends Component {
    state = {
        number: this.props.initialValue ?? 0,
        pass: this.props.pass ?? 1
    }

    increment = () => {
        this.setState({
            number: this.state.number + this.state.pass
        })
    }

    decrement = () => {
        this.setState({
            number: this.state.number - this.state.pass
        })
    }

    renderForm = () => {
        return (
            <>
                <input type="number" min={1} max={10} value={this.state.pass}
                       onChange={event => this.setState({pass: +event.target.value})} />
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </>
        )
    }

    render() {
        return (
            <div>
                <h1>Usando a Classe</h1>
                <h2>{this.state.number}</h2>
                {this.renderForm()}
            </div>
        )
    }
}
