import productsList from '../../data/productsList'

export default function loopProduct() {

    function renderList() {
        return productsList.map(product => {
            return (
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.nome}</td>
                    <td>{product.preco}</td>
                </tr>
            )
        })
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {renderList()}
                </tbody>
            </table>
        </div>
    )
}
