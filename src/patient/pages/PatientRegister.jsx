// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function PatientRegister() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "patient", // default role
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleRegister = (e) => {
//     e.preventDefault();

//     // For now storing locally — backend will replace later
//     localStorage.setItem("user", JSON.stringify(form));

//     alert("Registration Successful!");
//     navigate("/patient/login"); // redirect to login
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-200">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">

//         <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
//           Create Account
//         </h2>

//         <form onSubmit={handleRegister} className="flex flex-col gap-4">

//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             onChange={handleChange}
//             className="border p-2 rounded-md w-full"
//             required
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             onChange={handleChange}
//             className="border p-2 rounded-md w-full"
//             required
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             onChange={handleChange}
//             className="border p-2 rounded-md w-full"
//             required
//           />

//           {/* 🔥 Role Select — as sir requested */}
//           <select
//             name="role"
//             onChange={handleChange}
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
//             Register
//           </button>
//         </form>

//         <p className="text-sm text-center text-gray-600 mt-4">
//           Already have an account?{" "}
//           <a href="/patient/login" className="text-blue-600">Login</a>
//         </p>

//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PatientRegister() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "patient" // default user
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // Save until backend connects
    localStorage.setItem("user", JSON.stringify(form));

    alert("Registered Successfully 🎉");
    navigate("/patient/login");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">

        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Create Account
        </h2>

        <form onSubmit={handleRegister} className="flex flex-col gap-4">

          <input type="text" name="name" placeholder="Full Name"
            className="border p-2 rounded-md w-full" onChange={handleChange} />

          <input type="email" name="email" placeholder="Email"
            className="border p-2 rounded-md w-full" onChange={handleChange} />

          <input type="password" name="password" placeholder="Password"
            className="border p-2 rounded-md w-full" onChange={handleChange} />

          {/* 🔥 ROLE DROPDOWN ADDED HERE */}
          <select name="role" className="border p-2 rounded-md w-full"
            onChange={handleChange}>
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
            <option value="admin">Admin</option>
          </select>

          <button type="submit"
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Register
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already a user? <a href="/patient/login" className="text-blue-600">Login</a>
        </p>
      </div>
    </div>
  );
}
