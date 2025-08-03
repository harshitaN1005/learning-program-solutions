import React, { useState } from "react";
import "./App.css";
import GuestGreeting from "./GuestGreeting";
import UserGreeting from "./UserGreeting";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const flights = [
    { id: 1, name: "Indigo 6E-123", route: "Delhi → Mumbai", price: "₹4500" },
    { id: 2, name: "Air India AI-456", route: "Chennai → Hyderabad", price: "₹5000" },
    { id: 3, name: "SpiceJet SJ-789", route: "Bangalore → Goa", price: "₹3500" }
  ];

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <UserGreeting flights={flights} onLogout={handleLogout} />
      ) : (
        <GuestGreeting flights={flights} onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
