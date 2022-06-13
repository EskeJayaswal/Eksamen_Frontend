import React from "react";

function Tenant({ tenant: { id, name, phone, job } }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{job}</td>
    </tr>
  );
}

export default Tenant;
