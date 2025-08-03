import React from "react";
import "./App.css";
function ListofPlayers() {
  // Step 1: Declare an array of players with scores
  const players = [
    { name: "Rohit Sharma", score: 80 },
    { name: "Virat Kohli", score: 95 },
    { name: "KL Rahul", score: 65 },
    { name: "Shreyas Iyer", score: 40 },
    { name: "Hardik Pandya", score: 85 },
    { name: "Ravindra Jadeja", score: 55 },
    { name: "Rishabh Pant", score: 72 },
    { name: "Suryakumar Yadav", score: 88 },
    { name: "Mohammed Shami", score: 35 },
    { name: "Jasprit Bumrah", score: 78 },
    { name: "Kuldeep Yadav", score: 60 }
  ];

  // Step 2: Filter players with score < 70
  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((p, index) => (
          <li key={index}>
            {p.name} - {p.score}
          </li>
        ))}
      </ul>

      <h2>Players with score below 70</h2>
      <ul>
        {lowScorers.map((p, index) => (
          <li key={index}>
            {p.name} - {p.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;
