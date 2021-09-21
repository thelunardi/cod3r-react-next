export default function Methos(req, res) {
    if (req.method === 'GET') {
        res.status(200).json({
            name: 'GET o Nome'
        })
    }

    if (req.method === 'POST') {
        res.status(200).json({
            name: 'POST outro Nome'
        })
    }
    res.status(200).json({
        error: 'BAD METHOD'
    })
}
