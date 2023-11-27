import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import LandingPage from "./LandingPage.jsx";
import AddProduct from "./AddProduct.jsx";
import DashBoard from "./DashBoard.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" Component={LandingPage} />
                <Route path="/login" Component={Login} />
                <Route path="/register" Component={Register} />
                <Route path="/addProduct" Component={AddProduct} />
                <Route path="/dashboard" Component={DashBoard} />
            </Routes>
        </Router>
    </React.StrictMode>
);
