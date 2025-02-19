import express from "express"
import * as dotevnv from "dotenv"
import cors from "cors"
import helmet from "helmet"
import { userRouter } from "./users/users.routes"
<<<<<<< HEAD
import { productRouter } from "./products/product.routes"
=======
>>>>>>> a6a8bf08c66ee157d83f9a0cd93a5363eeb68ab7

dotevnv.config()

if (!process.env.PORT) {
    console.log(`No port value specifies...`)
}

const PORT = parseInt(process.env.Port as string, 10)

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())
app.use(helmet())

app.use('/', userRouter)
app.use('/', productRouter)

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
