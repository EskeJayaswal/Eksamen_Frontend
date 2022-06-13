import React from "react";
import { useState, useEffect } from "react";
import facade from "../apiFacade";
import { useParams, Link } from "react-router-dom";
import Rentals from "../components/Rentals";

const Tenant = () => {
  const [rentals, setRentals] = useState([]);

  const { username } = useParams();

  useEffect(() => {
    const getRentalsFromTenant = async () => {
      const rentalFromServer = await facade.fetchRentalsByUserId(username);
      setRentals(rentalFromServer);
    };
    getRentalsFromTenant();
  }, []);

  return (
    <div>
      <h1>Rentals</h1>
      <table className="table-container">
        <thead>
          <tr>
            <th>ID</th>
            <th>Start of rental: </th>
            <th>End of rental: </th>
            <th>Annual price: </th>
            <th>Deposit: </th>
            <th>Contact person: </th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {rentals.map((rental) => (
            <Rentals key={rental.id} rental={rental} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tenant;

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
