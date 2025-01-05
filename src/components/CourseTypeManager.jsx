
import React, { useState } from "react";

function CourseTypeManager({ courseTypes, setCourseTypes }) {
  const [newCourseType, setNewCourseType] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrEdit = () => {
    if (editIndex !== null) {
      const updatedCourseTypes = [...courseTypes];
      updatedCourseTypes[editIndex] = newCourseType;
      setCourseTypes(updatedCourseTypes);
      setEditIndex(null);
    } else if (newCourseType && !courseTypes.includes(newCourseType)) {
      setCourseTypes([...courseTypes, newCourseType]);
    }
    setNewCourseType("");
  };

  const handleDelete = (index) => {
    const updatedCourseTypes = courseTypes.filter((_, i) => i !== index);
    setCourseTypes(updatedCourseTypes);
  };

  const handleEdit = (index) => {
    setNewCourseType(courseTypes[index]);
    setEditIndex(index);
  };

  return (
    <div>
      <h2>Course Types</h2>
      <input
        type="text"
        value={newCourseType}
        onChange={(e) => setNewCourseType(e.target.value)}
        placeholder="Add or edit a course type"
      />
      <button onClick={handleAddOrEdit}>{editIndex !== null ? "Update" : "Add"}</button>
      <ul>
        {courseTypes.map((type, index) => (
          <li key={index}>
            {type}{" "}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseTypeManager;
