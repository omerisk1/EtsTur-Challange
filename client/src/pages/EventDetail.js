import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import carouselBackup from "../img/carouselBackup.png";
import { FcComments, FcClapperboard, FcInfo } from "react-icons/fc";
import ReactStars from "react-rating-stars-component";
import SeatPicker from "../components/SeatPicker";

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
        <>
          <Container>
            {/* Carousel */}
            <Row>
              <Col md={1}></Col>
              <Col md={12} xs={12}>
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
                      src={
                        detail.carouselImg2
                          ? detail.carouselImg2
                          : carouselBackup
                      }
                      alt="Second slide"
                      style={{ height: 400 }}
                    />
                  </Carousel.Item>
                </Carousel>
              </Col>
              <Col md={1}></Col>
            </Row>

            {/* Event Name and Category */}
            <Row className="mt-4 detail-NameCategory">
              <Col lg={6}>
                <h3>{detail.eventName}</h3>
                <FcComments />
                <span className="detailEventName">{detail.category}</span>
              </Col>
              <Col lg={6}>
                <div style={{ display: "flex", justifyContent: "end" }}>
                  <span style={{ margin: "17px 24px", fontWeight: "bold" }}>
                    İlk oy veren sen ol !
                  </span>
                  <ReactStars count={5} size={35} activeColor="#ffd700" />
                </div>
              </Col>

              {/* Etkinlik Detayı */}
              <Col className="detailDt">
                <div className="detailDesc">
                  <h5>Etkinlik Detayı</h5>
                  <p>{detail.description}</p>
                </div>
              </Col>
            </Row>

            {/* Sanatçılar */}
            <Row className="mt-4 detailArtist">
              <div className="artistCap">
                <FcClapperboard style={{ marginRight: "10px" }} />
                <span
                  style={{
                    marginBottom: "20px",
                    fontSize: "25px",
                    fontWeight: "600",
                    marginTop: "15px",
                  }}
                >
                  Sanatçılar
                </span>
              </div>

              {detail.artist.map((item, index) => (
                <Col key={index} md={3} className="mt-2 artist">
                  <img
                    src={item.artistImg}
                    width="150"
                    height="150"
                    className="artistImg"
                  ></img>
                  <p style={{ fontSize: "20px", fontWeight: "600" }}>
                    {item.name}
                  </p>
                </Col>
              ))}
            </Row>
            {/* Koltuk Seçimi */}
            <Row className="mt-4 detailSeat">
              <Col md={6} className="seat">
                <h3>Koltuk Seçimi</h3>
              </Col>

              <Col md={6}>
                
                  <h3 style={{ marginBottom: "20px" }}>
                    Etkinlik Hakkında Bilmeniz Gerekenler
                  </h3>
                  <div style={{ marginBottom: "10px", display: "flex" }}>
                    <div><FcInfo size={22} style={{ marginRight: "10px" }} /></div>
                    <p>E-Biletiniz Mail ve Sms olarak size gelecektir.</p>
                  </div>
                  <div style={{ marginBottom: "10px", display: "flex" }}>
                  <div><FcInfo size={22} style={{ marginRight: "10px" }} /></div>
                    <p>Çıktı almanıza gerek yoktur.</p>
                  </div>
                  <div style={{ marginBottom: "10px", display: "flex" }}>
                  <div><FcInfo size={22} style={{ marginRight: "10px" }} /></div>
                    <p>
                    Mekan uygun görmediği kişilerin bilet bedelini iade etmek koşuluyla etkinlik alanına almama hakkına sahiptir.
                    </p>
                  </div>
                  <div style={{ marginBottom: "10px", display: "flex" }}>
                  <div><FcInfo size={22} style={{ marginRight: "10px" }} /></div>
                    <p>
                      Güvenlik nedeniyle; açık sigara paketi, kesici alet, biber
                      gazı vb. içeri alınmamaktadır.
                    </p>
                  </div>
                
              </Col>
            </Row>
            {/* Adress */}
            <Row className="mt-4 detailAddress">
              <Col md={6}>
                <h2>Harbiye Cemil Topuzlu Açıkhava Tiyatrosu</h2>
                <p>Harbiye, Taşkışla Cd. No:8, 34367 Şişli</p>
              </Col>
              <Col md={6}>
                <SeatPicker></SeatPicker>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
}

export default EventDetail;
