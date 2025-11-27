import { Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "./shared/ProtectedRoute";
import PatientLayout from "./patient/components/PatientLayout";

// Patient Pages
import PatientLogin from "./patient/pages/PatientLogin";
import PatientRegister from "./patient/pages/PatientRegister";
import PatientDashboard from "./patient/pages/PatientDashboard";
import PatientProfile from "./patient/pages/PatientProfile";
import UploadHealthData from "./patient/pages/UploadHealthData";
import PatientPrescriptions from "./patient/pages/PatientPrescriptions";
import PatientNotifications from "./patient/pages/PatientNotifications";
import PatientAppointment from "./patient/pages/PatientAppointment";
import AppointmentStatus from "./patient/pages/AppointmentStatus";

// 🔥 Correct imports
import MedicalRecordList from "./patient/pages/MedicalRecordList";
import MedicalRecord from "./patient/pages/MedicalRecord";

export default function App() {
  return (
    <Routes>

      {/* Default route */}
      <Route path="/" element={<Navigate to="/patient/login" />} />

      {/* Public routes */}
      <Route path="/patient/login" element={<PatientLogin />} />
      <Route path="/patient/register" element={<PatientRegister />} />

      {/* Protected Patient Routes */}
      <Route path="/patient/dashboard" element={
        <ProtectedRoute><PatientLayout><PatientDashboard /></PatientLayout></ProtectedRoute>
      }/>

      <Route path="/patient/profile" element={
        <ProtectedRoute><PatientLayout><PatientProfile /></PatientLayout></ProtectedRoute>
      }/>

      <Route path="/patient/upload" element={
        <ProtectedRoute><PatientLayout><UploadHealthData /></PatientLayout></ProtectedRoute>
      }/>

      <Route path="/patient/prescriptions" element={
        <ProtectedRoute><PatientLayout><PatientPrescriptions /></PatientLayout></ProtectedRoute>
      }/>

      <Route path="/patient/notifications" element={
        <ProtectedRoute><PatientLayout><PatientNotifications /></PatientLayout></ProtectedRoute>
      }/>

      {/* Appointment */}
      <Route path="/patient/appointment" element={
        <ProtectedRoute><PatientLayout><PatientAppointment /></PatientLayout></ProtectedRoute>
      }/>

      <Route path="/patient/appointments/status" element={
        <ProtectedRoute><PatientLayout><AppointmentStatus /></PatientLayout></ProtectedRoute>
      }/>

      {/* Medical Records */}
      <Route path="/patient/medical-records" element={
        <ProtectedRoute><PatientLayout><MedicalRecordList /></PatientLayout></ProtectedRoute>
      }/>

      <Route path="/patient/medical-records/:id" element={
        <ProtectedRoute><PatientLayout><MedicalRecord /></PatientLayout></ProtectedRoute>
      }/>

    </Routes>
  );
}
