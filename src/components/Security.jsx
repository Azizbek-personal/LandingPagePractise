import SecurityImage from "../assets/images/security.png";

const Security = () => {
  return (
    <div>
      <div className="container max-w-[1200px] w-full mx-auto mb-[210px] flex flex-row-reverse items-center gap-[85px]">
        {/* leftside */}
        <div className="flex flex-col w-[525px]">
          <h2 className="font-semibold text-[45px]">
          Serving information with  security.
          </h2>
          <p className="text-lg text-[#021206]/70 leading-[160%] pt-4">
          The source of powerful qorld and making future sure. Its a  straight forward software. Paired with dynamic image of the actual tool for you.
          </p>
          <p className="text-lg text-[#021206]/70 leading-[160%] pt-4">
          Where possibilities are made possible. We must have expand <span className="font-semibold"> Possibilities of better tomorrow</span>. The directly secure of your network deliveing  services.
          </p>
        </div>
        {/* rightide */}
        <div>
          <img
            src={SecurityImage}
            alt="security image "
            className="w-[595px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Security;
