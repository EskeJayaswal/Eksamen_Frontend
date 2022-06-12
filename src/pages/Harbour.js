import { useState, useEffect } from "react";
import facade from "../apiFacade";
import Harbours from "../components/Harbours";

const Harbour = () => {
  const [harbours, setHarbours] = useState([]);

  useEffect(() => {
    const getHarbours = async () => {
      const harbourFromServer = await facade.fetchHarbours();
      setHarbours(harbourFromServer);
    };
    getHarbours();
  }, []);

  return (
    <div>
      <h1>Harbours</h1>
      <table className="table-container">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {harbours.map((harbour) => (
            <Harbours key={harbour.id} harbour={harbour} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Harbour;
