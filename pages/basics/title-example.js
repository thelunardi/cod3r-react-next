import Title from "../../components/Title"

export default function titleExample() {
    return (
        <>
            <Title
                title="Oi,"
                subtitle="eu sou o Goku!"
            />
            <Title
                title="Oi,"
                subtitle="eu sou o Goku!"
                small={false}
            />
            <Title
                title="Oi,"
                subtitle="eu sou o Goku!"
                small={true}
            />
            <Title
                title="Oi,"
                subtitle="eu sou o Goku!"
                small
            />
        </>
    )
}
