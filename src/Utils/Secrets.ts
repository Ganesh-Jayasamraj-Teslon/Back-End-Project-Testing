import { config } from "dotenv"
config()

// Assigning the Variables
const PORT_NUMBER = process.env.PORT
const MONGODB = process.env.MONGODB_URL!

// Exporting Secrets and Environmental variables
export { PORT_NUMBER, MONGODB }