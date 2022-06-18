import Konser from "../pages/Konser";
import Tiyatro from "../pages/Tiyatro";
import CocukAktivite from "../pages/CocukAktivite";
import Festival from "../pages/Festival";
import { Spinner } from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { useState, useEffect } from "react";
import React from "react";

function TabMenu() {
  const [word, setWord] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    await fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setWord(data);
        setLoading(false);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="spinner">
          <Spinner animation="border" variant="success" />
        </div>
      ) : (
        <div className="container mt-4">
          <h2>Etkinlik Kategorileri</h2>
          <Tabs
            defaultActiveKey="tab-1"
            id="uncontrolled-tab-example"
            className="nav-tabs my-5"
          >
            <Tab eventKey="tab-1" title="Konser">
              <Konser word={word} />
            </Tab>
            <Tab eventKey="tab-2" title="Tiyatro">
              <Tiyatro word={word} />
            </Tab>
            <Tab eventKey="tab-5" title="Festival">
              <Festival word={word} />
            </Tab>
            <Tab eventKey="tab-3" title="Çocuk Aktivite">
              <CocukAktivite word={word} />
            </Tab>
          </Tabs>
        </div>
      )}
    </>
  );
}

export default TabMenu;
