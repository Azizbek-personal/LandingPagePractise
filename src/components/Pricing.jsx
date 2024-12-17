import showingupper from "../assets/images/showing-upper.png";
import PricingCards from "./PricingCards.jsx";
import HoverIconLine from "./HoverIconLine.jsx";

const Pricing = () => {
  return (
    <div>
      <div className="container mx-auto max-w-[1200px] w-full mb-[120px] relative">
        <div className="w-[755px] flex flex-col  items-center mx-auto">
          <h2 className="text-[45px] font-semibold pb-5">Best Pricing Plan</h2>
          <p className="text-lg leading-[170%] text-[#021206]/70 pb-9 text-center ">
            Empowering the Internet Generation. Driving the Communication
            Revolution. Technology at the speed of life. Empowered by
            Innovation.
          </p>
          <div className="group gap-4 flex items-center pb-[20px]">
            <p className="group-hover:font-semibold duration-100 text-[#4E5951]">
              Monthly
            </p>
            <div className="w-[58px] h-[28px] relative bg-[#43DDAA] rounded-md z-10 group">
              <div className="w-[17px] h-[16px] absolute bg-white rounded-[3px] top-[6.5px] bottom-[6.5px] right-[7.5px] z-20 transition-transform duration-500 ease-in-out group-hover:translate-x-[-27px]"></div>
            </div>
            <p className="group-hover:font-normal duration-100 font-semibold text-[#4E5951]">
              Quarterly
            </p>
          </div>
          <div className="flex justify-between items-center gap-2 relative mb-7 pr-4">
            <p className="font-semibold text-lg text-[#021206]/70">
              Save up to 40%
            </p>
            <img
              src={showingupper}
              alt="showing-upper"
              className="absolute -top-2 -right-8"
            />
          </div>
          <HoverIconLine />
        </div>
        <div className="flex items-center justify-between px-[27px] z-10">
        <PricingCards plan={'BASIC PLAN'} cost={0}/>
        <PricingCards plan={'PREMIUM PLAN'} cost={130}/>
        <PricingCards plan={'ULTIMATE PLAN'} cost={210}/>
        </div>
        <img src="src/assets/images/bg-ellipse-yellow.png" alt="bg-ellipse" className="absolute top-[730px] -z-10 left-[-110px]" />
        <img src="src/assets/images/bg-ellipse-green.png" alt="bg-ellipse" className="absolute top-[495px] -z-10 right-[-100px]"/>
      </div>
    </div>
  );
};

export default Pricing;
