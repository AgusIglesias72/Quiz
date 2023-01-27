import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
  id: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query
  res.status(200).json({ name: 'Devuelve esta encuesta', id: Number(id) })
}
