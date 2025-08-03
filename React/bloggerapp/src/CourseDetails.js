import React from "react";

function CourseDetails() {
  const courses = [
    { name: "Angular", date: "4/5/2021" },
    { name: "React", date: "6/3/2021" }
  ];

  return (
    <div>
      <h2>Course Details</h2>
      {courses.map((c, index) => (
        <div key={index}>
          <h3>{c.name}</h3>
          <p>{c.date}</p>
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;
