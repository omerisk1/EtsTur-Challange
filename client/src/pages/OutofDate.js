import React,{useState,useEffect} from "react";
import Card from "../components/Card";

function OutofDate({ outdatedFilter }) {

    const out = true;
    const badge = true;
    const [query, setQuery] = useState("");
    const eventFilter = outdatedFilter.filter((x) => x.category === "Konser");
    const search = (filtered) => {
      return filtered.filter((item) =>
       item.eventName.toLowerCase().includes(query) || 
       item.country.toLowerCase().includes(query) || 
       item.date.toLowerCase().includes(query)) 
    }
   
   
    return (
      <div>
        <div className="searchCnt ">
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
        <Card eventFilter={search(eventFilter)} out={out} badge={badge}></Card>
      </div>
    );
}

export default OutofDate;
