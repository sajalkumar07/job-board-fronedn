import React, { useState } from "react";
import Logo from "./assets/image 650 1.png";
import { Link } from "react-router-dom";

const CreateInterview = () => {
  return (
    <div>
      {" "}
      <header className="flex justify-between items-center p-6 border-b-[1px] border-[#A8A8A8]">
        <div className="">
          <img src={Logo} alt="Logo" />
        </div>
        <div className=" flex justify-between items-center space-x-4">
          {" "}
          {/* Added ml-2 to give a little space if needed */}
          <h1 className="text-xl font-semibold text-[#576474]">Contact</h1>
          <div className=" flex justify-between items-center gap-3 border-[1px] border-[#A8A8A8] p-2 rounded-lg">
            <div className="">
              <svg
                width="20"
                height="20"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="15.7195" cy="16.5" r="15.5488" fill="#A8A8A8" />
              </svg>
            </div>
            Your Name
            <div>
              <svg
                width="10"
                height="10"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.00001 15.8293L0.382005 0.902439L17.618 0.902441L9.00001 15.8293Z"
                  fill="#A8A8A8"
                />
              </svg>
            </div>
          </div>
        </div>
      </header>
      <div className="flex">
        <sidebar className="pt-10 border-r-[1px] border-[#A8A8A8]  flex flex-col w-20 h-[87.4vh] items-center  overflow-hidden ">
          <div className="">
            <svg
              width="30"
              height="30"
              viewBox="0 0 35 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9034 33.6513V28.1565C11.9033 26.7641 13.0356 25.6329 14.438 25.6241H19.5876C20.9963 25.6241 22.1383 26.7579 22.1383 28.1565V33.6354C22.1383 34.843 23.1197 35.8245 24.3361 35.8333H27.8494C29.4902 35.8375 31.0653 35.1933 32.227 34.0429C33.3888 32.8925 34.0417 31.3304 34.0417 29.7014V14.093C34.0417 12.7771 33.4541 11.5289 32.4374 10.6846L20.502 1.20806C18.4157 -0.449489 15.4359 -0.395944 13.4113 1.33548L1.73256 10.6846C0.667827 11.504 0.0314479 12.7559 0 14.093V29.6855C0 33.0808 2.77239 35.8333 6.19231 35.8333H9.62535C10.211 35.8375 10.7742 35.6095 11.1898 35.1998C11.6054 34.7902 11.8392 34.2328 11.8392 33.6513H11.9034Z"
                fill="#576474"
              />
            </svg>
          </div>
        </sidebar>
        <div className="w-[100%] h-[87.4vh]  p-10 -mt-1">
          <Link to="/create-interview/jobform">
            <button className="bg-[#0B66EF] w-[200px] h-[43px] text-white font-semibold rounded-lg">
              Create Interview
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateInterview;
