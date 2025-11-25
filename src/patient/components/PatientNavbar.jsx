import { useAuth } from "../../contexts/AuthContext";

export default function PatientNavbar() {
  const { user } = useAuth();

  return (
    <div className="w-full bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-700">Welcome, {user?.name}</h1>
      <div className="text-gray-600">{user?.email}</div>
    </div>
  );
}