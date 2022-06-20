import "./css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TabMenu from "./components/TabMenu";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EventDetail from "./pages/EventDetail";
import { useState, useEffect } from "react";

function App() {
  
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
    </>
  );
}

export default App;
