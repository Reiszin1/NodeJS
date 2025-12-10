import 'dotenv/config'
import postgres from 'postgres'

const{ PGHOST, PGUSER, PGPASSWORD, PGDATABASE} = process.env;
const url = `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`;

const sql = postgres(url);

export { sql };
