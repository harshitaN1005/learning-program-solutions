import React, { useState } from "react";
import "./App.css";
import CourseDetails from "./CourseDetails";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";

function App() {
  const [view, setView] = useState("all"); // "all", "courses", "books", "blogs"

  // Method 1: if/else rendering
  let content;
  if (view === "courses") {
    content = <CourseDetails />;
  } else if (view === "books") {
    content = <BookDetails />;
  } else if (view === "blogs") {
    content = <BlogDetails />;
  } else {
    content = (
      <div className="container">
        <div className="box"><CourseDetails /></div>
        <div className="box"><BookDetails /></div>
        <div className="box"><BlogDetails /></div>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Blogger App</h1>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setView("all")}>Show All</button>
        <button onClick={() => setView("courses")}>Show Courses</button>
        <button onClick={() => setView("books")}>Show Books</button>
        <button onClick={() => setView("blogs")}>Show Blogs</button>
      </div>

      {/* Method 2: Ternary Operator */}
      {view === "all" ? (
        <div>
          {content}
        </div>
      ) : (
        <div>
          {content}
        </div>
      )}

      {/* Method 3: AND Operator */}
      {view === "all" && <p style={{ color: "green" }}>All sections displayed</p>}
    </div>
  );
}

export default App;
