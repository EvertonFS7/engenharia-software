class AppointmentModel {
    constructor() {
      this.appointments = [];
    }
  
    createAppointment(appointmentData) {
      const newAppointment = { id: this.generateAppointmentId(), ...appointmentData };
      this.appointments.push(newAppointment);
      return newAppointment;
    }
  
    getAllAppointments() {
      return this.appointments;
    }
  
    generateAppointmentId() {
      return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
    }
  }
  
  module.exports = AppointmentModel;
  