import React from "react";
import { GrLocation } from "react-icons/gr";
import { MdOutlineDateRange } from "react-icons/md";
import { Row, Col } from "react-bootstrap";

function Card({ eventFilter }) {
    
  return (
    <Row>
      {(typeof eventFilter != 'undefined') ? (
      eventFilter.map((dt) => (
        <Col md={4} className="mb-5" key={dt.id}>
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
              <GrLocation />
              <p>{dt.country}</p>
            </div>
            <div className="cardDate">
              <MdOutlineDateRange />
              <p>{dt.date}</p>
            </div>
          </div>
        </Col>
      )))
    : ("")
    }
     
    </Row>
  );
}

export default Card;
