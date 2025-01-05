
import React, { useState } from "react";

function StudentRegistration({ courseOfferings, setCourseOfferings }) {
  const [selectedOffering, setSelectedOffering] = useState("");
  const [studentName, setStudentName] = useState("");

  const handleRegister = () => {
    if (!selectedOffering || !studentName) return;

    const updatedOfferings = courseOfferings.map((offering) => {
      if (offering.name === selectedOffering) {
        return {
          ...offering,
          students: [...offering.students, studentName],
        };
      }
      return offering;
    });

    setCourseOfferings(updatedOfferings);
    setStudentName("");
  };

  const handleDeleteStudent = (offeringName, studentIndex) => {
    const updatedOfferings = courseOfferings.map((offering) => {
      if (offering.name === offeringName) {
        const updatedStudents = offering.students.filter(
          (_, index) => index !== studentIndex
        );
        return { ...offering, students: updatedStudents };
      }
      return offering;
    });

    setCourseOfferings(updatedOfferings);
  };

  return (
    <div>
      <h2>Student Registration</h2>
      <div>
        <select
          onChange={(e) => setSelectedOffering(e.target.value)}
          value={selectedOffering}
        >
          <option value="">Select a course offering</option>
          {courseOfferings.map((offering, index) => (
            <option key={index} value={offering.name}>
              {offering.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          placeholder="Enter student name"
        />
        <button onClick={handleRegister}>Register</button>
      </div>
      <div>
        <h3>Registered Students</h3>
        {courseOfferings.map((offering, index) => (
          <div key={index}>
            <h4>{offering.name}</h4>
            <ul>
              {offering.students.map((student, studentIndex) => (
                <li key={studentIndex}>
                  {student}{" "}
                  <button
                    onClick={() => handleDeleteStudent(offering.name, studentIndex)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentRegistration;
