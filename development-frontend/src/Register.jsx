import { useState } from "react";
import axios from "axios";
import "./App.css";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const [inputs, setInputs] = useState({
        action: "Register",
        full_name: "",
        username: "",
        company_name: "",
        email: "",
        password: "",
        user_image_url: "",
        contact_number: "",
    });
    // const [selectedFile, setSelectedFile] = useState(null);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            /* if (selectedFile) {
                const formData = new FormData();
                formData.append("image", selectedFile);

                // Use Fetch API or Axios to send the image to the backend
                fetch("http://localhost:80/api/upload_image.php", {
                    method: "POST",
                    body: formData,
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log("Image uploaded successfully:", data);
                    })
                    .catch((error) => {
                        console.error("Error uploading image:", error);
                    });
            } */
            await axios
                .post(
                    "http://localhost/backend/api/routes/users/index.php",
                    inputs
                )
                .then(function (response) {
                    console.log(response.data);
                    navigate("/");
                });
        } catch (error) {
            console.error("Error creating user:", error);
        }
    };

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

    return (
        <div>
            <h1>Create User</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="name">Full name</label>
                <input
                    type="text"
                    placeholder="Full name"
                    name="full_name"
                    value={inputs.full_name}
                    onChange={(e) => handleChange(e)}
                />
                <label htmlFor="name">Username</label>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={inputs.username}
                    onChange={(e) => handleChange(e)}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    placeholder="email@gmail.com"
                    name="email"
                    value={inputs.email}
                    onChange={(e) => handleChange(e)}
                />
                <label htmlFor="email">Company Name [seller] </label>
                <input
                    type="test"
                    placeholder="Company limited corp"
                    name="company_name"
                    value={inputs.company_name}
                    onChange={(e) => handleChange(e)}
                />
                <label htmlFor="email">Password</label>
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    value={inputs.password}
                    onChange={(e) => handleChange(e)}
                />
                <label htmlFor="mobile">Role</label>
                <input
                    type="text"
                    placeholder="role"
                    name="role"
                    value={inputs.mobile}
                    onChange={(e) => handleChange(e)}
                />
                <label htmlFor="mobile">Contact</label>
                <input
                    type="text"
                    placeholder="Contact"
                    name="contact_number"
                    value={inputs.contact_number}
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

export default Register;
