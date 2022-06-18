import React from "react";

function Tiyatro({ word }) {
  const filter = word.filter(x => x.category==="Tiyatro")
  return (
    
    <div>
      {filter.map((data, index) => (
        <h1 key={index}>{data.eventName}</h1>
      ))}
    </div>
  );
}

export default Tiyatro;
