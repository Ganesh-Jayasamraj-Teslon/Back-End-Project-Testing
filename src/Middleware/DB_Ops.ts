import { Request, Response } from "express";
import { Patient_model } from "../Database/Schema";
import { logger } from "../Utils/Logger";

async function new_Patient(req: Request, res: Response) {
    const {
        first_name,
        last_name,
        age,
        phone_no,
        address,
        Admittion_Type,
        cause_Of_Admit
    } = req.body

    try {
        const patient = new Patient_model({
            first_name,
            last_name,
            age,
            phone_no,
            address,
            Admittion_Type,
            cause_Of_Admit
        })

        await patient.save()

        logger()
        console.log(`[SUCCESS]\t\t - \t\tPatient details added to database`)

        res.send({
            "message": `Patient ${patient.first_name} Admitted`
        })
        
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

async function view_Patient(req: Request, res: Response) {
    const {phone_no} = req.body

    const patient = await Patient_model.findOne({
        phone_no
    })

    res.send(patient)
}

async function view_All_Patient(req: Request, res: Response) {
    const all_Patients = await Patient_model.find({})

    res.send(all_Patients)
}

async function discharge_Patient(req: Request, res: Response) {
    const {phone_no} = req.body

    const discharge_patient = await Patient_model.findOne({
        phone_no
    })

    if(discharge_patient){
        await Patient_model.findOneAndDelete({
            phone_no
        })

        return res.send({"message": "patient discharged"})
    }

    return res.send({"message": "Patient not avaliable"})
}

async function update_Patient(req: Request, res: Response) {
    const { phone_no,
        new_first_name,
        new_last_name,
        new_age,
        new_phone_no,
        new_address,
        new_Admittion_type,
        new_cause_Of_Admit
    } = req.body

    console.log({
        phone_no,
        new_first_name,
        new_last_name
    });
    

    const update_patient = await Patient_model.findOne({
        phone_no
    })

    
    if(update_patient) {

        let first_name: String, 
        last_name: String,
        age: Number,
        phone_no: String,
        address: Object,
        Admittion_Type: String,
        cause_Of_Admit: String

        if(!new_first_name) {
            first_name = update_patient.first_name
        } else {
            first_name = new_first_name
        }

        if(!new_last_name) {
            last_name = update_patient.last_name
        } else {
            last_name = new_last_name
        }

        if(!new_age) {
            age = update_patient.age
        } else {
            age = new_age
        }

        if(!new_phone_no) {
            phone_no = update_patient.phone_no
        } else {
            phone_no = new_phone_no
        }

        if(!new_address) {
            address = update_patient.address
        } else {
            address = new_address
        }

        if(!new_Admittion_type) {
            Admittion_Type = update_patient.Admittion_Type
        } else {
            Admittion_Type = new_Admittion_type
        }

        if(!new_cause_Of_Admit) {
            cause_Of_Admit = update_patient.cause_Of_Admit
        } else {
            cause_Of_Admit = new_cause_Of_Admit
        }

        await Patient_model.findOneAndUpdate({
            phone_no
        },{
            first_name,
            last_name,
            age,
            phone_no,
            address,
            Admittion_Type,
            cause_Of_Admit
        })

        return res.send({"message": "Patient details updated"})
    }

    return res.send({"message": "Patient details not correct"})

}

export { new_Patient, view_Patient, view_All_Patient, discharge_Patient, update_Patient }