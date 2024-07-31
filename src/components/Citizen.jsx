import React from "react";

const Citizen = ({ citizen, index, toggleStatus }) => {
  return (
    <div className="citizenContainer">
      <div className="citizenNumber">{index + 1}</div>
      <div className="citizen-details">
        <h3 className="citizen-name">{citizen.name}</h3>
        <p className="citizen-age">Age: {citizen.age}</p>
        <p className="citizen-address">Address: {citizen.address}</p>
        <p className="citizen-status">Status: {citizen.status}</p>
      </div>
      <button onClick={() => toggleStatus(index)} className="toggle-button">
        Toggle Status
      </button>
    </div>
  );
};

export default Citizen;
