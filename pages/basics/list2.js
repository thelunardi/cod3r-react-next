export default function listTwo() {
    return (
        <div>
            {createList()}
        </div>
    )
}

function createList () {
    const list = [
        <span>1,</span>,
        <span>2,</span>,
        <span>3,</span>,
        <span>4,</span>,
        <span>5,</span>,
    ]
    return list
}
