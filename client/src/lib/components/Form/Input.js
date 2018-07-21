import React from "react";

var divstyle = {
  width:'80%',
  color:'green'
};

export const Input = props => (
  <div className="form-group" style={divstyle}>
    <input className="form-control" {...props} />
  </div>
);
