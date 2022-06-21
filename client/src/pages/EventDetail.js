import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import carouselBackup from "../img/carouselBackup.png";
import {
  FcComments,
  FcClapperboard,
  FcInfo,
  FcGlobe,
  FcGenericSortingDesc,
  FcBookmark,
} from "react-icons/fc";
import ReactStars from "react-rating-stars-component";
import Maps from "../components/Maps";
import backupImg from "../img/carouselBackup.png";
import backup2Img from "../img/backup2.jpg";
import backup3Img from "../img/backup3.jpg";
import SeatSelect from "../components/SeatSelect";
import backup4Img from "../img/backup4.png";
import backup5Img from "../img/backup5.png";
import Footer from "../components/Footer";

function EventDetail() {
  // //Days Control Case

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
            <Row className="carouselCnt">
              <Col md={1}></Col>
              <Col md={12} xs={12}>
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={detail.carouselImg1}
                      alt="First slide"
                      style={{ height: 450, objectFit: "contain" }}
                      onError={(e) => (
                        (e.target.onerror = null), (e.target.src = backup2Img)
                      )}
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
                      style={{ height: 450, objectFit: "contain" }}
                      onError={(e) => (
                        (e.target.onerror = null), (e.target.src = backup3Img)
                      )}
                    />
                  </Carousel.Item>
                </Carousel>
              </Col>
              <Col md={1}></Col>
            </Row>

            {/* Event Name and Category */}
            <Row className="mt-4 detail-NameCategory">
              <Col lg={6}>
                <h3 style={{ fontWeight: "600" }}>{detail.eventName}</h3>
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
                    fontSize: "27px",
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
                    alt="Artist"
                    onError={(e) => (
                      (e.target.onerror = null), (e.target.src = backup5Img)
                    )}
                  ></img>
                  <p style={{ fontSize: "20px", fontWeight: "600" }}>
                    {item.name}
                  </p>
                </Col>
              ))}
            </Row>
            {/* Koltuk Seçimi */}
            <Row className="mt-4 detailSeat">
              <Col md={6}>
                <FcGenericSortingDesc
                  style={{ marginRight: "10px", marginBottom: "5px" }}
                />
                <span
                  style={{
                    marginBottom: "20px",
                    fontSize: "27px",
                    fontWeight: "600",
                    marginTop: "15px",
                  }}
                >
                  Koltuk Seçimi
                </span>
                <div className="sceneCnt">
                  <Row>
                    <Col lg={8}>
                      <Row style={{ marginBottom: "60px" }}></Row>
                      <Row style={{ marginBottom: "15px" }}>
                        <div className="seatFirst">Sahne</div>
                      </Row>
                      <Row style={{ marginBottom: "15px" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <p style={{ margin: "auto 15px", fontWeight: "600" }}>
                            A
                          </p>
                          <div className="seat">A1</div>
                          <div className="seat">A2</div>
                          <div className="seat">A3</div>
                          <div className="seat">A4</div>
                          <div className="seat">A5</div>
                        </div>
                      </Row>
                      <Row style={{ marginBottom: "15px" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <p style={{ margin: "auto 15px", fontWeight: "600" }}>
                            B
                          </p>
                          <div className="seat">B1</div>
                          <div className="seat">B2</div>
                          <div className="seat">B3</div>
                          <div className="seat">B4</div>
                          <div className="seat">B5</div>
                        </div>
                      </Row>
                      <Row style={{ marginBottom: "15px" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <p style={{ margin: "auto 15px", fontWeight: "600" }}>
                            C
                          </p>
                          <div className="seat">C1</div>
                          <div className="seat">C2</div>
                          <div className="seat">C3</div>
                          <div className="seat">C4</div>
                          <div className="seat">C5</div>
                        </div>
                      </Row>
                    </Col>
                    <Col lg={4} className="mt-3">
                      <SeatSelect></SeatSelect>
                    </Col>
                  </Row>
                </div>
              </Col>

              <Col md={6}>
                <Row style={{ marginBottom: "60px" }}></Row>
                <div className="info">
                  <h3 style={{ marginBottom: "40px", fontWeight: "600" }}>
                    Etkinlik Hakkında Bilmeniz Gerekenler
                  </h3>
                  <div style={{ marginBottom: "10px", display: "flex" }}>
                    <div>
                      <FcInfo size={22} style={{ marginRight: "10px" }} />
                    </div>
                    <p>E-Biletiniz Mail ve Sms olarak size gelecektir.</p>
                  </div>
                  <div style={{ marginBottom: "10px", display: "flex" }}>
                    <div>
                      <FcInfo size={22} style={{ marginRight: "10px" }} />
                    </div>
                    <p>Çıktı almanıza gerek yoktur.</p>
                  </div>
                  <div style={{ marginBottom: "10px", display: "flex" }}>
                    <div>
                      <FcInfo size={22} style={{ marginRight: "10px" }} />
                    </div>
                    <p>
                      Mekan uygun görmediği kişilerin bilet bedelini iade etmek
                      koşuluyla etkinlik alanına almama hakkına sahiptir.
                    </p>
                  </div>
                  <div style={{ marginBottom: "10px", display: "flex" }}>
                    <div>
                      <FcInfo size={22} style={{ marginRight: "10px" }} />
                    </div>
                    <p>
                      Güvenlik nedeniyle; açık sigara paketi, kesici alet, biber
                      gazı vb. içeri alınmamaktadır.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            {/* Adress */}
            <Row className="mt-4 detailAddress">
              <h3 style={{ fontWeight: "600" }}>Adres Bilgileri</h3>
              <Col md={6} style={{ padding: "20px" }}>
                <Row style={{ marginTop: "20px" }}></Row>
                <h3 style={{ fontWeight: "500", marginBottom: "20px" }}>
                  {detail.place}
                </h3>
                <div className="adres">
                  <FcGlobe size={20}></FcGlobe>
                  <p style={{ fontSize: "18px" }}>{detail.address}</p>
                </div>
              </Col>
              <Col md={6}>
                <Maps lat={detail.lat} lng={detail.lng}></Maps>
              </Col>
            </Row>
          </Container>
          
        </>
      )}
    </>
  );
}

export default EventDetail;
