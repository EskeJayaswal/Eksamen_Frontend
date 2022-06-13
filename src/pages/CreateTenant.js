import React from "react";
import { useState, useEffect } from "react";
import facade from "../apiFacade";

const CreateTenant = ({ role }) => {
  const [tenant, setTenant] = useState({
    name: "",
    phone: "",
    job: "",
    userName: "",
    userPass: "",
  });

  function handle(e) {
    const newTenant = { ...tenant };
    newTenant[e.target.id] = e.target.value;
    setTenant(newTenant);
    console.log(newTenant);
  }

  const saveTenant = (a) => {
    a.preventDefault();
    facade.createTenant(tenant);
  };

  return (
    <div>
      <h1>Create a New Tenant</h1>

      <input
        onChange={(e) => handle(e)}
        id="name"
        value={tenant.name}
        placeholder="Name"
        type="text"
      />
      <input
        onChange={(e) => handle(e)}
        id="phone"
        value={tenant.phone}
        placeholder="Phone Number"
        type="text"
      />
      <input
        onChange={(e) => handle(e)}
        id="job"
        value={tenant.job}
        placeholder="Job"
        type="text"
      />
      <input
        onChange={(e) => handle(e)}
        id="userName"
        value={tenant.userName}
        placeholder="Username"
        type="text"
      />
      <input
        onChange={(e) => handle(e)}
        id="userPass"
        value={tenant.userPass}
        placeholder="Password"
        type="text"
      />
      {role === "admin" ? (
        <button onClick={saveTenant}>Create Tenant</button>
      ) : null}
    </div>
  );
};

export default CreateTenant;
