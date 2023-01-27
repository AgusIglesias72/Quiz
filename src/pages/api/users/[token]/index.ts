import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req
  const { token } = req.query

  switch (method) {
    case 'PUT':
      res.status(200).json({ name: `Updates the user with id: ${token}` })
      break
    case 'DELETE':
      res.status(200).json({ name: `Deletes the user with id: ${token}` })
      break

    default:
      res.setHeader('Allow', ['PUT, DELETE'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
