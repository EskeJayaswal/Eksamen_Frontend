import Navbar from "./components/Navbar";
import "./styling/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Welcome from "./pages/Welcome";
import Data from "./pages/Data";
import Login from "./pages/Login";
import Tenant from "./pages/Tenant";
import { useEffect, useState } from "react";
import facade from "./apiFacade";
import jwtDecode from "jwt-decode";
import Housedetails from "./pages/Housedetails";
import CreateTenant from "./pages/CreateTenant";
import CreateRental from "./pages/CreateRental";
import CreateHouse from "./pages/CreateHouse";
import House from "./pages/House";
import Tenantdetails from "./pages/Tenantdetails";

function App() {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState("");

  const onChange = (evt) => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value,
    });
  };

  const performLogin = (evt) => {
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password);
  };

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
    setRole("");
  };

  const login = (user, pass) => {
    facade.login(user, pass).then((res) => setLoggedIn(true));
    let token = facade.getToken();
    let decoded = jwtDecode(token);
    setRole(decoded.roles);
  };

  return (
    <div className="App">
      <Router basename="/sem3ca2">
        <Navbar username={loginCredentials.username} />
        <Routes>
          <Route path="/" element={<Welcome />} />
          {loggedIn === true ? (
            <Route path="/tenant/:username" element={<Tenant />} />
          ) : null}
          {loggedIn === true ? (
            <Route path="createtenant" element={<CreateTenant role={role} />} />
          ) : null}
          {loggedIn === true ? (
            <Route path="createrental" element={<CreateRental role={role} />} />
          ) : null}
          {loggedIn === true ? (
            <Route path="createhouse" element={<CreateHouse role={role} />} />
          ) : null}
          <Route path="/house" element={<House />} />
          <Route path="/housedetails/:id" element={<Housedetails />} />
          <Route path="/tenantdetails/:id" element={<Tenantdetails />} />

          <Route path="/admin" element={<Admin />} />
          <Route path="/data" element={<Data />} />
          <Route
            path="/login"
            element={
              <Login
                performLogin={performLogin}
                onChange={onChange}
                loggedIn={loggedIn}
                performLogout={logout}
                username={loginCredentials.username}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
