import React from "react";
import { Navbar, Container } from "react-bootstrap";
import navbar from "../img/navbar.png";
import { AiFillHome } from "react-icons/ai";

function Nav() {
  return (
    <div className="navCnt">
      <Navbar>
        <div className="navDescCnt">
          <Navbar.Brand href="/" className="navTag">
            Anasayfa
          </Navbar.Brand>
        </div>
      </Navbar>
    </div>
  );
}

export default Nav;
