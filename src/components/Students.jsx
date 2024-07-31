import React, { useState } from "react";
import Student from "./Student";

const Students = () => {
  const students = [
    {
      name: "Frank Ocean",
      department: "Science",
      finalGrade: 85,
      status: "Pass",
    },
    {
      name: "Daniel Caesar",
      department: "Arts",
      finalGrade: 90,
      status: "Pass",
    },
    {
      name: "Billie Eilish",
      department: "Commerce",
      finalGrade: 75,
      status: "Pass",
    },
    {
      name: "Sabrina Carpenter",
      department: "Science",
      finalGrade: 95,
      status: "Pass",
    },
    {
      name: "Summer Walker",
      department: "Arts",
      finalGrade: 80,
      status: "Pass",
    },
    {
      name: "Abel Tesfaye",
      department: "Commerce",
      finalGrade: 88,
      status: "Pass",
    },
    {
      name: "Taylor Swift",
      department: "Science",
      finalGrade: 92,
      status: "Pass",
    },
    {
      name: "Brent Faiyaz",
      department: "Arts",
      finalGrade: 78,
      status: "Pass",
    },
    {
      name: "Grent Perez",
      department: "Commerce",
      finalGrade: 60,
      status: "Fail",
    },
    {
      name: "Steve Lacy",
      department: "Science",
      finalGrade: 74,
      status: "Fail",
    },
  ];

  const [filter, setFilter] = useState("All");

  const handleFilterChange = (status) => {
    setFilter(status);
  };

  const filteredStudents = students.filter(
    (student) => filter === "All" || student.status === filter
  );

  return (
    <div className="students-container">
      <h1>STUDENTS LIST</h1>
      <div className="students-filter">
        <div className="filter-buttons">
          <button onClick={() => handleFilterChange("Pass")}>PASS</button>
          <button onClick={() => handleFilterChange("Fail")}>FAIL</button>
          <button onClick={() => handleFilterChange("All")}>ALL</button>
        </div>
      </div>
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Student Names</th>
              <th>Department</th>
              <th>Final Grade</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <Student key={index} student={student} index={index + 1} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;
