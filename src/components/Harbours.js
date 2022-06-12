import React from "react";
import { Link } from "react-router-dom";

function Harbour({ harbour: { id, name, address, capacity } }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>
        <Link to={`/harbourboats/${id}`}>
          <button>Get boats</button>
        </Link>
      </td>
    </tr>
  );
}

export default Harbour;
