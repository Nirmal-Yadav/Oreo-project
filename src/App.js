import "./App.css";
import DashBoard from "./Components/Dashboard/Pages/Dashboard";
import SignInUp from "./Components/signInUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard1 from "./Components/Dashboard/Pages/Dashboard1";
import DashBoard2 from "./Components/Dashboard/Pages/Dashboard2";
import DashBoard3 from "./Components/Dashboard/Pages/Dashboard3";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<SignInUp />} />
          <Route path="dashboard" exact element={<DashBoard />} />
          <Route path="dashboard/dashboard1" element={<DashBoard1 />} />
          <Route path="dashboaed/dashboard2" element={<DashBoard2 />} />
          <Route path="dashboard3" element={<DashBoard3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
