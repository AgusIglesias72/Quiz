import { Pool } from 'pg'

const { PG_DATABASE, PG_HOST, PG_PASSWORD, PG_PORT, PG_USER } = process.env

let connection: any

if (!connection) {
  connection = new Pool({
    user: PG_USER,
    password: PG_PASSWORD,
    host: PG_HOST,
    port: Number(PG_PORT),
    database: PG_DATABASE,
  })
}

export default connection
