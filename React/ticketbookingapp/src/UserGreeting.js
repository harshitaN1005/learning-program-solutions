import React from "react";

function UserGreeting({ flights, onLogout }) {
  return (
    <div>
      <h1>User Dashboard</h1>
      <button onClick={onLogout}>Logout</button>
      <h2>Book Your Tickets</h2>
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>
            {flight.name} | {flight.route} | {flight.price}
            <button style={{ marginLeft: "10px" }}>Book Now</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserGreeting;
