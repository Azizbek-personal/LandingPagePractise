import SoftwareImage from "../assets/images/software.png";
import Button from "./Button";

const Software = () => {
  return (
    <div className="bg-[#8EE6C9]/10 relative py-[91px] mb-[210px]">
      <div className="container max-w-[1200px] w-full mx-auto  flex items-center gap-[85px] ">
        {/* leftside */}
        <div className="flex flex-col w-[525px]">
          <h2 className="font-semibold text-[45px]">
          Get our software
                    </h2>
          <p className="text-lg text-[#021206]/70 leading-[160%] pt-4">
          The source of powerful qorld and making your future sure. It’s a  straight forward software for you.
          </p>
          <p className="text-lg text-[#021206]/70 leading-[160%] pt-4">
          The source of powerful qorld and making future sure. Its a  straight forward software. Paired with dynamic image of the actual tool and the performance.          </p>
          <br />
          <Button text={'Download Now'} />
        </div>
        {/* rightide */}
        <div>
          <img
            src={SoftwareImage}
            alt="software image "
            className="w-[595px] object-cover -top-[90px] absolute"
          />
        </div>
      </div>
    </div>
  );
};

export default Software;
