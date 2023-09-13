import { User } from "./protocols/user-protocol"

import express from "express"

const app = express()
// app.use(json());


app.get("/health", (req, res) => {
    res.status(200).send("Ok")
})

app.listen(5000, () => {
    console.log("server is running")
})

// app.post("users", (req: Request, res: Response) => {
//     const body = req.body as User;
// })