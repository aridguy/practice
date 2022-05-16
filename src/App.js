
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import SideNav from "./Components/SideNav/SideNav";
import TopNav from "./Components/TopNav/TopNav";
import Chart from "./Components/Chart/Chart";

function App() {
  return (
    <div>

      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/SideNav" element={<SideNav />} />
          <Route path="/TopNav" element={<TopNav />} />
          <Route path="/Chart" element={<Chart />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
