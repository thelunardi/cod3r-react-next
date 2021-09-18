import MegasenaListNumber from '../../../components/megasena/MegasenaListNumber'
import { useState, useEffect } from 'react'
import { generateMegasenaList } from "../../../util/generateMegasenaList"

export default function Megasena() {
    const [number, setNumber] = useState(6)
    const [list, setList] = useState([])

    useEffect(() => {
        setList(generateMegasenaList(6))
    }, [])

    const styles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    }

    const generateList = () => {
        setList(generateMegasenaList(number))
    }

    return (
        <div style={styles}>
            <h1>Megasena</h1>
            <MegasenaListNumber list={list} />
            <br />
            <div>
                <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
                <button onClick={generateList}>Gerar</button>
            </div>
        </div>
    )
}
