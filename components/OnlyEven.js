export default function OnlyEven(props) {
    const evenNumber = props.number % 2 === 0
    return (
        <div>
            {evenNumber ?
                <h1>{props.number}</h1> :
                null
            }
        </div>
    )

    // return evenNumber ? <h1>{props.number}</h1> : null

    // if (props.number % 2 === 0) {
    //     return <h1>{props.number}</h1>
    // }
    // return null
}
