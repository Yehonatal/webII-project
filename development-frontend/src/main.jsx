import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import LandingPage from "./LandingPage.jsx";
import AddProduct from "./AddProduct.jsx";
import DashBoard from "./DashBoard.jsx";
import SendBid from "./SendBid.jsx";
import Product from "./Product.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./UserContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <UserProvider>
                <Routes>
                    <Route path="/" Component={LandingPage} />
                    <Route path="/login" Component={Login} />
                    <Route path="/register" Component={Register} />
                    <Route path="/addProduct" Component={AddProduct} />
                    <Route path="/dashboard" Component={DashBoard} />
                    <Route path="/dashboard" Component={DashBoard} />
                    <Route path="/product" Component={Product} />
                    <Route path="/bid" Component={SendBid} />
                </Routes>
            </UserProvider>
        </Router>
    </React.StrictMode>
);
