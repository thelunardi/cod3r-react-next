import { useState } from 'react'
import CounterDisplay from "../../components/CounterDisplay"

export default function Counter() {
    const [count, setCount] = useState(0)

    const styles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }

    const increment = () => setCount(count + 1)

    const decrement = () => setCount(count - 1)

    return (
        <div style={styles}>
            <h1>Contador</h1>
            {/*<h2>Valor: {count}</h2>*/}
            <CounterDisplay number={count} />
            <div>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
        </div>
    )
}
