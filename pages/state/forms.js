import {useState} from 'react'

export default function forms() {
    const [value, setValue] = useState('')

    const styles = {
        display: 'flex',
        flexDirection: 'column'
    }

    const changeInput = () => {
        setValue(value + "!")
    }

    return (
        <div style={styles}>
            <span>{value}</span>
            <input type="text" value={value} onChange={e => setValue(e.target.value)} />
            <button onClick={changeInput}>Alterar</button>
        </div>
    )
}
