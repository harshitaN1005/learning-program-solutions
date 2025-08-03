import React from "react";

function GuestGreeting({ flights, onLogin }) {
  return (
    <div>
      <h1>Welcome Guest</h1>
      <button onClick={onLogin}>Login</button>
      <h2>Available Flights</h2>
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>
            {flight.name} | {flight.route} 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GuestGreeting;
