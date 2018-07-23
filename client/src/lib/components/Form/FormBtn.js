import React from "react";

export const FormBtn = props => (
  <button {...props} style={{ marginTop: 30, "backgroundColor": "#777474", marginBottom: 10, color:"whitesmoke",
   "fontSize": "20px", padding: "11px 19px", "letterSpacing": "0.05em", width: "10%", "textAlign":"center"}}
     className="btn btn-success">
    {props.children}
  </button>
);
