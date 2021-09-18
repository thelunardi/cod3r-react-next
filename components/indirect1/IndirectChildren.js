export default function IndirectChildren(props) {
    return (
        <div>
            <h2>Filho</h2>
            <button onClick={props.indirectFunction}>Falar com o pai</button>
            <button onClick={event => props.indirectFunction(event)}>Falar com o pai</button>

            <button onClick={() => props.indirectFunction('Passei no ENEM!')}>Falar com o pai</button>
        </div>
    )
}
