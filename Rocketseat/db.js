import 'dotenv/config'
import postgres from 'postgres'

const{ PGHOST, PGUSER, PGPASSWORD, PGDATABASE, ENDPOINT_ID} = process.env;
const url = `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}:5432/${PGDATABASE}?options=project%3D${ENDPOINT_ID}`;

const sql = postgres(URL, {ssl: 'require'});
