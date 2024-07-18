import React from "react";

const Students = () => {
  const students = [
    {
      name: "Daniel Caesar",
      department: "Science",
      finalGrade: 99,
      status: "Pass",
    },
    {
      name: "Frank Ocean",
      department: "Commerce",
      finalGrade: 97,
      status: "Pass",
    },
    {
      name: "Brent Faiyaz",
      department: "Arts",
      finalGrade: 87,
      status: "Pass",
    },
    {
      name: "Aubrey Graham",
      department: "Science",
      finalGrade: 85,
      status: "Pass",
    },
    {
      name: "Kendrick Lamar",
      department: "Arts",
      finalGrade: 90,
      status: "Pass",
    },
    {
      name: "Jennie Kim",
      department: "Arts",
      finalGrade: 86,
      status: "Pass",
    },
    {
      name: "Travis Scott",
      department: "Commerce",
      finalGrade: 99,
      status: "Pass",
    },
    {
      name: "Steve Lacy",
      department: "Science",
      finalGrade: 87,
      status: "Pass",
    },
    {
      name: "Abel Tesfaye",
      department: "Commerce",
      finalGrade: 0,
      status: "Fail",
    },
    {
      name: "Grent Perez",
      department: "Science",
      finalGrade: 0,
      status: "Fail",
    },
  ];

  const Student = ({ student, index }) => (
    <tr>
      <td>{index + 1}</td>
      <td>{student.name}</td>
      <td>{student.department}</td>
      <td>{student.status === "Pass" ? student.finalGrade : ""}</td>
      <td>{student.status}</td>
    </tr>
  );

  return (
    <div className="container">
      <h1>Students Record</h1>
      <table border="1">
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
          {students.map((student, index) => (
            <Student key={index} student={student} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
