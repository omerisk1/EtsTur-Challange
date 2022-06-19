import "./css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TabMenu from "./components/TabMenu";
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EventDetail from "./pages/EventDetail";


function App() {
  return (
    <>
      
      <Router>
        <Routes>
          <Route path="/" element={<TabMenu />}></Route>
          <Route path="/detail/:id" element={<EventDetail/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
