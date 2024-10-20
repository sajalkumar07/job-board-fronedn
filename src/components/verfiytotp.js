import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../public/image 650 1.png";

const OtpVerify = () => {
  const [emailOtp, setEmailOtp] = useState("");
  const [mobileOtp, setMobileOtp] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isMobileVerified, setIsMobileVerified] = useState(false);
  const navigate = useNavigate();

  const handleEmailVerify = () => {
    if (emailOtp.length === 4) {
      setIsEmailVerified(true);
    }
  };

  const handleMobileVerify = () => {
    if (mobileOtp.length === 4) {
      setIsMobileVerified(true);
    }
  };

  const handleSubmit = () => {
    if (isEmailVerified && isMobileVerified) {
      navigate("/login"); // redirect to /login after verification
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

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
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
                  type="text"
                  placeholder="Email OTP"
                  className="w-full pl-10 pr-4 py-2 border rounded-md"
                  value={emailOtp}
                  maxLength={4} // Limit to 4 digits
                  onChange={(e) => setEmailOtp(e.target.value)}
                />
                {isEmailVerified && (
                  <span className="absolute right-2 top-2.5 text-green-500">
                    <svg
                      width="27"
                      height="27"
                      viewBox="0 0 27 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_1_155"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="27"
                        height="27"
                      >
                        <rect
                          y="0.714478"
                          width="26.2246"
                          height="26.2246"
                          fill="#D9D9D9"
                        />
                      </mask>
                      <g mask="url(#mask0_1_155)">
                        <path
                          d="M11.5825 18.8531L19.2859 11.1497L17.7562 9.6199L11.5825 15.7936L8.46828 12.6794L6.93851 14.2092L11.5825 18.8531ZM13.1122 24.7537C11.6007 24.7537 10.1802 24.4669 8.85072 23.8932C7.52128 23.3195 6.36485 22.541 5.38143 21.5576C4.398 20.5741 3.61946 19.4177 3.0458 18.0883C2.47213 16.7588 2.1853 15.3383 2.1853 13.8268C2.1853 12.3152 2.47213 10.8947 3.0458 9.56526C3.61946 8.23582 4.398 7.07939 5.38143 6.09597C6.36485 5.11254 7.52128 4.334 8.85072 3.76034C10.1802 3.18667 11.6007 2.89984 13.1122 2.89984C14.6238 2.89984 16.0443 3.18667 17.3737 3.76034C18.7032 4.334 19.8596 5.11254 20.843 6.09597C21.8264 7.07939 22.605 8.23582 23.1786 9.56526C23.7523 10.8947 24.0391 12.3152 24.0391 13.8268C24.0391 15.3383 23.7523 16.7588 23.1786 18.0883C22.605 19.4177 21.8264 20.5741 20.843 21.5576C19.8596 22.541 18.7032 23.3195 17.3737 23.8932C16.0443 24.4669 14.6238 24.7537 13.1122 24.7537Z"
                          fill="#1EB700"
                        />
                      </g>
                    </svg>
                  </span>
                )}
              </div>
              <button
                type="button"
                className="w-full bg-blue-600 text-white py-2 rounded-md"
                onClick={handleEmailVerify}
              >
                Verify Email
              </button>

              <div className="relative">
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
                <input
                  type="text"
                  placeholder="Mobile OTP"
                  className="w-full pl-10 pr-4 py-2 border rounded-md"
                  value={mobileOtp}
                  maxLength={4} // Limit to 4 digits
                  onChange={(e) => setMobileOtp(e.target.value)}
                />
                {isMobileVerified && (
                  <span className="absolute right-2 top-2.5 text-green-500">
                    <svg
                      width="27"
                      height="27"
                      viewBox="0 0 27 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_1_155"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="27"
                        height="27"
                      >
                        <rect
                          y="0.714478"
                          width="26.2246"
                          height="26.2246"
                          fill="#D9D9D9"
                        />
                      </mask>
                      <g mask="url(#mask0_1_155)">
                        <path
                          d="M11.5825 18.8531L19.2859 11.1497L17.7562 9.6199L11.5825 15.7936L8.46828 12.6794L6.93851 14.2092L11.5825 18.8531ZM13.1122 24.7537C11.6007 24.7537 10.1802 24.4669 8.85072 23.8932C7.52128 23.3195 6.36485 22.541 5.38143 21.5576C4.398 20.5741 3.61946 19.4177 3.0458 18.0883C2.47213 16.7588 2.1853 15.3383 2.1853 13.8268C2.1853 12.3152 2.47213 10.8947 3.0458 9.56526C3.61946 8.23582 4.398 7.07939 5.38143 6.09597C6.36485 5.11254 7.52128 4.334 8.85072 3.76034C10.1802 3.18667 11.6007 2.89984 13.1122 2.89984C14.6238 2.89984 16.0443 3.18667 17.3737 3.76034C18.7032 4.334 19.8596 5.11254 20.843 6.09597C21.8264 7.07939 22.605 8.23582 23.1786 9.56526C23.7523 10.8947 24.0391 12.3152 24.0391 13.8268C24.0391 15.3383 23.7523 16.7588 23.1786 18.0883C22.605 19.4177 21.8264 20.5741 20.843 21.5576C19.8596 22.541 18.7032 23.3195 17.3737 23.8932C16.0443 24.4669 14.6238 24.7537 13.1122 24.7537Z"
                          fill="#1EB700"
                        />
                      </g>
                    </svg>
                  </span>
                )}
              </div>
              <button
                type="button"
                className="w-full bg-blue-600 text-white py-2 rounded-md"
                onClick={handleMobileVerify}
              >
                Verify Mobile
              </button>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-md"
                onClick={handleSubmit}
              >
                Complete Signup
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpVerify;
