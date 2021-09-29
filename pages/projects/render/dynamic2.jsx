export async function getServerSideProps() {
    console.log('[SERVER] creating data on server')
    const response = await fetch('http://localhost:3000/api/products')
    const products = await response.json()

    return {
        props: {
            products
        }
    }
}

export default function Dynamic2(props) {
    function renderProduct() {
        return props.products.map(product => {
            return <li key={product.id}>{product.id} - {product.name} costs ${product.price}</li>
        })
    }

    return (
        <div>
            <h1>Dinâmico 02</h1>
            <ul>
                {renderProduct()}
            </ul>
        </div>
    )
}
