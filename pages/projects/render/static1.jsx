// import { useEffect, useState } from 'react'

export default function Static1() {
    // const [num, setNum] = useState(0)

    // com o useEffect, o next entende que o conteúdo é dinâmico nese exemplo
    // useEffect(() => {
    //     setNum(Math.random())
    // }, [])

    return (
        <div>
            <h1>Estático 01</h1>
            {/*<h2>{num}</h2>*/}
        </div>
    )
}
