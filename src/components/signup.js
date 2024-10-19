import React, { useState } from "react";
import Logo from "./assets/image 650 1.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    companySize: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Sign up the user
      await axios.post("http://localhost:8080/api/users/signup", formData);

      // Send email OTP
      await axios.post("http://localhost:8080/api/mail/sendmail", {
        email: formData.email,
      });

      // Navigate to OTP verification page
      await axios.post("http://localhost:8080/api/sms/sendsms", {
        phoneNumber: formData.phoneNumber,
      });

      // Navigate to OTP verification page
      navigate("/verifyotp", {
        state: { email: formData.email, phoneNumber: formData.phoneNumber },
      });
    } catch (error) {
      setError(
        error.response?.data?.message || "An error occurred during signup"
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-between items-center p-4">
        <div className="">
          <img src={Logo} alt="Logo" />
        </div>
        <h1 className="text-xl font-semibold text-[#576474]">Contact</h1>
      </header>

      <div className="flex-1 flex">
        <div className="w-1/2 flex flex-col justify-center pl-20">
          <div className="relative mb-4">
            <p className="text-gray-600 max-w-md">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </p>
          </div>
        </div>

        <div className="w-1/2 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg border-[1px] border-blue-400 w-[55%]">
            <div className="flex justify-center items-center">
              <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full p-2 border rounded-md pl-8"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <span className="absolute left-2 top-2.5 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full pl-10 pr-4 py-2 border rounded-md"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <span className="absolute left-2 top-2.5 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </span>
              </div>
              <div className="relative">
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="w-full pl-10 pr-4 py-2 border rounded-md"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
                <span className="absolute left-2 top-2.5 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </span>
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  className="w-full p-2 border rounded-md pl-8"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
                <span className="absolute left-2 top-2.5 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
              <div className="relative">
                <input
                  type="number"
                  name="companySize"
                  placeholder="Employee Size"
                  className="w-full p-2 border rounded-md pl-8"
                  value={formData.companySize}
                  onChange={handleChange}
                  required
                />
                <span className="absolute left-2 top-2.5 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </span>
              </div>

              <div className="relative">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full p-2 border rounded-md pl-8"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              {error && <p className="text-red-500">{error}</p>}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 mt-5 rounded-md"
              >
                Proceed
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
