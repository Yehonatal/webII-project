import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";

const AddProduct = () => {
    const { userData } = useUser();

    const [inputs, setInputs] = useState({
        action: "create_product",
        name: "",
        house_type: "",
        product_id: "",
        company: userData.company_name,
        seller_id: userData.seller_id,
        product_detail: "",
        product_price: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (name === "user_image_url") {
            // const file = e.target.files[0];
            // setSelectedFile(file);
            const value = e.target.files[0];
            setInputs((prevInputs) => ({
                ...prevInputs,
                [name]: "test" + value.name,
            }));
        } else {
            setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(inputs);

        try {
            await axios
                .post(
                    "http://localhost/backend/api/routes/sellers/index.php",
                    inputs
                )
                .then(function (response) {
                    console.log(response.data);
                    navigate("/dashboard");
                });
        } catch (error) {
            console.error("Error creating user:", error);
        }
    };
    return (
        <div>
            <h1>{userData.company_name}</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="name">NAME</label>
                <input
                    type="text"
                    placeholder="Product name"
                    name="name"
                    onChange={(e) => handleChange(e)}
                />
                <label htmlFor="name">HOUSE TYPE</label>
                <input
                    type="text"
                    placeholder="housetype"
                    name="house_type"
                    onChange={(e) => handleChange(e)}
                />
                <h4>
                    PRODUCT ID: <span>GENERATED</span>
                </h4>
                <h4>
                    COMPANY: <span>{userData.company_name.toUpperCase()}</span>
                </h4>
                <h4>
                    SELLER ID: <span>{userData.seller_id}</span>
                </h4>
                <label htmlFor="email">DESCRIPTION</label>
                <input
                    type="test"
                    placeholder="Detail about product"
                    name="product_detail"
                    onChange={(e) => handleChange(e)}
                />
                <label htmlFor="email">PRICE: LOWEST BID </label>
                <input
                    type="test"
                    placeholder="Lowest Bid"
                    name="product_price"
                    onChange={(e) => handleChange(e)}
                />
                <div>
                    <input
                        type="file"
                        name="user_image_url"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <button type="submit">CREATE</button>
            </form>
        </div>
    );
};

export default AddProduct;
