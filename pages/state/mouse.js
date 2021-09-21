import { useState } from 'react'

export default function Mouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const style = {
        backgroundColor: 'gray',
        color: '#fff',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }

    function mouseMoving(event) {
        // errado: precisa alterar através da função
        // x = event.clientX
        // y = event.clientY
        setX(event.clientX)
        setY(event.clientY)
    }

    return (
        <div style={style} onMouseMove={mouseMoving}>
            <span>Eixo X: {x}</span>
            <span>Eixo Y: {y}</span>
        </div>
    )
}
