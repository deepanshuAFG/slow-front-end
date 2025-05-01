import { AllFolders } from "../components/AllFolders";
import { Header } from "../components/Header";
import { TimeDateHeader } from "../components/TimeDateHeader";

export default function HomePage() {

    return (
        <div className="flex-row h-auto bg-[#2c2c2c] ">{/*container*/}
        <TimeDateHeader/>
        <Header title={{name:"Namaste.", username:localStorage.getItem("username").toUpperCase( )}}>
        </Header>  
        <AllFolders/> 
        </div>
    );
}
