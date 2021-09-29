export default function handler(req, res) {
    const id = +req.query.id

    res.status(200).json({
        id: id,
        name: `João Silva, The ${id}`,
        email: `jsadkjasda${id}@jas.com`
    })
}
