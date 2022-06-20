import React from "react";
import { GrLocation } from "react-icons/gr";
import { MdOutlineDateRange } from "react-icons/md";
import { FcCalendar,FcAddressBook } from "react-icons/fc";
import { Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import EventDetail from "../pages/EventDetail";
import backupImg from "../img/carouselBackup.png"

function Card({ eventFilter, out, badge }) {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <Row className={out && `outDateCnt`}>
      {typeof eventFilter != "undefined"
        ? eventFilter.map((dt) => (
            <Col md={4} className="mb-5" key={dt.id}>
              <Link to={`/detail/${dt.id}`} style={linkStyle}>
                <div className="cardCnt">
                  <div className="imgCnt">
                    <div className={badge ? (`pasifBadge`): (`aktifBadge`)}>
                      {badge ? (<p>Pasif</p>) : (<p>Aktif</p>)}
                    </div>
                    <img
                      src={dt.img}
                      height={200}
                      style={{ width: "100%", borderRadius: "12px" }}
                      onError={(e) => (e.target.onerror = null, e.target.src = backupImg)}
                    ></img>
                  </div>
                  <div className="cardTitle">
                    <h3>{dt.eventName}</h3>
                  </div>
                  <div className="cardLocation">
                    <FcAddressBook />
                    <p>{dt.country}</p>
                  </div>
                  <div className="cardDate">
                    <FcCalendar />
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
