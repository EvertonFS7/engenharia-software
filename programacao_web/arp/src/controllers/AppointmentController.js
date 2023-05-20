class AppointmentController {
    constructor(AppointmentModel) {
      this.AppointmentModel = AppointmentModel;
    }
  
    createAppointment(req, res) {
      const newAppointmentData = req.body;
      const newAppointment = this.AppointmentModel.createAppointment(newAppointmentData);
      res.status(201).json(newAppointment);
    }
  
    getAllAppointments(req, res) {
      const appointments = this.AppointmentModel.getAllAppointments();
      res.json(appointments);
    }
  }
  
  module.exports = AppointmentController;
  