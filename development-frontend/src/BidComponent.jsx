import { useEffect, useState } from "react";
import { useUser } from "./UserContext";
import { useParams } from "react-router-dom";
import axios from "axios";

const BidComponent = () => {
    const { userData } = useUser();
    const { productId } = useParams();

    const [product, setProduct] = useState(null);
    const [bid, setBid] = useState({
        action: "bid_on_product",
        product_id: productId,
        bid: "",
        bid_detail: "",
        user_id: userData.buyer_id,
    });

    const getProductData = {
        action: "current_product",
        product_id: productId,
    };

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.post(
                    `http://localhost/backend/api/routes/buyers/index.php/${productId}`,
                    getProductData
                );
                setProduct(response.data.productsData);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct();
    }, [bid, productId]); // Include productId as a dependency to re-run the effect when it changes

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios
                .post(
                    "http://localhost/backend/api/routes/buyers/index.php",
                    bid
                )
                .then(function (response) {
                    console.log(response.data);
                });
        } catch (error) {
            console.error("Error creating user:", error);
        }
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setBid((values) => ({ ...values, [name]: value }));
    };

    return (
        <div>
            {product ? (
                <div>
                    <h2>{product[0].name}</h2>
                    <h2>TYPE: {product[0].product_type}</h2>
                    <p>DESCRIPTION: {product[0].description}</p>
                    <h4>PRICE: {product[0].price}</h4>
                    <h5>SELLER_ID: {product[0].seller_id}</h5>
                    <h5>PRODUCT_ID: {product[0].product_id}</h5>
                </div>
            ) : (
                <>
                    <p>Loading product information...</p>
                    <hr />
                </>
            )}
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="name">Bid Amount</label>
                <input
                    type="text"
                    placeholder="+ LeastAmount"
                    name="bid"
                    onChange={(e) => handleChange(e)}
                />
                <label htmlFor="name">Message</label>
                <input
                    type="text"
                    placeholder="Bid Details"
                    name="bid_detail"
                    onChange={(e) => handleChange(e)}
                />
                <button type="submit">MAKE A BID</button>
            </form>
        </div>
    );
};

export default BidComponent;
