import { useNavigate } from "react-router-dom";
import SimpleCircle from "../assets/Shapes/SimpleCircle.png";
import SimpleSquare from "../assets/Shapes/SimpleSquare.png";
import Star from "../assets/Shapes/Star.png";
import TwoCircles from "../assets/Shapes/TwoCircles.png";


const COLOR_CLASSES = {
    "bg-blue-500": "bg-blue-500",
    "bg-green-500": "bg-green-500",
    "bg-yellow-500": "bg-yellow-500",
    "bg-purple-500": "bg-purple-500",
    "bg-pink-500": "bg-pink-500",
    "bg-indigo-500": "bg-indigo-500",
    "bg-red-500": "bg-red-500",
};

const IMAGE_CLASSES = {
  "SimpleCircle" : SimpleCircle,
  "SimpleSquare" : SimpleSquare,
  "Star" : Star,
  "TwoCircles": TwoCircles
 };
export const Folder = ({ folderName, color,  image , folderId }) => {
    const safeColor = COLOR_CLASSES[color] || "bg-gray-200"; // Default in case design is missing
    const safeImage = IMAGE_CLASSES[image];
    const navigator = useNavigate();

    const handleClick = () => {
        navigator(`/FolderPage/${folderId}`);
    };
    
    return (
        <div className={`cursor-pointer flex-col flex mt-5 items-end justify-end w-88 h-88 ${safeColor}`} onClick={handleClick}>
            <div className={`h-full w-full bg-cover bg-center mix-blend-darken cursor-pointer flex-col flex items-end justify-end`} style={{ backgroundImage: `url(${safeImage})`}}>
            <div className="pr-7 pb-5 geist-medium text-xl invert">{folderName}</div>
            </div>
        </div>
    );
};
