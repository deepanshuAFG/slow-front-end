import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosWithAuth from "../auth/useAxiosWithAuth";
export const AllPages= () =>{
    const navigate = useNavigate();
    const username = localStorage.getItem("username")
    const api = useAxiosWithAuth(); // Use your custom axios hook
    const token = localStorage.getItem("token");
    const [Pages, setPages] = useState([])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    
    const fetchAll = async () => {
        setLoading(true);
        try {
            const response = await api.get(`/page/allPages/${username}`);
            setPages(response.data);
            setError(null); // Clear any previous error
            // console.log(response)
        } catch (err) {
            setError("Error fetching folders: " + err.message);
        } finally {
            setLoading(false);
        }
    };
      
    const handleClick = () => {
        navigator(`/Page/${pageId}`);
    };
    

    useEffect(()=>{
        fetchAll();
    },[])

    return(
            <div className="p-5 w-full">
                {loading && <p className="text-blue-500">Loading folders...</p>}
                <h2 className="text-2xl pb-3 geist-medium text-[#bfbfbf]  border-b-2 border-[#bfbfbf] border-solid">Folders</h2>
                {error && <p className="text-red-500">{error}</p>}

                <div className="w-full grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 ">
                    {Pages.length > 0 ? (
                        Pages.map((page, index) => (
                            <div className="cursor-pointer" key={page.id} pageName={page.name} content={page.content} pageId={page.id} onClick={handleClick}/>
                        ))
                    ) : (
                        <p>No folders found</p>
                    )}
                </div>

                <button 
                    className="w-100 mt-4 px-4 py-2 bg-yellow-500 text-white rounded"
                    onClick={fetchAll}
                >
                    Refresh
                </button>
        </div>    );

}