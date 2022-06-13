import React from "react";
import { useState, useEffect } from "react";
import facade from "../apiFacade";
import Houses from "../components/Houses";

const House = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const getHouses = async () => {
      const housesFromServer = await facade.fetchHouses();
      setHouses(housesFromServer);
    };
    getHouses();
  }, []);

  return (
    <div>
      <h1>Houses</h1>
      <table className="table-container">
        <thead>
          <tr>
            <th>ID</th>
            <th>Address: </th>
            <th>City: </th>
            <th>Number of Rooms: </th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {houses.map((house) => (
            <Houses key={house.id} house={house} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default House;

// return (
//   <div>
//     <h1>Your Rentals</h1>
//     <table className="table-container">
//       <thead>
//         <tr>
//           <th>Start of rental: </th>
//           <th>End of rental: </th>
//           <th>Annual price: </th>
//           <th>Deposit: </th>
//           <th>Contact person: </th>
//         </tr>
//       </thead>

//       <tbody>
//         {rentals.map((rental) => (
//           <tr key={rental.id}>
//             <td>{rental.startDate}</td>
//             <td>{rental.endDate}</td>
//             <td>{rental.priceAnnual}</td>
//             <td>{rental.deposit}</td>
//             <td>{rental.contactPerson}</td>
//             <td>
//               <Link to={`/housedetails}`}>
//                 <button>Get House Details</button>
//               </Link>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// );
