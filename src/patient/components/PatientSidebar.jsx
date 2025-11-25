import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { FiHome, FiUser, FiUpload, FiBell, FiFileText, FiLogOut } from "react-icons/fi";

export default function PatientSidebar() {
  const { logout } = useAuth();
  const location = useLocation();

  const menu = [
    { name: "Dashboard", icon: <FiHome />, path: "/patient/dashboard" },
    { name: "Profile", icon: <FiUser />, path: "/patient/profile" },
    { name: "Upload Data", icon: <FiUpload />, path: "/patient/upload" },
    { name: "Prescriptions", icon: <FiFileText />, path: "/patient/prescriptions" },
    { name: "Notifications", icon: <FiBell />, path: "/patient/notifications" },
  ];

  return (
    <div className="min-h-screen w-64 bg-white shadow-lg p-6 flex flex-col">
      <h2 className="text-2xl font-bold text-blue-600 mb-8">Patient Portal</h2>

      <nav className="flex-1">
        {menu.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 p-3 my-2 rounded-lg font-medium 
              ${location.pathname === item.path ? "bg-blue-500 text-white" : "hover:bg-blue-100"}
            `}
          >
            {item.icon} {item.name}
          </Link>
        ))}
      </nav>

      <button
        onClick={logout}
        className="flex items-center gap-3 p-3 mt-6 rounded-lg bg-red-500 text-white hover:bg-red-600"
      >
        <FiLogOut /> Logout
      </button>
    </div>
  );
}
