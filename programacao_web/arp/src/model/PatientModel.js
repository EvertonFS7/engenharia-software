class PatientModel {
    constructor() {
      this.patients = [];
    }
  
    createPatient(patientData) {
      const newPatient = { id: this.generatePatientId(), ...patientData };
      this.patients.push(newPatient);
      return newPatient;
    }
  
    generatePatientId() {
      return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
    }
  }
  
  module.exports = PatientModel;
  