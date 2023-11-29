import { useState } from "react";
import axios from "axios";
import "./App.css";
import { useNavigate } from "react-router-dom";

const App = () => {
    const [inputs, setInputs] = useState({
        action: "Login",
        username: "",
        password: "",
        role: "",
    });
    // const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios
            .post("http://localhost/backend/api/routes/users/index.php", inputs)
            .then((Response) => {
                navigate("/dashboard", {
                    state: { userData: Response.data.userData },
                });
            });
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
    };

    return (
        <div>
            <h1>LOGIN </h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="name">Username</label>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={(e) => handleChange(e)}
                    required
                />

                <label htmlFor="email">Password</label>
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={(e) => handleChange(e)}
                    required
                />
                <label htmlFor="mobile">Role</label>
                <input
                    type="text"
                    placeholder="role"
                    name="role"
                    onChange={(e) => handleChange(e)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default App;
