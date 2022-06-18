import React from "react";

function Konser({ word }) {
  const filter = word.filter(x => x.category==="Konser")
  return (
    <div>
      {filter.map((data, index) => (
        <h1 key={index}>{data.eventName}</h1>
      ))}
    </div>
  );
}

export default Konser;
