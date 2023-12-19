import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import LandingPage from "./LandingPage.jsx";
import AddProduct from "./AddProduct.jsx";
import DashBoard from "./DashBoard.jsx";
import BidComponent from "./BidComponent.jsx";
import Product from "./Product.jsx";
import ProductAtSeller from "./ProductAtSeller.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <UserProvider>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/addProduct" element={<AddProduct />} />
                    <Route path="/dashboard" element={<DashBoard />} />
                    <Route path="/product" element={<Product />} />
                    <Route
                        path="/productSeller"
                        element={<ProductAtSeller />}
                    />
                    <Route
                        path="/products/:productId/bid"
                        element={<BidComponent />}
                    />
                </Routes>
            </UserProvider>
        </Router>
    </React.StrictMode>
);
