import React from "react";
import { Row, Col } from "react-bootstrap";
import { GrLocation } from "react-icons/gr";
import { MdOutlineDateRange } from "react-icons/md";

function Card({ data }) {
  return (
    <div className="cardCnt">
      <div>
        <img
          src={data.img}
          height={200}
          style={{ width: "100%", borderRadius: "12px" }}
        ></img>
      </div>
      <div className="cardTitle">
        <h3>{data.eventName}</h3>
      </div>
      <div className="cardLocation">
        <GrLocation />
        <p>{data.country}</p>
      </div>
      <div className="cardDate">
        <MdOutlineDateRange />
        <p>{data.date}</p>
      </div>
    </div>
  );
}

export default Card;
