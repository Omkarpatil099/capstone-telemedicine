import { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";

export default function PatientPrescriptions() {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    axiosClient
      .get("/prescriptions/my")
      .then((res) => {
        setPrescriptions(res.data || []);
      })
      .catch(() => {
        setPrescriptions([]);
      });
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Prescriptions</h1>

      {prescriptions.length === 0 ? (
        <p className="text-gray-600">No prescriptions available.</p>
      ) : (
        <div className="bg-white p-6 rounded-xl shadow-md overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3">Date</th>
                <th className="text-left py-3">Doctor</th>
                <th className="text-left py-3">Notes</th>
                <th className="text-left py-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {prescriptions.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3">{item.date}</td>
                  <td className="py-3">{item.doctorName}</td>
                  <td className="py-3">{item.notes}</td>
                  <td className="py-3">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
                      {item.status || "Active"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
