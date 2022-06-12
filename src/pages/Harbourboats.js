import React from "react";
import { useState, useEffect } from "react";
import facade from "../apiFacade";
import { useParams } from "react-router-dom";

const Harbourboats = () => {
  const [boats, setBoats] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getBoatsFromHarbour = async () => {
      const harbourFromServer = await facade.fetchBoatsByHarbourId(id);
      setBoats(harbourFromServer);
    };
    getBoatsFromHarbour();
  }, []);

  return (
    <div>
      <h1>Boats</h1>
      <table className="table-container">
        <thead>
          <tr>
            <th>Name: </th>
            <th>Brand: </th>
            <th>Make: </th>
          </tr>
        </thead>

        <tbody>
          {boats.map((boat) => (
            <tr>
              <td>{boat.name}</td>
              <td>{boat.brand}</td>
              <td>{boat.make}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Harbourboats;
