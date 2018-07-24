import React from "react";

export const Input = props => (
  <div className="form-group">
    <input className="form-control" style={{marginTop:5, marginBottom:5, width:"80%"}} {...props} />
  </div>
);
