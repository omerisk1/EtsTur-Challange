import "./css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TabMenu from "./components/TabMenu";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EventDetail from "./pages/EventDetail";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Navbar"




function App() {
  
  const [word, setWord] = useState([]);
  const [loading, setLoading] = useState(false);

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
     <Nav></Nav>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<TabMenu word={word} loading={loading}/>
            }
          ></Route>
          <Route path="/detail/:id" element={<EventDetail />}></Route>
        </Routes>
      </Router>
      <div className="footer">
            <Footer></Footer>
      </div>
    </>
  );
}

export default App;
