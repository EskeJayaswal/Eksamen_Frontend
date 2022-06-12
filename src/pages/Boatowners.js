import React from "react";
import { useState, useEffect } from "react";
import facade from "../apiFacade";
import { useParams } from "react-router-dom";

const Boatowners = () => {
  const [owners, setOwners] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getOwnersFromServer = async () => {
      const boatFromServer = await facade.fetchOwnersByBoatId(id);
      setOwners(boatFromServer);
    };
    getOwnersFromServer();
  }, []);

  return (
    <div>
      <h1>Owners</h1>
      <table className="table-container">
        <thead>
          <tr>
            <th>Name: </th>
            <th>Address: </th>
            <th>Phone: </th>
          </tr>
        </thead>

        <tbody>
          {owners.map((owner) => (
            <tr>
              <td>{owner.name}</td>
              <td>{owner.address}</td>
              <td>{owner.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Boatowners;
