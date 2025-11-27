import { useState } from "react";
import axiosClient from "../../api/axiosClient";

export default function UploadHealthData() {
  const [data, setData] = useState({
    heartRate: "",
    bloodPressure: "",
    steps: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // API placeholder — backend will connect later
    setMessage("Health data uploaded successfully! 🚀");
    console.log("Submitted Data:", data);

    // Clear fields after upload
    setData({ heartRate: "", bloodPressure: "", steps: "" });
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Upload Health Data</h1>

      {message && (
        <p className="bg-green-100 text-green-700 p-3 rounded mb-4">
          {message}
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md max-w-lg"
      >
        <label className="font-semibold text-gray-700">Heart Rate (bpm)</label>
        <input
          type="number"
          name="heartRate"
          value={data.heartRate}
          onChange={handleChange}
          className="border p-2 rounded-md w-full mb-4"
          placeholder="e.g. 78"
        />

        <label className="font-semibold text-gray-700">Blood Pressure</label>
        <input
          type="text"
          name="bloodPressure"
          value={data.bloodPressure}
          onChange={handleChange}
          className="border p-2 rounded-md w-full mb-4"
          placeholder="120/80"
        />

        <label className="font-semibold text-gray-700">Daily Steps</label>
        <input
          type="number"
          name="steps"
          value={data.steps}
          onChange={handleChange}
          className="border p-2 rounded-md w-full mb-4"
          placeholder="5230"
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full">
          Upload
        </button>
      </form>
    </div>
  );
}
