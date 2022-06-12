import React from "react";
import { Link } from "react-router-dom";
import facade from "../apiFacade";

function Boat({ role, boat: { id, brand, make, name, image, harbour } }) {
  const removeFromHarbour = () => {
    facade.removeBoatFromHarbour(id);
  };

  const addToHarbour = () => {
    facade.addBoatToHarbour(1, id);
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>
        {role === "admin" && harbour === "" ? (
          <button onClick={addToHarbour}>Add to Harbour</button>
        ) : null}

        {role === "admin" && harbour !== "" ? (
          <button onClick={removeFromHarbour}>Remove from Harbour</button>
        ) : null}

        <Link to={`/boatowners/${id}`}>
          <button>Get owners</button>
        </Link>
      </td>
    </tr>
  );
}

export default Boat;
