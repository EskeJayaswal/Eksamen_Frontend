import React from "react";
import { useState, useEffect } from "react";
import facade from "../apiFacade";

const CreateHouse = ({ role }) => {
  const [house, setHouse] = useState({
    address: "",
    city: "",
    numberOfRooms: "",
  });

  function handle(e) {
    const newHouse = { ...house };
    newHouse[e.target.id] = e.target.value;
    setHouse(newHouse);
  }

  const saveHouse = (a) => {
    a.preventDefault();
    facade.createHouse(house);
  };

  return (
    <div>
      <h1>Create a New House</h1>

      <input
        onChange={(e) => handle(e)}
        id="address"
        value={house.address}
        placeholder="Address"
        type="text"
      />
      <input
        onChange={(e) => handle(e)}
        id="city"
        value={house.city}
        placeholder="City"
        type="text"
      />
      <input
        onChange={(e) => handle(e)}
        id="numberOfRooms"
        value={house.numberOfRooms}
        placeholder="Number of Rooms"
        type="text"
      />

      {role === "admin" ? (
        <button onClick={saveHouse}>Create House</button>
      ) : null}
    </div>
  );
};

export default CreateHouse;
