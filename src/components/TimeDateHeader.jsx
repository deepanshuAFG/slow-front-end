import { useEffect, useState } from "react";

export const TimeDateHeader = () =>{
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentTime(new Date());
        }, 1000); // Update every second
    
        return () => clearInterval(interval); // Cleanup on unmount
      }, []);
    
      const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const formattedDate = currentTime.toLocaleDateString();
      const formattedDay = currentTime.toLocaleDateString(undefined, { weekday: "long" }).toUpperCase();
    
      return (
        <div className="pt-5 ml-5 mr-5 mb-5 flex w-auto h-20 text-[#bfbfbf] bg-[#2c2c2c] border-b-2 border-[#bfbfbf] border-solid">
          <p className="w-full">Day.<br/>{formattedDay}</p>
          <p className="w-full">Date.<br/>{formattedDate}</p>
          <p className="w-full">Time.<br/>{formattedTime}</p>
        </div>
      );    
}