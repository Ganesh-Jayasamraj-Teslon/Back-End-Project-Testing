import { Router, Request, Response, NextFunction } from "express";
import { discharge_Patient, new_Patient, update_Patient, view_All_Patient, view_Patient } from "../../Middleware/DB_Ops";

const api = Router()

// Testing for API
api.get('/', (req: Request, res: Response) => {
    res.send("Hello World")
})

// Create Operation -> Admitting new patient
api.post('/patient_admittion', new_Patient)

// View Patient
api.post("/view_patient", view_Patient)

// View All patients
api.get('/view_all_patient', view_All_Patient)

// Discharge a Patient
api.delete("/discharge_Patient", discharge_Patient)

// Update Patient
api.put("/update_patient", update_Patient)


export { api }