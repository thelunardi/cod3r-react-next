import { Component } from 'react'
import CounterComponent from "../../components/CounterComponent"

export default class Counter extends Component {
    render() {
        return (
            <CounterComponent initialValue={100} pass={1} />
        )
    }
}
