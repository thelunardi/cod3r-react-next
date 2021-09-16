export default function jsxThird() {
    const subtitle = "Estou no JavaScript"
    const h3Html = <h3>3 * 3 = {3 * 3}</h3>
    return (
        <div>
            <h1>Olá, JSX #3!</h1>
            <h2>{subtitle}</h2>
            {h3Html}
            <h4>{Math.max(13, 19)}</h4>
            <h5>{between(5, 1, 10)}</h5>
        </div>
    )
}

function between(value, min, max) {
    if (value >= min && value <= max) {
        return "Sim"
    }
    return "Não"
}
