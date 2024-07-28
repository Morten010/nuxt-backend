import { drizzle } from 'drizzle-orm/mysql2'
export { sql, eq, and, or } from 'drizzle-orm'
import mysql from "mysql2/promise";
import * as schema from '../database/schema'

export const tables = schema

if(!process.env.DATABASE_URL){
    throw Error('Missing database_url in env file')
}

const connection = mysql.createPool({
    host: '127.0.0.1',
    database: 'tables',
    user: 'root',
    port: 3306,
    password: 'tsj85ptr',
});


export function useDrizzle() {
  return drizzle(connection, { 
    schema,
    mode: "default"
})
}

