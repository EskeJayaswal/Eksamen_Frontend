import React from "react";
import { Link } from "react-router-dom";

function Tenant({ tenant: { id } }) {
  return (
    <tr>
      <Link to={`/tenant/${id}`}>
        <button>Get Rentals</button>
      </Link>
    </tr>
  );
}

export default Tenant;
