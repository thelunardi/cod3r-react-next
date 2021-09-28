export async function getStaticProps() {
    console.log('[SERVER] creating data on server')
    const response = await fetch('http://localhost:3000/api/products')
    const products = await response.json()

    return {
        props: {
            products
        }
    }
}

export default function Static4(props) {
    console.log('[SERVER] rendering the component')
    function renderProduct() {
        return props.products.map(product => {
            return <li key={product.id}>{product.name} costs ${product.price}</li>
        })
    }

    return (
        <div>
            <h1>Estático 04</h1>
            <ul>
                {renderProduct()}
            </ul>
        </div>
    )
}
