import DoneLogo from "../assets/images/done-logo.png";
import AnalysImage from "../assets/images/analys.png";

const Analys = () => {
  return (
    <div>
      <div className="container max-w-[1200px] w-full mx-auto mb-[210px] flex items-center gap-[85px]">
        {/* leftside */}
        <div className="flex flex-col w-[525px]">
          <h2 className="font-semibold text-[45px]">
            Discover & growth with analysis.
          </h2>
          <p className="text-lg text-[#021206]/70 leading-[160%] pt-5 font-medium">
            Software with new dimensions. The better future and information
            about the virtual world.
          </p>
          <br /> <br />
          <ul className="flex flex-col items-start gap-4">
            <li className="flex items-center gap-3 text-lg leading-[160%] text-[#021206]/70">
              <img src={DoneLogo} alt="done-logo" />
              Software with new dimensions the better.
            </li>
            <li className="flex items-center gap-3 text-lg leading-[160%] text-[#021206]/70">
              <img src={DoneLogo} alt="done-logo" />
              Effortlessly manages all your information.
            </li>
            <li className="flex items-center gap-3 text-lg leading-[160%] text-[#021206]/70">
              <img src={DoneLogo} alt="done-logo" />
              Simple Solutions for Complex Connections.
            </li>
            <li className="flex items-center gap-3 text-lg leading-[160%] text-[#021206]/70">
              <img src={DoneLogo} alt="done-logo" />
              Complete business solutions for customers.
            </li>
          </ul>
        </div>
        {/* rightide */}
        <div>
          <img
            src={AnalysImage}
            alt="analys image "
            className="w-[595px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Analys;
