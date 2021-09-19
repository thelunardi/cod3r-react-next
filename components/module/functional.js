// export default (padrão) não importa o nome
export function Component1() {
    return <h2>Component 1</h2>
}

export const Component2 = function() {
    return <h2>Component 2</h2>
}

export default function Component3() {
    return (
        <div>
            <h2>Component 3</h2>
        </div>
    )
}

export const Component4 = props => <h2>Component 4</h2>

const Component5 = () => {
    return <h2>Component 5</h2>
}

const Component6 = () => (
    <div>
        <h2>Component 6</h2>
    </div>
)

export {
    Component5,
    Component6
}
