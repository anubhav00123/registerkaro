// lib/db.js
import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "Auradev@12",
  port: 5432,
});

export default pool;
