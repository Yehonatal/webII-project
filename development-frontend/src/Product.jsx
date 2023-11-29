import { Link } from "react-router-dom";

const Product = () => {
    return (
        <div>
            <h1>PRODUCT</h1>
            <div>
                <ul>
                    <li>
                        <button>
                            <Link to="/bid">MAKE A BID</Link>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Product;
