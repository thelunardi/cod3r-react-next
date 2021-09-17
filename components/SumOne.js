export default function SumOne(props) {
    // props.number++
    let {number} = props
    number++
    return (
        <div>
            <h1>{number}</h1>
        </div>
    )
}
