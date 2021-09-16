export default function listThree() {
    return (
        <div>
            <div>
                {createList(10)}
            </div>
            <div>
                {createList(5)}
            </div>
        </div>
    )
}

function createList (length = 10) {
    const list = []
    for (let i = 1; i <= length; i++) {
        list.push(<span key={i}>{i},</span>)
    }
    return list
}
