import Navbar from "./components/Navbar";
import "./styling/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import User from "./pages/User";
import Welcome from "./pages/Welcome";
import Data from "./pages/Data";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import facade from "./apiFacade";
import Harbour from "./pages/Harbour";
import Boat from "./pages/Boat";
import Harbourboats from "./pages/Harbourboats";
import Boatowners from "./pages/Boatowners";
import jwtDecode from "jwt-decode";

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
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/user" element={<User />} />
          <Route path="/harbour" element={<Harbour />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/data" element={<Data />} />
          <Route path="/boat" element={<Boat role={role} />} />
          <Route path="/harbourboats/:id" element={<Harbourboats />} />
          <Route path="/boatowners/:id" element={<Boatowners />} />
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
