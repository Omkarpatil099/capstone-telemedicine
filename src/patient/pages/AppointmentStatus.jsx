import { useEffect, useState } from "react";

export default function AppointmentStatus() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(stored);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Appointments</h1>

      <div className="bg-white p-6 rounded-xl shadow-md space-y-4 max-w-3xl">

        {appointments.length === 0 && (
          <p className="text-gray-600">No appointments booked yet.</p>
        )}

        {appointments.map((apt, index) => (
          <div key={index} className="border p-4 rounded-lg">
            <p><b>Doctor:</b> {apt.doctor}</p>
            <p><b>Date:</b> {apt.date}</p>
            <p><b>Time:</b> {apt.time}</p>
            <p><b>Reason:</b> {apt.reason}</p>

            {/* For now status is pending until doctor updates in backend */}
            <p className="mt-2">
              <b>Status:</b> 
              <span className="text-blue-600 font-semibold"> Pending</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
