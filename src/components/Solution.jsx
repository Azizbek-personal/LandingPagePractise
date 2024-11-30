import Button from '../components/Button';
import Link from '../components/Link';

const Solution = () => {
  return (
    <div className="my-[110px]">
      <div className="container mx-auto">
        <div className='flex gap-20 items-center'>
          {/* leftside */}
          <div className="flex flex-wrap gap-[30px] w-[600px]">
            <article className="flex flex-col w-[282px] h-[290px] py-9 pl-9 pr-4 bg-white rounded-[10px] border border-[#021206]/10 hover:shadow-2xl duration-300 justify-between">
              <div className="w-[75px] h-[75px] bg-gradient-to-br shadow-[1px_5px_30px_0] shadow-[#D71515]/50 from-[#FF9A9A] to-[#F14C4C] flex justify-center items-center rounded-[10px]">
                <i class="fa-solid fa-gear text-4xl text-white"></i>
              </div>
              <h4 className="text-[21px] text-[#021206]">Easy Settings</h4>
              <p className="text-base text-[#021206]/70 leading-[160%]">
                A complete about-face in core economic amsterday bilamco
                progressive.
              </p>
            </article>

            <article className="flex flex-col w-[282px] h-[290px] py-9 pl-9 pr-4 bg-white rounded-[10px] border border-[#021206]/10 hover:shadow-2xl duration-300 justify-between">
              <div className="w-[75px] h-[75px] bg-gradient-to-br shadow-[1px_5px_30px_0] shadow-[#53D7AB]/50 from-[#85FED6] to-[#4EDAAC] flex justify-center items-center rounded-[10px]">
                <i class="fa-solid fa-user text-4xl text-white"></i>
              </div>
              <h4 className="text-[21px] text-[#021206]">User Friendly</h4>
              <p className="text-base text-[#021206]/70 leading-[160%]">
                A complete about-face in core economic amsterday bilamco
                progressive.
              </p>
            </article>

            <article className="flex flex-col w-[282px] h-[290px] py-9 pl-9 pr-4 bg-white rounded-[10px] border border-[#021206]/10 hover:shadow-2xl duration-300 justify-between">
              <div className="w-[75px] h-[75px] bg-gradient-to-br shadow-[1px_5px_30px_0] shadow-[#EEB92A]/50 from-[#FCD876] to-[#FABC13] flex justify-center items-center rounded-[10px]">
                <i class="fa-solid fa-shield text-4xl text-white"></i>
              </div>
              <h4 className="text-[21px] text-[#021206]">Full Secured</h4>
              <p className="text-base text-[#021206]/70 leading-[160%]">
                A complete about-face in core economic amsterday bilamco
                progressive.
              </p>
            </article>

            <article className="flex flex-col w-[282px] h-[290px] py-9 pl-9 pr-4 bg-white rounded-[10px] border border-[#021206]/10 hover:shadow-2xl duration-300 justify-between">
              <div className="w-[75px] h-[75px] bg-gradient-to-br shadow-[1px_5px_30px_0] shadow-[#E644D6]/50 from-[#FE9AF4] to-[#EC4EDC] flex justify-center items-center rounded-[10px]">
                <i class="fa-solid fa-code text-4xl text-white"></i>
              </div>
              <h4 className="text-[21px] text-[#021206]">Clean Code</h4>
              <p className="text-base text-[#021206]/70 leading-[160%]">
                A complete about-face in core economic amsterday bilamco
                progressive.
              </p>
            </article>
          </div>

          {/* rightside */}
          <div className='flex flex-col w-[550px]'>
            <h2 className="font-semibold text-[45px]">A complete software solution for you</h2>
            <p className="text-lg text-[#021206]/70 leading-[160%] pt-5">
              The source of powerful qorld and making future sure. Its a
              straight forward software.
            </p>
            <br /> <br />
            <p className="text-lg text-[#021206]/70 leading-[160%]">
              Where possibilities are made possible. We must have expand{" "}
              <span className='font-semibold'> Possibilities of better tomorrow</span>. The directly
              secure of your network delivering services.
            </p>
            <div className='flex mt-[30px] items-center gap-6'>
              <Button
                text={"Learn more"}
                className="bg-[#282323] border-[#282323] hover:text-black"
              />
              <Link text={"Ask?"} className="hover:text-red-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
