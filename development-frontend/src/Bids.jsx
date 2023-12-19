/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import axios from "axios";

const Bids = ({ seller_id }) => {
    const [bids, setBids] = useState([]);
    const [bidsExist, setBidsExist] = useState(0);
    const [loading, setLoading] = useState(false);

    const getBidsObj = {
        action: "get_all_bids",
        seller_id: seller_id,
    };

    const [contractObj, setContractObj] = useState({
        action: "submit_contract",
        seller_id: seller_id,
        buyer_id: "",
        product_id: "",
        contract_details: "",
    });

    useEffect(() => {
        const getBids = async () => {
            try {
                const response = await axios.post(
                    "http://localhost/backend/api/routes/sellers/index.php",
                    getBidsObj
                );
                setBids(response.data.productsData);
                setBidsExist(response.data.status);
            } catch (error) {
                console.error("Error getting seller products", error);
            }
        };
        getBids();
    }, [setBids]);

    const handleContractSubmit = async (e, buyerId, productId) => {
        e.preventDefault();

        if (loading) {
            return;
        }

        setLoading(true);

        contractObj.buyer_id = buyerId;
        contractObj.product_id = productId;

        try {
            const response = await axios.post(
                "http://localhost/backend/api/routes/sellers/index.php",
                contractObj
            );
            console.log(response.data);
        } catch (error) {
            console.error("Error submitting contract", error);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setContractObj((values) => ({ ...values, [name]: value }));
    };

    return (
        <div>
            {bidsExist &&
                bids.map((bid, key) => (
                    <div className="bids" key={key}>
                        <h4>Name: {bid.product_name}</h4>
                        <p>Description: {bid.product_description}</p>
                        <h4>Price: {bid.product_price}</h4>
                        <p>Status: {bid.bid_status}</p>
                        <p>Contact: {bid.buyer_contact}</p>
                        <p>Bid Id: {bid.bid_id}</p>
                        <p>Bid Status: {bid.bid_status}</p>
                        <p>Bid amount: {bid.amount}$</p>
                        <form
                            onSubmit={(e) =>
                                handleContractSubmit(
                                    e,
                                    bid.buyer_id,
                                    bid.product_id
                                )
                            }
                        >
                            <input
                                type="text"
                                placeholder="Contract Details"
                                name="contract_details"
                                onChange={(e) => handleChange(e)}
                            />
                            <button type="submit" disabled={loading}>
                                {loading ? "Submitting..." : "Submit Contract"}
                            </button>
                        </form>
                    </div>
                ))}
        </div>
    );
};

export default Bids;
