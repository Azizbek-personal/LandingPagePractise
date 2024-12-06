import google from "../assets/images/google.png";
import avast from "../assets/images/avast.png";
import ebay from "../assets/images/ebay.png";
import paypal from "../assets/images/paypal.png";
import hubspot from "../assets/images/hubspot.png";

const Partner = () => {
  return (
    <div className="bg-[#8EE6C9]/10">
      <div className="container max-w-[1200px] w-full  mx-auto ">
        <div className="flex item-center justify-between py-[54px] w-full">
          <img src={google} alt="Google logo" width={170} height={57} />
          <img src={avast} alt="Avast logo" width={170} height={54} />
          <img src={ebay} alt="Ebay logo" width={126} height={53} />
          <img src={paypal} alt="Paypal logo" width={170} height={43} />
          <img src={hubspot} alt="Hubspot logo" width={170} height={49} />
        </div>
      </div>
    </div>
  );
};

export default Partner;
