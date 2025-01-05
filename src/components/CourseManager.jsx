// src/components/CourseManager.js
import React, { useState } from "react";

function CourseManager({ courses, setCourses }) {
  const [newCourse, setNewCourse] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrEdit = () => {
    if (editIndex !== null) {
      const updatedCourses = [...courses];
      updatedCourses[editIndex] = newCourse;
      setCourses(updatedCourses);
      setEditIndex(null);
    } else if (newCourse && !courses.includes(newCourse)) {
      setCourses([...courses, newCourse]);
    }
    setNewCourse("");
  };

  const handleEdit = (index) => {
    setNewCourse(courses[index]);
    setEditIndex(index);
  };

  return (
    <div>
      <h2>Courses</h2>
      <input
        type="text"
        value={newCourse}
        onChange={(e) => setNewCourse(e.target.value)}
        placeholder="Add or edit a course"
      />
      <button onClick={handleAddOrEdit}>{editIndex !== null ? "Update" : "Add"}</button>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            {course}{" "}
            <button onClick={() => handleEdit(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseManager;
