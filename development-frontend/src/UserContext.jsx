// UserContext.js
import { createContext, useContext, useState } from "react";
import { PropTypes } from "prop-types";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);

    const setUser = (user) => {
        setUserData(user);
    };

    return (
        <UserContext.Provider value={{ userData, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};
