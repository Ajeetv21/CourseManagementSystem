// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CourseTypeManager from "./components/CourseTypeManager";
import CourseManager from "./components/CourseManager";
import CourseOfferingManager from "./components/CourseOfferingsManager";
import StudentRegistration from "./components/StudentRegistration";

function App() {

  const [courses, setCourses] = useState([]);
  const [courseTypes, setCourseTypes] = useState([]);
  const [courseOfferings, setCourseOfferings] = useState([]);

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/course-types">Course Types</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/course-offerings">Course Offerings</Link>
          <Link to="/student-registration">Student Registration</Link>
        </nav>
        <Routes>
          <Route
            path="/course-types"
            element={<CourseTypeManager courseTypes={courseTypes} setCourseTypes={setCourseTypes} />}
          />
          <Route
            path="/courses"
            element={<CourseManager courses={courses} setCourses={setCourses} />}
          />
          <Route
            path="/course-offerings"
            element={
              <CourseOfferingManager
                courses={courses}
                courseTypes={courseTypes}
                courseOfferings={courseOfferings}
                setCourseOfferings={setCourseOfferings}
              />
            }
          />
          <Route
            path="/student-registration"
            element={
              <StudentRegistration
                courseOfferings={courseOfferings}
                setCourseOfferings={setCourseOfferings}
              />
            }
          />
          <Route path="/" element={<h1>Welcome to the Course Management System</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
