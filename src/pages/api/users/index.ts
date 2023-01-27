import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req
  const { token } = req.headers

  switch (method) {
    case 'GET':
      res.status(200).json({ name: 'Gets all users' })
      break
    case 'POST':
      res.status(200).json({ name: 'Creates a new user with info in the body' })
      break

    default:
      res.setHeader('Allow', ['GET, POST, PUT, DELETE'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
