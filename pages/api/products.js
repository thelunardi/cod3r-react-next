// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      name: 'Pen',
      price: 5.60
    },
    {
      id: 2,
      name: 'Notebook',
      price: 10.00
    },
    {
      id: 3,
      name: 'Scissors',
      price: 5.00
    }
  ])
}
