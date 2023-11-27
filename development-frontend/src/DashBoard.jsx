import { useLocation } from "react-router-dom";

const DashBoard = () => {
    const location = useLocation();
    const userData = location.state.userData;

    return (
        <div>
            {userData.role == "seller" ? (
                <h1>Dashboard</h1>
            ) : (
                <h1>Market Place</h1>
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
                        <strong>Company Name:</strong> {userData.company_name}{" "}
                        <br />
                    </div>
                )}
            </div>
        </div>
    );
};

export default DashBoard;
