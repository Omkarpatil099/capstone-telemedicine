import PatientSidebar from "./PatientSidebar";

export default function PatientLayout({ children }) {
  return (
    <div className="flex h-screen">
      
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white">
        <PatientSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100 overflow-auto">
        {children}
      </div>
    </div>
  );
}
