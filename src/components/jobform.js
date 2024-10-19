import React, { useState } from "react";
import axios from "axios"; // Import axios

import Logo from "./assets/image 650 1.png";

const JobForm = () => {
  const [emails, setEmails] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [endDate, setEndDate] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // New state for success message

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addEmail();
    }
  };

  const addEmail = () => {
    const trimmedInput = inputValue.trim();
    if (trimmedInput && !emails.includes(trimmedInput)) {
      setEmails([...emails, trimmedInput]);
      setInputValue("");
    }
  };

  const removeEmail = (emailToRemove) => {
    setEmails(emails.filter((email) => email !== emailToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jobData = {
      jobTitle,
      jobDescription,
      experienceLevel,
      addCandidate: emails,
      endDate,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/jobs/postJob",
        jobData,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MTNhMWQyMDlkYzFjZWJiN2FjNmMxMiIsImlhdCI6MTcyOTM0MDMzNiwiZXhwIjoxNzI5MzQzOTM2fQ.t1Kjc2_iyYKrVtV7evj_NNfC17GFQPF4V9WUuoidjzE",
            "Content-Type": "application/json",
          },
        }
      );

      // Handle success (e.g., show a success message or clear the form)
      setSuccessMessage("Job posted successfully!");
      console.log("Job posted successfully:", response.data);

      // Hide the success message after 1000 milliseconds (1 second)
      setTimeout(() => {
        setSuccessMessage("");
      }, 800);
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error("Error posting job:", error);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="flex justify-between items-center p-6 border-b border-[#A8A8A8]">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold text-[#535353B2]">Contact</h1>
          <div className="flex items-center gap-3 border border-[#A8A8A8] p-2 rounded-lg">
            <svg
              width="20"
              height="20"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="15.7195" cy="16.5" r="15.5488" fill="#A8A8A8" />
            </svg>
            <span>Your Name</span>
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
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-20 border-r border-[#A8A8A8] flex flex-col items-center pt-10">
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
        </aside>

        <form className="flex-1 p-8 overflow-auto" onSubmit={handleSubmit}>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex items-center">
              <label className="w-1/4 text-lg font-semibold">Job Title</label>
              <input
                type="text"
                placeholder="Enter Job Title"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                className="flex-1 border border-[#DADCE0] h-12 px-4 rounded-lg outline-none "
              />
            </div>

            <div className="flex items-start">
              <label className="w-1/4 text-lg font-semibold pt-2">
                Job Description
              </label>
              <textarea
                placeholder="Enter Job Description"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                className="flex-1 border border-[#DADCE0] h-36 p-4 rounded-lg outline-none resize-none "
              />
            </div>

            <div className="flex items-center">
              <label className="w-1/4 text-lg font-semibold">
                Experience Level
              </label>
              <select
                value={experienceLevel}
                onChange={(e) => setExperienceLevel(e.target.value)}
                className="flex-1 border border-[#DADCE0] h-12 px-4 rounded-lg outline-none "
              >
                <option value="" disabled>
                  Select Experience Level
                </option>
                <option value="fresher">Fresher</option>
                <option value="junior">Junior</option>
                <option value="mid">Mid-Level</option>
                <option value="senior">Senior</option>
                <option value="lead">Lead</option>
                <option value="expert">Expert</option>
              </select>
            </div>

            <div className="flex items-start">
              <label className="w-1/4 text-lg font-semibold pt-2">
                Add Candidate
              </label>
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 p-2 border border-[#DADCE0] rounded-lg min-h-[48px]">
                  {emails.map((email, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded"
                    >
                      {email}
                      <button
                        type="button"
                        onClick={() => removeEmail(email)}
                        className="ml-1 text-blue-500"
                      >
                        x
                      </button>
                    </span>
                  ))}
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter email and press Enter"
                    className="flex-1 border-none outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <label className="w-1/4 text-lg font-semibold">End Date</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="flex-1 border border-[#DADCE0] h-12 px-4 rounded-lg outline-none "
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Post Job
              </button>
            </div>

            {successMessage && (
              <div className="absolute inset-0 flex justify-center items-center  ">
                <div className="bg-green-200 text-green-800 p-4 rounded-lg">
                  {successMessage}
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobForm;
