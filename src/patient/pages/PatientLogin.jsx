import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PatientLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // 🔥 For now no backend — so accept any email and password
    if (email && password) {
      localStorage.setItem("patientToken", "LOGGED_IN"); // Token placeholder
      navigate("/patient/dashboard"); // 🚀 Redirect to dashboard
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Patient Login
        </h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="border p-2 rounded-md w-full"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="border p-2 rounded-md w-full"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          New user? <a href="/patient/register" className="text-blue-600">Create account</a>
        </p>

      </div>
    </div>
  );
}



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function PatientLogin() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("patient"); // 🔥 Default role

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (email && password) {
//       localStorage.setItem("role", role);
//       localStorage.setItem("token", "LOGGED_IN");

//       // 🔥 Redirect based on role
//       if (role === "patient") navigate("/patient/dashboard");
//       if (role === "doctor") navigate("/doctor/dashboard");
//       if (role === "admin") navigate("/admin/panel");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-200">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        
//         <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
//           Login Portal
//         </h2>

//         <form onSubmit={handleLogin} className="flex flex-col gap-4">

//           {/* 🔹 Email */}
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e)=>setEmail(e.target.value)}
//             className="border p-2 rounded-md w-full"
//           />

//           {/* 🔹 Password */}
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e)=>setPassword(e.target.value)}
//             className="border p-2 rounded-md w-full"
//           />

//           {/* 🔥 Role Dropdown */}
//           <select
//             value={role}
//             onChange={(e)=>setRole(e.target.value)}
//             className="border p-2 rounded-md w-full"
//           >
//             <option value="patient">Patient</option>
//             <option value="doctor">Doctor</option>
//             <option value="admin">Admin</option>
//           </select>

//           <button
//             type="submit"
//             className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
//           >
//             Login
//           </button>
//         </form>

//         <p className="text-sm text-center text-gray-600 mt-4">
//           New user? <a href="/patient/register" className="text-blue-600">Create account</a>
//         </p>

//       </div>
//     </div>
//   );
// }
