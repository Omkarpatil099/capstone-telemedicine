import { Link } from "react-router-dom";

export default function MedicalRecordList() {
  const records = JSON.parse(localStorage.getItem("patientMedicalRecords")) || [
    { id: 1, date: "27 Nov 2025", summary: "High BP, mild stress - 3 days rest" },
    { id: 2, date: "10 Nov 2025", summary: "Viral fever - Paracetamol given" }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">📁 Medical Records</h1>

      <div className="space-y-4">
        {records.map(r => (
          <Link
            key={r.id}
            to={`/patient/medical-records/${r.id}`}
            className="block bg-white shadow p-4 border rounded hover:bg-gray-50"
          >
            <p className="font-semibold">{r.date}</p>
            <p className="text-gray-600">{r.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
