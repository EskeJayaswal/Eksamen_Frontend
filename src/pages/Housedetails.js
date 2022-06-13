import React from "react";
import { useState, useEffect } from "react";
import facade from "../apiFacade";
import { useParams, Link } from "react-router-dom";

const Housedetails = () => {
  const [house, setHouse] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getHouseFromServer = async () => {
      const houseFromServer = await facade.fetchHouseByRentalId(id);
      setHouse(houseFromServer);
    };
    getHouseFromServer();
  }, []);

  return (
    <div>
      <h1>House</h1>
      <table className="table-container">
        <thead>
          <tr>
            <th>Address: </th>
            <th>City: </th>
            <th>Number of Rooms: </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{house.address}</td>
            <td>{house.city}</td>
            <td>{house.numberOfRooms}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Housedetails;
