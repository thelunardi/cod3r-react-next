import Link from 'next/link'
import router from 'next/router'

export default function Routes() {
    function navigation(url) {
        router.push(url)
    }

    function navigationWithParams() {
        router.push({
            pathname: 'routes/params',
            query: {
                id: 123,
                nome: 'Ana'
            }
        })
    }

    return (
        <div>
            <h1>Rotas - Index</h1>
            <ul>
                <Link href="routes/params?id=29&nome=Maria" passHref>
                    <li>Params: Maria - 29</li>
                </Link>
                <Link href="routes/123/buscar" passHref>
                    <li>Buscar - 123</li>
                </Link>
                <Link href="routes/123/Daniel" passHref>
                    <li>Buscar - Daniel</li>
                </Link>
            </ul>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
            }}>
                <button onClick={navigationWithParams}>Params</button>
                <button onClick={() => router.push('routes/123/buscar')}>Buscar - 123</button>
                <button onClick={() => navigation('routes/123/Daniel')}>Buscar - Daniel</button>
            </div>
        </div>
    )
}
