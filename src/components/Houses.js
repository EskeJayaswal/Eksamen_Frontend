import React from "react";
import { Link } from "react-router-dom";

function Houses({ house: { id, address, city, numberOfRooms } }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{address}</td>
      <td>{city}</td>
      <td>{numberOfRooms}</td>

      <td>
        <Link to={`/tenantdetails/${id}`}>
          <button>See Tenants</button>
        </Link>
      </td>
    </tr>
  );
}

export default Houses;
