import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Search() {
    const router = useRouter()
    const id = router.query.id

    return (
        <div>
            <h1>Rotas - {id} - Buscar - Fixo</h1>
            <Link href="routes" passHref>
                <button>Voltar</button>
            </Link>
        </div>
    )
}
