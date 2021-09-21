const users = []

export default function form(req, res) {
    if(req.method === 'POST') {
        post(req, res)
        return
    }

    if(req.method === 'GET') {
        get(req, res)
        return
    }

    res.status(405).json()
}

function post(req, res) {
    const user = JSON.parse(req.body)
    users.push(user)
    res.status(200).send()
}

function get(req, res) {
    res.status(200).json(users)
}

