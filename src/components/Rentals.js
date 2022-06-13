import React from "react";
import { Link } from "react-router-dom";

function Rental({
  rental: { id, startDate, endDate, priceAnnual, deposit, contactPerson },
}) {
  return (
    <tr>
      <td>{id}</td>
      <td>{startDate}</td>
      <td>{endDate}</td>
      <td>{priceAnnual}</td>
      <td>{deposit}</td>
      <td>{contactPerson}</td>

      <td>
        <Link to={`/housedetails/${id}`}>
          <button>Get house details</button>
        </Link>
      </td>
    </tr>
  );
}

export default Rental;
