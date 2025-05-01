import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

const Logout = () => {
    const navigate = useNavigate();
    const { logout } = useAuth(); // Get logout function from AuthProvider

    const handleLogout = () => {
        logout(); // Call logout (e.g., remove token, clear session)
        navigate("/"); // Redirect to home page
    };

    return (
        <button
            className="flex items-center gap-1 bg-red-600 text-white px-4 py-0 rounded-xl 
                       text-lg font-medium hover:bg-red-700 active:bg-red-800 transition-all 
                       shadow-md hover:shadow-lg ml-auto font-sans"
            onClick={handleLogout}
        >
            Logout
        </button>
    );
};

export default Logout;
