import  { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
 
import Ricevestlanding from "./components/Landingpage/ricevestlanding";

function App() {
  return (
     
     <Router >
 <Routes>
              <Route path="/" element={<Ricevestlanding/>} />
              </Routes>
     </Router>
     
  );
}

export default App;
