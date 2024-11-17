import { Pool } from "pg";
import 'dotenv/config'

console.log(process.env)
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: String(process.env.DB_PASSWORD),
  port: Number(process.env.DB_PORT),
  ssl: {
    rejectUnauthorized: false, // Set to false if you don't have a CA certificate, use true with valid certificates for more security
  },
});

export default pool;
