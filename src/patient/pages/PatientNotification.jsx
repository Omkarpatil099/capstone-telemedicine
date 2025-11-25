import { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";

export default function PatientNotifications() {
  const [notifs, setNotifs] = useState([]);

  useEffect(() => {
    axiosClient
      .get("/notifications/my")
      .then((res) => setNotifs(res.data || []))
      .catch(() => setNotifs([]));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Notifications</h1>

      {notifs.length === 0 ? (
        <p className="text-gray-600">No notifications available.</p>
      ) : (
        <ul className="space-y-4">
          {notifs.map((item, index) => (
            <li
              key={index}
              className="p-4 bg-white rounded-xl shadow-md border-l-4 border-blue-500"
            >
              <p className="font-semibold">{item.title}</p>
              <p className="text-gray-600">{item.message}</p>
              <p className="text-gray-400 text-sm mt-1">{item.date}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
