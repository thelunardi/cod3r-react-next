export default function listTwo() {
    return (
        <div>
            {createList()}
        </div>
    )
}

function createList () {
    const list = [
        <span key={1}>1,</span>,
        <span key={2}>2,</span>,
        <span key={3}>3,</span>,
        <span key={4}>4,</span>,
        <span key={5}>5,</span>,
    ]
    return list
}
