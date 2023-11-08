import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CourseListing from "./components/CourseListing";
import CourseDetails from "./components/CourseDetails";
import StudentDashboard from "./components/StudentDashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full min-h-full">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CourseListing />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/student/dashboard" element={<StudentDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
