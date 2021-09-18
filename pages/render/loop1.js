export default function Loop1() {
    const approvedStudent = [
        'João',
        'Maria',
        'José'
    ]

    function renderList() {
        const itens = []

        for (let i = 0; i < approvedStudent.length; i++) {
            itens.push(<li key={i}>{approvedStudent[i]}</li>)
        }
        return itens
    }

    function renderListMap() {
        return approvedStudent.map((element, index) => <li key={index}>{element}</li>)
    }

    return (
        <ul>
            {renderList()}
            {renderListMap()}
        </ul>
    )
}
