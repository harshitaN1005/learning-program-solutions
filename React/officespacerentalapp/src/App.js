import React from "react";
import "./App.css";

function App() {
  // List of office space objects
  const officeSpaces = [
    {
      id: 1,
      name: "Tech Park Tower",
      rent: 55000,
      address: "123, MG Road, Bangalore",
      image: "download.jpeg"
    },
    {
      id: 2,
      name: "Innovation Hub",
      rent: 75000,
      address: "456, Cyber City, Hyderabad",
      image: "innovation_hub.jpeg"
    },
    {
      id: 3,
      name: "Business Bay",
      rent: 60000,
      address: "789, Banjara Hills, Hyderabad",
      image: "business_bay.jpeg"
    }
  ];

  return (
    <div className="App">
      {/* Heading */}
      <h1>Office Space Rental</h1>

      {/* Loop through the officeSpaces list */}
      {officeSpaces.map((office) => (
        <div key={office.id} className="office-card">
          {/* Office Image */}
          <img src={office.image} alt={office.name} className="office-image" />
          {/* Office Details */}
          <h2>{office.name}</h2>
          <p
            style={{
              color: office.rent < 60000 ? "red" : "green",
              fontWeight: "bold"
            }}
          >
            Rent: ₹{office.rent}
          </p>
          <p>Address: {office.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
