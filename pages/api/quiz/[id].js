export default function quiz(req, res) {
    if (req.method === 'GET') {
        get(req, res)
        return
    }
    res.status(405).send()
}

function get(req, res) {
    const id = req.query.id

    res.status(200).json({
        id,
        question: 'What\'s your favorite color?',
        answers: ['blue', 'yellow', 'red', 'black']
    })
}
