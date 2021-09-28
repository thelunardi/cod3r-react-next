// sempre vai usar o SSG
export function getStaticProps() {
    return {
        props: {
            number: Math.random()
        }
    }
}

export default function Static2(props) {
    return (
        <div>
            <h1>Estático 02</h1>
            <h2>{props.number}</h2>
        </div>
    )
}
