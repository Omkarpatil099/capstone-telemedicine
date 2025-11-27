import { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";

export default function PatientPrescriptions() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Prescriptions</h1>

      <div className="bg-white p-6 rounded-xl shadow-md space-y-6 w-full max-w-3xl">

        {/* Prescription 1 */}
        <div className="border-b pb-4">
          <h2 className="text-xl font-bold text-blue-600">Paracetamol 650mg</h2>
          <p className="text-gray-600">3 times/day</p>
          <p className="text-gray-500 text-sm mt-1">Duration: 5 Days</p>
        </div>

        {/* Prescription 2 */}
        <div className="border-b pb-4">
          <h2 className="text-xl font-bold text-blue-600">Azithromycin 500mg</h2>
          <p className="text-gray-600">1 time/day</p>
          <p className="text-gray-500 text-sm mt-1">Duration: 3 Days</p>
        </div>

        {/* Prescription 3 */}
        <div>
          <h2 className="text-xl font-bold text-blue-600">Vitamin D3</h2>
          <p className="text-gray-600">Once a week</p>
          <p className="text-gray-500 text-sm mt-1">Duration: 4 Days</p>
        </div>

      </div>
    </div>
  );
}

