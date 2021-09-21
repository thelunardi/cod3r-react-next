export function getStaticProps() {
    return {
        props: {
            number: Math.random()
        }
    }
}

export default function StaticContent(props) {
    return (
        <div>
            <span>Aleatório: {props.number}</span>
        </div>
    )
}
