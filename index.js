import express from "express"
import cors from 'cors'
import routers from "./routes/routes.js"
import cookieParser from "cookie-parser"
import multer from "multer"
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const PORT = 3001

app.use(cors())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(multer().any())

app.use('/api', routers)

app.listen(PORT, () => console.log(`Server running at port ${PORT}`))