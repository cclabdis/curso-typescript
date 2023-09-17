import { connection } from "database"
import express, { Request, Response, json } from "express"
import { User } from "protocols/user-protocol"


const app = express()
app.use(json())


app.get("/health", (req: Request, res: Response) => {
    res.status(200).send("Ok")
})

app.post("/users", async (req: Request, res: Response) => {
    const { name, email, password } = req.body as User

    await connection.query(
        `INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`,
        [name, email, password]
    )
})

app.get("/users", async (req: Request, res: Response) => {
    const result = await connection.query<User>(
        `SELECT * FROM users`
        )
    const allusers = result.rows
        res.send(allusers)

})


// const port: number = Number(process.env.PORT) || 5000
app.listen(5000, () => {
    console.log("server is running")
})