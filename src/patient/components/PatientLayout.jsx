import PatientSidebar from "./PatientSidebar";
import PatientNavbar from "./PatientNavbar";

export default function PatientLayout({ children }) {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <PatientSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <PatientNavbar />

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
