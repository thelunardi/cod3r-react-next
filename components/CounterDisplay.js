export default function CounterDisplay(props) {
    const styles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        color: 'white',
        height: '100px',
        width: '100px',
        borderRadius: '50px',
        margin: '20px'
    }
    return (
        <div style={styles}>
            <h1>{props.number}</h1>
        </div>
    )
}
