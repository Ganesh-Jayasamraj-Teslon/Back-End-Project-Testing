import { Schema, model } from "mongoose";

// Customized Address Schema for Patient

const Patient_Address_Schema = new Schema({
    door_no: {
        type: String,
        required: true
    },

    street_name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true,
    },
    pincode: {
        type: Number,
        required: true
    },
    state: {
        type: String,
        required: true
    }
})

const Patient_Schema = new Schema({
    first_name: {
        type: String,
        required: true,
        uppercase: true,
    },
    last_name: {
        type: String,
        required: true,
        uppercase: true,
    },
    age: {
        type: Number,
        required: true,
        min: 0,
        max: 150
    },
    phone_no: {
        type: String,
        required: true,
        unique: true
    },

    // Patient's Address -> Customized Schema
    address: {
        type: Patient_Address_Schema,
        required: true
    },

    Admittion_Type: {
        type: String,
        required: true
    },

    cause_Of_Admit: {
        type: String,
        required: true
    }

})

let Patient_model = model("Patient_model", Patient_Schema)

export { Patient_model }