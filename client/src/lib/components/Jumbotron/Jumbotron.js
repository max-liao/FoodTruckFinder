import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 500, clear: "both", paddingTop: 60, textAlign: "center", backgroundColor: "#1bac91", color: "whitesmoke"}}
    className="jumbotron"
    // id = "Mapjumbo"
  >
    {children}
  </div>
);

export default Jumbotron;
