
import React, { useState } from "react";

function CourseOfferingManager({
  courses,
  courseTypes,
  courseOfferings,
  setCourseOfferings,
}) {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedCourseType, setSelectedCourseType] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrEdit = () => {
    const newOffering = {
      name: `${selectedCourse} - ${selectedCourseType}`,
      students: [],
    };

    if (editIndex !== null) {
      const updatedOfferings = [...courseOfferings];
      updatedOfferings[editIndex] = newOffering;
      setCourseOfferings(updatedOfferings);
      setEditIndex(null);
    } else if (selectedCourse && selectedCourseType) {
      setCourseOfferings([...courseOfferings, newOffering]);
    }

    setSelectedCourse("");
    setSelectedCourseType("");
  };

  const handleEdit = (index) => {
    const offering = courseOfferings[index];
    const [course, courseType] = offering.name.split(" - ");
    setSelectedCourse(course);
    setSelectedCourseType(courseType);
    setEditIndex(index);
  };

  return (
    <div>
      <h2>Course Offerings</h2>
      <select onChange={(e) => setSelectedCourse(e.target.value)} value={selectedCourse}>
        <option value="">Select a course</option>
        {courses.map((course, index) => (
          <option key={index} value={course}>
            {course}
          </option>
        ))}
      </select>
      <select
        onChange={(e) => setSelectedCourseType(e.target.value)}
        value={selectedCourseType}
      >
        <option value="">Select a course type</option>
        {courseTypes.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>
      <button onClick={handleAddOrEdit}>{editIndex !== null ? "Update" : "Create Offering"}</button>
      <ul>
        {courseOfferings.map((offering, index) => (
          <li key={index}>
            {offering.name}{" "}
            <button onClick={() => handleEdit(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseOfferingManager;
