import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosWithAuth from "../auth/useAxiosWithAuth";

export const FolderPage = () => {
    const { folderId } = useParams();
    const navigator = useNavigate();
    const api = useAxiosWithAuth(); // Custom authenticated Axios instance
    const [folderName, setFolderName] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [folders, setFolders] = useState([]);
    
    const fetchAll = async () => {
        setLoading(true);
        try {
            console.log("Fetching pages for folderId:", folderId);
            const response = await api.get(`/page/allPages/${folderId}`);
            setFolders(response.data);
            setFolderName(response.data[0].folder.name);
            console.log("Response:", response.data);
            setError(null); // Clear any previous error
        } catch (err) {
            console.error("Error fetching folders:", err);
            setError("Error fetching folders: " + err.message);
        } finally {
            setLoading(false);
        }
    };
    const handleClick = (page) => {
        navigator(`/Page/${page.id}`, {
            state: {
                content: page.content,  // Pass the content of the page
                key: page.key           // Pass the key or any other relevant data
            }
        });
    };

    useEffect(() => {
        console.log("folderId from useParams:", folderId);
        if (folderId) {
            fetchAll();
        }
    }, [folderId]);

    return (
        <div className="h-200 w-full bg-[#2c2c2c]">
            <div className="h-auto w-auto text-[#bfbfbf] text-7xl pt-5 ml-5 mr-5 mb-5 border-[#bfbfbf] border-solid border-b-3">
                {folderName || "Folder Name"}
            </div>

            {loading && <p className="text-white ml-5">Loading...</p>}
            {error && <p className="text-red-500 ml-5">{error}</p>}

            <div className="h-auto w-auto text-[#bfbfbf] text-lg pt-50 ml-5 mr-5 mb-5">
                {folders.length > 0 ? (
                    folders.map((page, index) => (
                        <div key={index} className="h-auto w-auto text-[#bfbfbf] text-xl mb-3 border-[#bfbfbf] border-solid border-b-3 cursor-pointer"onClick={()=>handleClick(page)}
                        >
                            {page.name || page.title || "Untitled Page"}
                        </div>
                    ))
                ) : (
                    !loading && <p>"No Pages"</p>
                )}
            </div>
        </div>
    );
};
