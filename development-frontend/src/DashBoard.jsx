import { useUser } from "./UserContext";
import { Link } from "react-router-dom";

const DashBoard = () => {
    const { userData } = useUser();
    console.log(userData);

    return (
        <div>
            {userData.role == "seller" ? (
                <>
                    <p>DASHBOARD</p>
                    <h1>{userData.company_name}</h1>
                    <div>
                        <ul>
                            <li>
                                <button>
                                    <Link to="/addProduct">ADD PRODUCT</Link>
                                </button>
                            </li>
                        </ul>
                    </div>
                </>
            ) : (
                <div>
                    <h1>MARKET PLACE</h1>

                    <div>
                        <ul>
                            <li>
                                <button>
                                    <Link to="/product">PRODUCT</Link>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
            <div>
                <strong>User ID:</strong> {userData.user_id} <br />
                <strong>Username:</strong> {userData.username} <br />
                <strong>Email:</strong> {userData.email} <br />
                <strong>Role:</strong> {userData.role} <br />
                <strong>Contact Number:</strong> {userData.contact_number}{" "}
                <br />
                {userData.company_name && (
                    <div>
                        <strong>Seller ID:</strong> {userData.seller_id} <br />
                        <strong>Company Name:</strong> {userData.company_name}{" "}
                        <br />
                    </div>
                )}
            </div>
        </div>
    );
};

export default DashBoard;
