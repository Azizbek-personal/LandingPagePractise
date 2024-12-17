import DoneLogo from '../assets/images/done-logo.png';
import Button from './Button';

const PricingCards = ({plan, cost}) => {
  return (
    <div>
        <div className="bg-white w-[361px] h-[605px] border border-[000000]/10 rounded-2xl hover:shadow-xl duration-300 ">
            <div className='flex flex-col items-center justify-center gap-9 my-[37px]'>
                <h4 className='text-[#021206]/50 font-semibold text-xl leading-[170%]'>{plan}</h4>
                <p className='text-[#021206] font-semibold text-[43px] leading-[100%]'>${cost}</p>
            </div>
            <div>
                <ul>
                    <li className='flex items-center justify-between border-t py-[22px] px-[29px] border-[#011212]/10'><div className='flex items-center gap-2.5 font-medium text-base text-[#021206]/70'><img src={DoneLogo} alt="done logo" />Limited Acess Library</div> <span className='font-medium text-base text-[#021206]/70'>Yes</span></li>
                   
                    <li className='flex items-center line-through justify-between border-t py-[22px] px-[29px] border-[#011212]/10'><div className='flex items-center gap-2.5 font-medium text-base text-[#021206]/50'><img src={DoneLogo} alt="done logo" />Limited Acess Library</div> <span className='font-medium text-base text-[#021206]/50'>Yes</span></li>
                   
                    <li className='flex items-center line-through justify-between border-t py-[22px] px-[29px] border-[#011212]/10'><div className='flex items-center gap-2.5 font-medium text-base text-[#021206]/50'><img src={DoneLogo} alt="done logo" />Limited Acess Library</div> <span className='font-medium text-base text-[#021206]/50'>Yes</span></li>
                   
                    <li className='flex items-center line-through justify-between border-t border-b py-[22px] px-[29px] border-[#011212]/10'><div className='flex items-center gap-2.5 font-medium text-base text-[#021206]/50'><img src={DoneLogo} alt="done logo" />Limited Acess Library</div> <span className='font-medium text-base text-[#021206]/50'>Yes</span></li>
                </ul>
                <div className='flex justify-center pt-[42px]'>
                <Button text={"Buy Plan"} className={"w-[240px]"} />
                </div>
                </div>
        </div>
    </div>
  )
}

export default PricingCards;