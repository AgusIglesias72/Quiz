import type { NextApiRequest, NextApiResponse } from 'next'
import connection from '../../UtilsApi/DB/database'

type Data = {
  ping: []
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await connection.query('SELECT * FROM users')

  return res.json({
    ping: response.rows,
  })
}
