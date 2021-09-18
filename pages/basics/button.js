function action1 () {
    console.log('acao 1')
}

function action5 (event) {
    console.log('acao 5')
    console.log(event)
}

export default function Button() {
    function action2 () {
        console.log('acao 2')
    }

    return (
        <div>
            <button onClick={action1}>Click 1</button>
            <button onClick={action2}>Click 2</button>
            <button onClick={() => console.log('acao 3')}>Click 3</button>
            <button onClick={function () {
                console.log('acao 4')
            }}>Click 4</button>
            <button onClick={action5}>Click 5</button>
            <button onClick={e => action5(e.altKey)}>Click 5.1</button>
            <div>
                <input type="text" onChange={(e) => {
                    console.log('Galvão! Fala, Tino! Mudou!')
                    console.log(e.target.value)
                }}/>
            </div>
        </div>
    )
}
