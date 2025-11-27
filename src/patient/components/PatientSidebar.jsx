import { Link } from "react-router-dom";

export default function PatientSidebar() {
  return (
    <div className="p-5 text-lg space-y-4">

      <Link className="block hover:text-yellow-400" to="/patient/dashboard">🏠 Dashboard</Link>
      <Link className="block hover:text-yellow-400" to="/patient/profile">👤 Profile</Link>
      <Link className="block hover:text-yellow-400" to="/patient/upload">📤 Upload Health Data</Link>

      {/* Appointment */}
      <Link className="block hover:text-yellow-400" to="/patient/appointment">🗓 Book Appointment</Link>
      <Link className="block hover:text-yellow-400" to="/patient/appointments/status">📌 Appointment Status</Link>

      {/* Medical Records */}
      <Link className="block hover:text-yellow-400" to="/patient/medical-records">📁 Medical Records</Link>

      <Link className="block hover:text-yellow-400" to="/patient/prescriptions">📄 Prescriptions</Link>
      <Link className="block hover:text-yellow-400" to="/patient/notifications">🔔 Notifications</Link>

      {/* Logout */}
      <button
        onClick={() => {
          localStorage.removeItem("patientToken");
          window.location.href = "/patient/login";
        }}
        className="block text-left w-full text-red-400 hover:text-red-300"
      >
        🚪 Logout
      </button>
    </div>
  );
}
