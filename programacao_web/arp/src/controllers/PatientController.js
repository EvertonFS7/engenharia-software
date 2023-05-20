class PatientController {
    constructor(PatientModel) {
      this.PatientModel = PatientModel;
    }
  
    createPatient(req, res) {
      const newPatientData = req.body;
      const newPatient = this.PatientModel.createPatient(newPatientData);
      res.status(201).json(newPatient);
    }
  }
  
  module.exports = PatientController;
  