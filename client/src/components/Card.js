import React from "react";
import { GrLocation } from "react-icons/gr";
import { MdOutlineDateRange } from "react-icons/md";
import { Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import EventDetail from "../pages/EventDetail";

function Card({ eventFilter }) {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };


  return (
    <Row>
      {typeof eventFilter != "undefined"
        ? eventFilter.map((dt) => (
            <Col md={4} className="mb-5" key={dt.id}>
              <Link to={`/detail/${dt.id}`} style={linkStyle}>
                <div className="cardCnt">
                  <div>
                    <img
                      src={dt.img}
                      height={200}
                      style={{ width: "100%", borderRadius: "12px" }}
                    ></img>
                  </div>
                  <div className="cardTitle">
                    <h3>{dt.eventName}</h3>
                  </div>
                  <div className="cardLocation">
                    <GrLocation/>
                    <p>{dt.country}</p>
                  </div>
                  <div className="cardDate">
                    <MdOutlineDateRange />
                    <p>{dt.date}</p>
                  </div>
                </div>
              </Link>
            </Col>
          ))
        : ""}
    </Row>
  );
}

export default Card;
