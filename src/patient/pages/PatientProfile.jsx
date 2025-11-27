import { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";
import { useAuth } from "../../contexts/AuthContext";

export default function PatientProfile() {
  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold text-gray-800 mb-6">Profile Details</h1>

      <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-lg">

        <div className="mb-4">
          <label className="block font-medium text-gray-700">Full Name</label>
          <input 
            type="text" 
            value="Omkar Patil" 
            className="border p-2 rounded-md w-full text-gray-700"
            disabled
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium text-gray-700">Email</label>
          <input 
            type="email" 
            value="omkar@example.com"
            className="border p-2 rounded-md w-full text-gray-700"
            disabled
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium text-gray-700">Age</label>
          <input 
            type="number" 
            value="22"
            className="border p-2 rounded-md w-full text-gray-700"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium text-gray-700">Gender</label>
          <select className="border p-2 rounded-md w-full text-gray-700">
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Save Changes
        </button>

      </div>
    </div>
  );
}


// export default function PatientProfile() {
//   const { user } = useAuth();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     age: "",
//   });

//   const [message, setMessage] = useState("");

//   // load user data from context
//   useEffect(() => {
//     if (user) {
//       setForm({
//         name: user.name || "",
//         email: user.email || "",
//         age: user.age || "",
//       });
//     }
//   }, [user]);

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axiosClient.put("/patient/update-profile", form);
//       setMessage("Profile updated successfully!");

//       // Update user in localStorage also
//       localStorage.setItem("user", JSON.stringify(res.data));
//     } catch (err) {
//       setMessage("Error updating profile");
//     }
//   };

//   return (
//     <div>
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">Profile</h1>

//       {message && (
//         <p className="p-3 bg-green-100 text-green-700 rounded mb-4">
//           {message}
//         </p>
//       )}

//       <form
//         onSubmit={handleUpdate}
//         className="bg-white p-6 rounded-xl shadow-md w-full max-w-xl"
//       >
//         <div className="mb-4">
//           <label className="font-semibold text-gray-700">Full Name</label>
//           <input
//             type="text"
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="font-semibold text-gray-700">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             className="w-full p-3 mt-1 border rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed"
//             readOnly
//           />
//         </div>

//         <div className="mb-4">
//           <label className="font-semibold text-gray-700">Age</label>
//           <input
//             type="number"
//             name="age"
//             value={form.age}
//             onChange={handleChange}
//             className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-lg"
//         >
//           Save Changes
//         </button>
//       </form>
//     </div>
//   );
// }
