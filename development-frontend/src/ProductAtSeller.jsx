/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useUser } from "./UserContext";
import GetBids from "./Bids";
import axios from "axios";

const ProductAtSeller = () => {
    const { userData } = useUser();
    const [sellerProducts, setSellerProducts] = useState([]);

    const sellerInfo = {
        action: "get_products",
        seller_id: userData.seller_id,
    };

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.post(
                    "http://localhost/backend/api/routes/sellers/index.php",
                    sellerInfo
                );
                setSellerProducts(response.data.productsData);
            } catch (error) {
                console.error("Error getting seller products", error);
            }
        };

        getProducts();
    }, [setSellerProducts]);

    return (
        <>
            <hr />
            <h2>Current Available Bids</h2>
            <GetBids seller_id={userData.seller_id} />
            <hr />
            <h2>ProductAtSeller</h2>
            <hr />
            <div className="grid">
                {sellerProducts.map((product, key) => (
                    <div className="product" key={key}>
                        <h4>NAME: {product.name}</h4>
                        <h2>TYPE: {product.product_type}</h2>
                        <p>DESCRIPTION: {product.description}</p>
                        <h4>PRICE: {product.price}</h4>
                        <h5>SELLER_ID: {product.seller_id}</h5>
                        <h5>PRODUCT_ID: {product.product_id}</h5>
                        <hr />
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProductAtSeller;
