import React from "react";
import { useState, useEffect } from "react";
import facade from "../apiFacade";
import { useParams, Link } from "react-router-dom";
import Tenants from "../components/Tenants";

const Teantdetails = () => {
  const [tenant, setTenant] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getTenantsFromServer = async () => {
      const tenantsFromServer = await facade.fetchTenantsByHouseId(id);
      setTenant(tenantsFromServer);
    };
    getTenantsFromServer();
  }, []);

  return (
    <div>
      <h1>Tenants</h1>
      <table className="table-container">
        <thead>
          <tr>
            <th>ID: </th>
            <th>Name: </th>
            <th>Phone: </th>
            <th>Job: </th>
          </tr>
        </thead>

        {/* <tbody>
          <tr>
            <td>{tenant.id}</td>
            <td>{tenant.name}</td>
            <td>{tenant.phone}</td>
            <td>{tenant.job}</td>
          </tr>
        </tbody> */}

        <tbody>
          {tenant.map((tenant) => (
            <Tenants key={tenant.id} tenant={tenant} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Teantdetails;
