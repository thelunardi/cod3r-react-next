// erro comum do react - elementos adjacentes
export default function Fragment2() {
    return (
        <>
            <h1>Título</h1>
            <h2>Subtítulo</h2>
        </>
        // <h1>Título</h1>
        // <h2>Subtítulo</h2>
        // solução com div
        // <div>
        //     <h1>Título</h1>
        //     <h2>Subtítulo</h2>
        // </div>

    )
}
