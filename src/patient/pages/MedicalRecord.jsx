export default function MedicalRecord() {

  const record = {
    date: "27/11/2025",
    notes: [
      "nose is broken",
      "cheek bone is broken",
      "high BP",
      "bed rest for 3 days"
    ],
    prescriptions: [
      { name: "Paracetamol", variant: "650mg", frequency: "3/day", duration: "5 days" },
      { name: "Vitamin D3", variant: "1 capsule", frequency: "Weekly", duration: "4 weeks" },
      { name: "Azithromycin", variant: "500mg", frequency: "1/day", duration: "3 days" },
    ]
  };

  return (
    <div className="p-8">

      <div className="bg-white rounded-xl shadow-lg p-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-800">Medical Record</h1>
          <p className="font-semibold text-gray-600">{record.date}</p>
        </div>

        {/* Notes / Diagnosis */}
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h2 className="font-semibold text-gray-700 mb-1">Diagnosis / Notes</h2>
          <ul className="list-disc ml-6 text-gray-700 leading-7">
            {record.notes.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>

        {/* Prescription Table */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <h2 className="font-semibold text-blue-700 mb-3">Prescriptions</h2>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b text-gray-700">
                <th className="py-2">Medicine</th>
                <th>Power/Variant</th>
                <th>Frequency</th>
                <th>Duration</th>
              </tr>
            </thead>

            <tbody>
              {record.prescriptions.map((med, i) => (
                <tr key={i} className="border-b text-gray-800">
                  <td className="py-2">{med.name}</td>
                  <td>{med.variant}</td>
                  <td>{med.frequency}</td>
                  <td>{med.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>

        {/* 🚫 No Buttons (As Sir Recommended) */}

      </div>
    </div>
  );
}
