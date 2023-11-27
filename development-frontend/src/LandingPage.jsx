import { Link } from "react-router-dom";
const LandingPage = () => {
    return (
        <div>
            <ul>
                <li>
                    <button>
                        <Link to="/login">Login</Link>
                    </button>
                </li>
                <li>
                    <button>
                        <Link to="/register">Register</Link>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default LandingPage;
