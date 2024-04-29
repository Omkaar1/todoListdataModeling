import mongoose from 'mongoose';

const medicalRecordSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
      },
      doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
      },
      hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      },
      diagnosis: {
        type: String,
        required: true
      },
      medications: [{
        name: String,
        dosage: String,
        frequency: String
      }],
      tests: [{
        name: String,
        results: String
      }],
      comments: String
},{timestamps:true});

export const MedicalRecord = mongoose.model("MedicalRecord",medicalRecordSchema);
