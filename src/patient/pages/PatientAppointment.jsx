import { useState } from "react";

export default function PatientAppointment() {
  const [form, setForm] = useState({
    doctor: "",
    date: "",
    time: "",
    reason: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save locally until backend is ready
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    appointments.push(form);
    localStorage.setItem("appointments", JSON.stringify(appointments));

    alert("Appointment Request Sent Successfully! 📩");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Book Appointment</h1>

      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-6 rounded-xl shadow-md max-w-xl space-y-4"
      >

        <div>
          <label className="text-gray-700 font-semibold">Select Doctor</label>
          <select 
            name="doctor"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          >
            <option>Select Doctor</option>
            <option>Dr. Ramesh (Cardiologist)</option>
            <option>Dr. Anita (Orthopedic)</option>
            <option>Dr. Kiran (General Physician)</option>
          </select>
        </div>

        <div>
          <label className="font-semibold text-gray-700">Date</label>
          <input 
            type="date" 
            name="date"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
        </div>

        <div>
          <label className="font-semibold text-gray-700">Time Slot</label>
          <input 
            type="time" 
            name="time"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
        </div>

        <div>
          <label className="font-semibold text-gray-700">Reason</label>
          <textarea
            name="reason"
            placeholder="Describe your symptoms..."
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg"
        >
          Submit Appointment Request
        </button>
      </form>
    </div>
  );
}
