import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import carouselBackup from "../img/carouselBackup.png"

function EventDetail() {
  const [detail, setDetail] = useState("");
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const dataDetail = async () => {
    await fetch(`/api/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetail(data);
        setLoading(false);
      });
  };
  useEffect(() => {
    dataDetail();
  }, []);

  return (
    <>
     {loading ? (
        <div className="spinner">
          <Spinner animation="border" variant="danger" />
        </div>
      ) : (
      <Row>
        <Col md={2}></Col>
        <Col md={8} xs={12}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={detail.carouselImg1}
                alt="First slide"
                style={{ height: 400 }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 "
                src={detail.carouselImg2 ? (detail.carouselImg2):(carouselBackup)}
                alt="Second slide"
                style={{ height: 400 }}
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col md={2}></Col>
      </Row>
      )}
    </>
  );
}

export default EventDetail;
