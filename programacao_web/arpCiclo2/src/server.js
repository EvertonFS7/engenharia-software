const express = require('express');
const app = express();
const PatientController = require('./controllers/PatientController');
const PatientModel = require('./model/PatientModel');
const AppointmentController = require('./controllers/AppointmentController');
const AppointmentModel = require('./model/AppointmentModel');

app.use(express.json());

const patientController = new PatientController(new PatientModel());

app.post('/patients', patientController.createPatient.bind(patientController));

const appointmentController = new AppointmentController(new AppointmentModel());

app.post('/appointments', appointmentController.createAppointment.bind(appointmentController));
app.get('/appointments', appointmentController.getAllAppointments.bind(appointmentController));

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
