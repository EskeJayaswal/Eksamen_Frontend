import React, { useState, useEffect } from "react";
import "../styling/Admin.css";
import facade from "../apiFacade";
import Owner from "../components/Owner";

const User = () => {
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    const getOwners = async () => {
      const ownerFromServer = await facade.fetchOwners();
      setOwners(ownerFromServer);
    };

    getOwners();
  }, []);

  return (
    <div>
      <h1>All owners</h1>
      <table className="table-container">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
          </tr>
        </thead>

        <tbody>
          {owners.map((owner) => (
            <Owner key={owner.id} owner={owner} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
