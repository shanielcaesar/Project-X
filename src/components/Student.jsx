import React from "react";

const Student = ({ student, index }) => {
  return (
    <tr>
      <td>{index}</td>
      <td>{student.name}</td>
      <td>{student.department}</td>
      <td>{student.status === "Pass" ? student.finalGrade : "N/A"}</td>
      <td>{student.status}</td>
    </tr>
  );
};

export default Student;
