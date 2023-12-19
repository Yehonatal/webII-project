/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
    const [allProducts, setAllProducts] = useState([]);

    const sellerInfo = {
        action: "get_all_products",
    };

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.post(
                    "http://localhost/backend/api/routes/buyers/index.php",
                    sellerInfo
                );
                setAllProducts(response.data.productsData);
            } catch (error) {
                console.error("Error getting seller products", error);
            }
        };

        getProducts();
    }, [setAllProducts]);

    return (
        <div>
            <h2>PRODUCT</h2>
            <hr />
            <div className="grid">
                {allProducts.map((product, key) => (
                    <div className="product" key={key}>
                        <h4>NAME: {product.name}</h4>
                        <h2>TYPE: {product.product_type}</h2>
                        <p>DESCRIPTION: {product.description}</p>
                        <h4>PRICE: {product.price}</h4>
                        <h5>SELLER_ID: {product.seller_id}</h5>
                        <h5>PRODUCT_ID: {product.product_id}</h5>
                        <hr />
                        <ul>
                            <li>
                                <button>
                                    <Link
                                        to={`/products/${product.product_id}/bid`}
                                    >
                                        Bid on this product
                                    </Link>
                                </button>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
