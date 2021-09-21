import { useRouter } from 'next/router'
import Link from 'next/link'

export default function params() {
    const router = useRouter()
    const id = router.query.id
    const nome = router.query.nome

    return (
        <div>
            <h1>Rotas - Params: {id} - {nome}</h1>
            <Link href="/routes">
                <button>Voltar</button>
            </Link>
        </div>
    )
}
