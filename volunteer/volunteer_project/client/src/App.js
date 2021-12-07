import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import axios from "axios";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CompanyDetails from "./pages/CompanyDetails";
import CompanyAddJob from "./pages/CompanyAddJob";
import CompanyHome from "./pages/CompanyHome";
import CompanyProfile from "./pages/CompanyProfile";
import VolunteerDetails from "./pages/VolunteerDetails";
import VolunteerProfile from "./pages/VolunteerProfile";
import VolunteerHome from "./pages/VolunteerHome";

function App() {
  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get("/api/login");
      console.log(res.data);
    };
    getData();
  });

  return (
    <Router>
      <body>
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/companydetails" element={<CompanyDetails />} />
            <Route path="/companyjobs" element={<CompanyAddJob />} />
            <Route path="/companyhome" element={<CompanyHome />} />
            <Route path="/companyprofile" element={<CompanyProfile />} />
            <Route path="/volunteerdetails" element={<VolunteerDetails />} />
            <Route path="/volunteerprofile" element={<VolunteerProfile />} />
            <Route path="/volunteerhome" element={<VolunteerHome />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </Router>
  );
}

export default App;
