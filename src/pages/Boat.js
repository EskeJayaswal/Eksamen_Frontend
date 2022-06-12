import { useState, useEffect } from "react";
import facade from "../apiFacade";
import Boats from "../components/Boats";

const Boat = ({ role }) => {
  const [boats, setBoats] = useState([]);

  useEffect(() => {
    const getBoats = async () => {
      const boatFromServer = await facade.fetchBoats();
      setBoats(boatFromServer);
    };
    getBoats();
  }, []);

  return (
    <div>
      <h1>Boats</h1>
      <table className="table-container">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {boats.map((boat) => (
            <Boats key={boat.id} boat={boat} role={role} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Boat;
