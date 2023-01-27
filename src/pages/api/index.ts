import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string | undefined
  availableEndpoints: object[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req
  const { token } = req.headers

  switch (method) {
    case 'GET':
      res.status(200).json({
        name: `Welcome to the API`,
        availableEndpoints: [
          {
            quiz: [
              {
                endpoint: '/api/quiz',
                methods: ['GET', 'POST'],
                description: 'Get all quizzes or create a new one',
              },
              {
                endpoint: '/api/quiz/:id',
                methods: ['GET', 'PUT', 'DELETE'],
                description:
                  'Get a quiz by id, update a quiz by id or delete a quiz by id',
              },
              {
                endpoint: '/api/quiz/:id/questions',
                methods: ['GET', 'POST'],
                description:
                  'Get all questions of a quiz or create a new question for a quiz',
              },
            ],
          },
          {
            users: [
              {
                endpoint: '/api/users',
                methods: ['GET', 'POST'],
                description: 'Get all users or create a new user',
              },
              {
                endpoint: '/api/users/:id',
                methods: ['GET', 'PUT', 'DELETE'],
              },
            ],
          },
        ],
      })

      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
