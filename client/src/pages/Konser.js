import React from "react";
import Card from "../components/Card";
import { Row, Col } from "react-bootstrap";

function Konser({ word }) {
  const filter = word.filter((x) => x.category === "Konser");
  return (
    <div>
      <Row>
        {filter.map((data) => (
          <Col md={4} className="mb-5" key={data.id}>
            <Card data={data} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Konser;
