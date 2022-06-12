import React from "react";

function Owner({ owner: { id, name, address, phone } }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{address}</td>
      <td>{phone}</td>
    </tr>
  );
}

export default Owner;
