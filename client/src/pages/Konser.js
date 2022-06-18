import React, { useState,useEffect } from "react";
import Card from "../components/Card";
import { Row, Col } from "react-bootstrap";

function Konser({ word }) {
  const [query, setQuery] = useState("");
  const eventFilter = word.filter((x) => x.category === "Konser");
  const search = (filtered) => {
    return filtered.filter((item) =>
     item.eventName.toLowerCase().includes(query) || 
     item.country.toLowerCase().includes(query) || 
     item.date.toLowerCase().includes(query)) 
  }
  return (
    <div>
      <div className="searchCnt">
        <div>
          <p>Dilediğin Etkinliği Bulabilirsin</p>
        </div>
        <div>
          <input
            type="text"
            name="search"
            placeholder="Ara"
            onChange={(e) => setQuery(e.target.value)}
          ></input>
        </div>
      </div>
      <Card eventFilter={search(eventFilter)}></Card>
    </div>
  );
}

export default Konser;
