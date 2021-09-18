export default function Children(props) {
    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <h2>{props.family}</h2>
            <h3>{props.name}</h3>
        </div>
    )
}
