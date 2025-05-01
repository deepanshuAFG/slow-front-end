import Logout from "./Logout"

export const Header = ({title}) =>{
    return(
        <div className="flex-row geist-medium w-full h-20 text-[#bfbfbf] text-6xl mt-7">
            <p className="pl-5 text-xl">{title?.name}</p>
            <p className="pl-5 text-violet-500">{title?.username}</p>
            <Logout/>
          </div>
    )
}