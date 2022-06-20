import Konser from "../pages/Konser";
import Tiyatro from "../pages/Tiyatro";
import CocukAktivite from "../pages/CocukAktivite";
import Festival from "../pages/Festival";
import { Spinner } from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { useState, useEffect } from "react";
import React from "react";
import OutofDate from "../pages/OutofDate";

function TabMenu({ word, loading }) {
  const d1 = new Date();
  let time;
  let days;
  

  const undatedFilter = word.filter((item) => {
    const d2 = new Date(item.date);
    let time = d2 - d1;
    let days = Math.ceil(time / (1000 * 60 * 60 * 24));
    if (days > 0) {
      return item;
    }
  });
  const outdatedFilter = word.filter((item) => {
    const d2 = new Date(item.date);
    let time = d2 - d1;
    let days = Math.ceil(time / (1000 * 60 * 60 * 24));
    if (days < 0) {
      return item;
    }
  });
 
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
              <Konser  undatedFilter={undatedFilter} />
            </Tab>
            <Tab eventKey="tab-2" title="Tiyatro">
              <Tiyatro undatedFilter={undatedFilter} />
            </Tab>
            <Tab eventKey="tab-5" title="Festival">
              <Festival undatedFilter={undatedFilter}  />
            </Tab>
            <Tab eventKey="tab-3" title="Çocuk Aktivite">
              <CocukAktivite undatedFilter={undatedFilter}  />
            </Tab>
            <Tab eventKey="tab-4" title="Tarihi Geçen Etkinlikler">
              <OutofDate word={word} outdatedFilter={outdatedFilter}   />
            </Tab>
          </Tabs>
        </div>
      )}
    </>
  );
}

export default TabMenu;
