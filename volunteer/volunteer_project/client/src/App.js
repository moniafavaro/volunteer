import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VolunteerProfile from "./pages/VolunteerProfile";
import { getToken, getUserId } from "./helpers/auth";
import { fetchCompanyByUserId } from "./helpers/api";
import CompanyProfile from "./pages/CompanyProfile";
import React, { useEffect, useState } from "react";
import CompanyAddJob from "./pages/CompanyAddJob";
import VolunteerHome from "./pages/VolunteerHome";
import CompanyHome from "./pages/CompanyHome";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./styles/main.scss";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState("");

  useEffect(() => {
    if (getToken()) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }

    (async () => {
      if (getUserId()) {
        const company = await fetchCompanyByUserId(getUserId());
        if (company.length > 0) {
          setUserType("company");
        } else {
          setUserType("volunteer");
        }
      }
    })();
  }, []);

  return (
    <Router>
      <body className="main-body">
        <header>
          <NavBar
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            userType={userType}
            setUserType={setUserType}
          />
        </header>
        <main>
          <Routes>
            <Route
              path="/register"
              element={
                <Register
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
            <Route
              path="/login"
              element={
                <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              }
            />
            <Route path="/companyjobs" element={<CompanyAddJob />} />
            <Route path="/companyhome" element={<CompanyHome />} />
            <Route path="/companyprofile" element={<CompanyProfile />} />
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
