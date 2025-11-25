import { useState } from "react";
import axiosClient from "../../api/axiosClient";

export default function PatientRegister() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axiosClient.post("/auth/register", form);
      if (response.status === 201 || response.status === 200) {
        setSuccess("Registration successful! Redirecting to login...");
        setTimeout(() => {
          window.location.href = "/patient/login";
        }, 1500);
      }
    } catch (err) {
      setError("Email already exists or invalid details");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-blue-500 p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg">

        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Patient Registration
        </h2>

        {error && (
          <p className="bg-red-100 text-red-700 p-2 rounded text-sm mb-4">
            {error}
          </p>
        )}

        {success && (
          <p className="bg-green-100 text-green-700 p-2 rounded text-sm mb-4">
            {success}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="text-gray-700 font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-purple-400"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-purple-400"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="text-gray-700 font-semibold">Password</label>
            <input
              type="password"
              name="password"
              className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-purple-400"
              placeholder="Create a password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="text-gray-700 font-semibold">Age</label>
            <input
              type="number"
              name="age"
              className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-purple-400"
              placeholder="Enter your age"
              value={form.age}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold p-3 rounded-lg transition"
          >
            Register
          </button>

        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a
            href="/patient/login"
            className="text-purple-600 font-semibold hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
