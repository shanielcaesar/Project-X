import React, { useState, useEffect } from "react";
import Citizen from "./Citizen";
import SearchFilter from "./SearchFilter";

const Citizens = () => {
  const [citizens, setCitizens] = useState([
    {
      name: "John",
      age: 31,
      address: "123 Hollywood Blvd, Los Angeles, CA",
      status: "Active",
    },
    {
      name: "Jane",
      age: 33,
      address: "456 Abbey Road, London, UK",
      status: "Active",
    },
    {
      name: "Mike",
      age: 29,
      address: "789 Park Avenue, New York, NY",
      status: "Active",
    },
    {
      name: "Lisa",
      age: 39,
      address: "101 Sunset Blvd, Los Angeles, CA",
      status: "Active",
    },
    {
      name: "John",
      age: 42,
      address: "202 Malibu Rd, Malibu, CA",
      status: "Active",
    },
    {
      name: "Jane",
      age: 26,
      address: "303 Broadway, New York, NY",
      status: "Active",
    },
    {
      name: "Mike",
      age: 22,
      address: "404 Rodeo Drive, Beverly Hills, CA",
      status: "Inactive",
    },
    {
      name: "Lisa",
      age: 40,
      address: "505 Santa Monica Blvd, Santa Monica, CA",
      status: "Inactive",
    },
    {
      name: "John",
      age: 38,
      address: "606 Hollywood Hills, Los Angeles, CA",
      status: "Inactive",
    },
    {
      name: "Jane",
      age: 36,
      address: "707 Fifth Ave, New York, NY",
      status: "Inactive",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCitizens, setFilteredCitizens] = useState(citizens);
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    filterCitizens();
  }, [searchQuery, citizens, statusFilter]);

  const filterCitizens = () => {
    let results = citizens.filter(
      (citizen) =>
        citizen.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        citizen.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        citizen.age.toString().includes(searchQuery)
    );

    if (statusFilter !== "All") {
      results = results.filter((citizen) => citizen.status === statusFilter);
    }

    setFilteredCitizens(results);
  };

  const toggleStatus = (index) => {
    const newCitizens = [...citizens];
    const citizenIndex = citizens.indexOf(filteredCitizens[index]);
    newCitizens[citizenIndex].status =
      newCitizens[citizenIndex].status === "Active" ? "Inactive" : "Active";
    setCitizens(newCitizens);
  };

  const handleStatusFilterChange = (filter) => {
    setStatusFilter(filter);
  };

  return (
    <div className="citizens">
      <h1>CITIZENS LIST</h1>
      <div className="filter-buttons">
        <button onClick={() => handleStatusFilterChange("All")}>All</button>
        <button onClick={() => handleStatusFilterChange("Active")}>
          Active
        </button>
        <button onClick={() => handleStatusFilterChange("Inactive")}>
          Inactive
        </button>
        <SearchFilter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>
      <div className="citizens-list">
        {filteredCitizens.map((citizen, index) => (
          <Citizen
            key={index}
            citizen={citizen}
            index={index}
            toggleStatus={toggleStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default Citizens;
