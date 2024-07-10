import express, {Express, Request, Response} from "express"
import { MONGODB, PORT_NUMBER } from "./Utils/Secrets"
import { logger } from "./Utils/Logger"
import { router } from "./Routes"
import mongoose from "mongoose"

// Configuring the server
const app: Express = express()
const PORT = PORT_NUMBER
const MongoDB_URL = MONGODB


// MongoDB Connector
mongoose.connect(MongoDB_URL)
    .then(() => console.log("[SUCCESSFUL]\t\t - \t\tConnected to MongoDB"))
    .catch((e) => {
        logger()
        console.log(`[FAILED]\t\t - \t\t${e}`)
    })

// Middleware
app.use(express.json())

// Route implementation
app.use("/", router)

// Base Routes
app.get("/",(req: Request, res: Response) => {
    res.send("Hello World")
})

// Test Route
app.post("/test", (req, res) => {
    const { a, b } = req.body
    res.send({
        a,
        b
    })
})

// Running the application
app.listen(PORT, () => {
    logger()
    console.log(`[STARTED]\t\t - \t\tServer is started and listening on port: ${PORT}`)
})