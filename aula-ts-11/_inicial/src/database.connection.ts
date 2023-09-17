import pg from "pg"
const { Pool } = pg

const connection = new Pool({
    host: "bubble.db.elephantsql.com",
    port: 5432,
    user: "dcrpqsva",
    password: "NnWAbDv9nG5ANDHakx6wdjgyKJlAWYIT",
    database: "dcrpqsva"
})

export { connection }