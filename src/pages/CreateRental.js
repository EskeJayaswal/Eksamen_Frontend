import React from "react";
import { useState, useEffect } from "react";
import facade from "../apiFacade";

const CreateRental = ({ role }) => {
  const [rental, setRental] = useState({
    startDate: "",
    endDate: "",
    priceAnnual: "",
    deposit: "",
    contactPerson: "",
  });

  function handle(e) {
    const newRental = { ...rental };
    newRental[e.target.id] = e.target.value;
    setRental(newRental);
  }

  const saveRental = (a) => {
    a.preventDefault();
    facade.createRental(rental);
  };

  return (
    <div>
      <h1>Create a New Rental</h1>

      <input
        onChange={(e) => handle(e)}
        id="startDate"
        value={rental.startDate}
        placeholder="Start date of rental"
        type="text"
      />
      <input
        onChange={(e) => handle(e)}
        id="endDate"
        value={rental.endDate}
        placeholder="End date of rental"
        type="text"
      />
      <input
        onChange={(e) => handle(e)}
        id="priceAnnual"
        value={rental.priceAnnual}
        placeholder="Annual price"
        type="number"
      />
      <input
        onChange={(e) => handle(e)}
        id="deposit"
        value={rental.deposit}
        placeholder="Deposit"
        type="number"
      />
      <input
        onChange={(e) => handle(e)}
        id="contactPerson"
        value={rental.contactPerson}
        placeholder="Contact Person"
        type="text"
      />
      {role === "admin" ? (
        <button onClick={saveRental}>Create Rental</button>
      ) : null}
    </div>
  );
};

export default CreateRental;
