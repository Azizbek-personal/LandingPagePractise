const HoverIconLine = () => {
    return (
      <div className="group w-[1146px] bg-[#F6F6F6] rounded-full h-2.5 mb-[90px] mt-[40px] relative">
        {/* Inner Gradient Bar */}
        <div className="bg-gradient-to-br from-[#85FED6] to-[#4EDAAC] h-2.5 rounded-full w-[50%] shadow-lg shadow-[#53D7AB]"></div>
  
        {/* Circular Indicator */}
        <div className="bg-white rounded-full w-6 absolute -top-[6px] left-[50%] -translate-x-4 -translate-y-1 h-6 border-4 border-white bg-gradient-to-br from-[#85FED6] to-[#4EDAAC] shadow-lg shadow-[#53D7AB]"></div>
  
        {/* Icon (Visible on Hover with smooth transition) */}
        <img
          src="src/assets/icons/cost.svg"
          alt="icon"
          className="opacity-0 group-hover:opacity-100 pointer-events-none w-[83px] h-[45px] absolute top-[-60px] left-[50%] -translate-x-1/2 transition-opacity duration-300"
        />
      </div>
    );
  };
  
  export default HoverIconLine;