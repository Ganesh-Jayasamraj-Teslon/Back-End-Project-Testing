import { config } from "dotenv"
config()

// Assigning the Variables
const PORT_NUMBER = process.env.PORT || 3000
const MONGODB = process.env.MONGODB_URL || "mongodb://mongodb:27017/patient_details"

// Exporting Secrets and Environmental variables
export { PORT_NUMBER, MONGODB }