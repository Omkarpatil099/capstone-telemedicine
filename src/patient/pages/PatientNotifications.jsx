import { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";

export default function PatientNotifications() {
  const notifications = [
    { id: 1, message: "Doctor reviewed your last report 📄", time: "2 hours ago" },
    { id: 2, message: "Tomorrow consultation at 5:00 PM 🕔", time: "1 day ago" },
    { id: 3, message: "Prescription updated 💊", time: "3 days ago" },
    { id: 4, message: "Abnormal BP detected ⚠ Please update reading", time: "5 days ago" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Notifications</h1>

      <div className="bg-white shadow-md rounded-xl p-6 max-w-3xl space-y-4">
        {notifications.map((note) => (
          <div
            key={note.id}
            className="p-4 rounded-lg border hover:bg-gray-50 transition flex flex-col"
          >
            <span className="text-gray-800 font-medium">{note.message}</span>
            <span className="text-sm text-gray-500 mt-1">{note.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
