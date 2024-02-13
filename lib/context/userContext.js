import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const useUser = () => {
    const data = useContext(UserContext);

    if (!data) {
        throw new Error("useUser must be used within a UserProvider");
    }

    return data;
};

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [singleUser, setSingleUser] = useState();

    const addUser = (user) => {
        setSingleUser(user);
    };

    useEffect(() => {
        const fetchUser = async () => {
            try {
                setLoading(true);
                axios
                    .get("https://randomuser.me/api?results=200")
                    .then((res) => {
                        setUser(res.data.results);
                        setLoading(false);
                    })
                    .catch((err) => {
                        console.error(err);
                        alert("Profile request failed");
                    });
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };

        fetchUser();
    }, []);

    return (
        <UserContext.Provider
            value={{ user, loading, addUser, getUser: singleUser }}
        >
            {children}
        </UserContext.Provider>
    );
};
