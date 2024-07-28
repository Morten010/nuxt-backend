import { defineConfig } from 'drizzle-kit'

if(!process.env.DATABASE_URL){
    throw Error('Missing database_url in env file')
}

export default defineConfig({
  dialect: 'mysql',
  schema: './server/database/schema.ts',
  out: './server/database/migrations',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  }
})