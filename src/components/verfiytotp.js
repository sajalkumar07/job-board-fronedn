import React from "react";
import Logo from "./assets/image 650 1.png";

const SignUpForm = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-between items-center p-4">
        <div className="">
          <img src={Logo} alt="Logo" />{" "}
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
              {" "}
              <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
            </div>

            <form className="space-y-4">
              <div className="relative">
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
                <input
                  type="email"
                  placeholder="Email OTP"
                  className="w-full pl-10 pr-4 py-2 border rounded-md"
                />
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-md">
                Verify
              </button>
              <div className="relative">
                <span className="absolute left-2 top-2.5 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    {" "}
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </span>
                <input
                  type="Name"
                  placeholder="Mobile OTP"
                  className="w-full pl-10 pr-4 py-2 border rounded-md"
                />
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-md">
                Verify
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
