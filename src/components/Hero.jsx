import heroimage from "../assets/images/HeroImage.png";
import Button from "../components/Button";

const Hero = () => {
  return (
    <div className="container mx-auto">
      <div className="flex max-sm:flex-col items-center justify-center ml-3">
        {/* left side */}
        <div className="w-full max-w-[510px] flex gap-8 flex-col">
          <h1 className="font-semibold text-[54px]">
            Develop Your Life With{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-tr from-[#3EFFC0] to-[#18CA90]">
              One Step...
            </span>
          </h1>
          <p className="font-normal text-sm md:text-base lg:text-lg xl:text-xl opacity-70 leading-[160%]">
            Pushing the possibilities of the internet. Good for the last
            software.{" "}
            <span className="font-medium">Make it A software night.</span>
          </p>
          <label className="relative inline-block">
            <input
              type="email"
              className="w-[475px] h-16  rounded-md drop-shadow-2xl px-6"
              placeholder="Enter your email"
            />
            <Button text={"Send"} className="absolute top-1 right-8" />
          </label>
          {/* download buttons */}
          <div className="flex items-center gap-[30px]">
            <div className="flex items-center gap-4">
              <i class="fa-brands fa-google-play text-xl"></i>
              <div className="flex flex-col items-start">
                <p className="text-[8px] -tracking-[4%] ">Android App on</p>
                <p className="text-base">GOOGLE PLAY</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <i class="fa-brands fa-apple text-3xl"></i>
              <div className="flex flex-col items-start">
                <p className="text-[8px] -tracking-[4%] ">Available on the</p>
                <p className="text-base">APPLE STORE</p>
              </div>
            </div>
          </div>
        </div>

        {/* right side  */}
        <div className="w-full max-w-[870px]">
          <img src={heroimage} alt="Hero Image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
