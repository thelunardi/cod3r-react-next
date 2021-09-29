export async function getStaticPaths() {
    const resp = await fetch(`http://localhost:3000/api/students/tutors`)
    const ids = await resp.json()

    const paths = ids.map(id => {
        return { params: {id: `${id}`}}
    })

    return {
        // fallback: false, // 404 se não encontrar o ID específico
        fallback: true,
        paths
    }
}

export async function getStaticProps({params}) {
    const resp = await fetch(`http://localhost:3000/api/students/${params.id}`)
    const student = await resp.json()
    return {
        props: {
            student
        }
    }
}

export default function StudentPerId(props) {
    const {student} = props
    return (
        <div>
            <h1>Detalhe dos alunos</h1>
            {student ?
                    <ul>
                        <li>{student.id}</li>
                        <li>{student.name}</li>
                        <li>{student.email}</li>
                    </ul>
                    : false
            }
        </div>
    )
}
