import React from "react";

export const Input = props => (
  <div className="form-group">
    <input className="form-control" style={{marginTop:10, width:"80%"}} {...props} />
  </div>
);
