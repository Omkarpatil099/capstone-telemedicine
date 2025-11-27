export default function PatientDashboard() {
  return (
    <div>

      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Welcome to Your Dashboard 🧑‍⚕️
      </h1>

      {/* Health Stat Cards */}
      <div className="grid grid-cols-3 gap-6">

        <div className="bg-white p-6 shadow rounded">
          <h2 className="text-gray-600">Heart Rate</h2>
          <p className="text-2xl font-bold text-red-500">78 bpm</p>
        </div>

        <div className="bg-white p-6 shadow rounded">
          <h2 className="text-gray-600">Blood Pressure</h2>
          <p className="text-2xl font-bold text-blue-500">120/80</p>
        </div>

        <div className="bg-white p-6 shadow rounded">
          <h2 className="text-gray-600">Daily Steps</h2>
          <p className="text-2xl font-bold text-green-500">5230 steps</p>
        </div>

      </div>
    </div>
  );
}
