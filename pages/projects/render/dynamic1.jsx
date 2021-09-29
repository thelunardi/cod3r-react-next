export function getServerSideProps() {
    console.log('[SERVER] creating data on server')
    return {
        props: {
            number: Math.random()
        }
    }
}

export default function Dynamic1(props) {
    return (
        <div>
            <h1>Dinâmico 01</h1>
            <h2>{props.number}</h2>
        </div>
    )
}
