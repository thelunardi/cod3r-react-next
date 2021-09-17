// erro comum do react - elementos adjacentes
import React from 'react'

export default function fragment1() {
    return (
        <React.Fragment>
            <h1>Título</h1>
            <h2>Subtítulo</h2>
        </React.Fragment>
        // <h1>Título</h1>
        // <h2>Subtítulo</h2>
        // solução com div
        // <div>
        //     <h1>Título</h1>
        //     <h2>Subtítulo</h2>
        // </div>

    )
}
