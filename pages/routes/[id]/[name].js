import { useRouter } from 'next/router'
import Link from 'next/link'

export default function NameAndId() {
    const router = useRouter()
    const id = router.query.id
    const name = router.query.name

    return (
        <div>
            <h1>Rotas - {id} - {name}</h1>
            <Link href="routes" passHref>
                <button>Voltar</button>
            </Link>
        </div>
    )
}
