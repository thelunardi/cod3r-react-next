interface PersonProps {
    name: string
    age?: number
}

export default function Person(props: PersonProps) {
    return (
        <div>
            <div>Nome: {props.name}</div>
            <div>Idade: {props.age ?? 'Não informada!'}</div>
        </div>
    )
}
