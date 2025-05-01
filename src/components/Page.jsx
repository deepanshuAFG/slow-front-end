import { useLocation } from "react-router-dom";

export const Page = () => {
    const location = useLocation();
    const { content, key } = location.state || {};  // Access passed state

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
    );
};
