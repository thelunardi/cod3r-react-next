import { useState } from 'react'

export default function Form() {
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [users, setUsers] = useState([])

    async function saveUser() {
        await fetch('/api/form', {
            method: 'POST',
            body: JSON.stringify({name, age})
        })

        setName('')
        setAge(0)

        const res = await fetch('/api/form')
        const users = await res.json()
        setUsers(users)
    }

    function renderUsers() {
        return users.map((user, i) => <li key={i}>{user.name} - {user.age} anos</li>)
    }

    return (
        <div>
            <h1>Integrando com uma API</h1>
            <input type="text" value={name} onChange={event => setName(event.target.value)} />
            <input type="number" value={age} onChange={event => setAge(event.target.value)} />
            <button onClick={saveUser}>Salvar</button>

            <ul>
                {renderUsers()}
            </ul>
        </div>
    )
}
