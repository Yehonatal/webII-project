import { useState } from "react";
import axios from "axios";

const SendBid = () => {
    const [bid, setBid] = useState({
        bid: "",
        bid_detail: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios
                .post(
                    "http://localhost/backend/api/routes/users/index.php",
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

export default SendBid;
