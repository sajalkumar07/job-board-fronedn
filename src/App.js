import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/signup";
import Verifyotp from "./components/verfiytotp";
import Createinterview from "./components/createinterview";
import JobForm from "./components/jobform";
import LoginForm from "./components/login";

function App() {
  return (
    <div className="App">
      {" "}
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/create-interview" element={<Createinterview />} />
          <Route path="/create-interview/jobform" element={<JobForm />} />
          <Route path="/verifyotp" element={<Verifyotp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
