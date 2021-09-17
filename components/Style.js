export default function Style(props) {
    const appliedClass = props.number >= 0 ? "blueClass" : "redClass"
    const styles = {
        backgroundColor: props.number >= 0 ? "green" : "red",
        color: props.color,
        textAlign: props.right ? "right" : "left"
    }
    return (
        <div>
            <h1 style={styles}>
                Texto 01
            </h1>
            <h2 className={appliedClass}>Texto 02</h2>
        </div>
    )
}
