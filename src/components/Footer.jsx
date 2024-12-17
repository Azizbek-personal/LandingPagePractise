const Footer = () => {
  return (
    <footer className="bg-[#8EE6C9]/10 py-14">
        <div className="container max-w-[1200px] w-full mx-auto flex items-center justify-between gap-5">
            <div>
                <nav className="">
                    <ul className="w-[244px] flex flex-col items-start gap-5">
                        <li><a href="#"><img src="src/assets/icons/Logo.png" alt="Logo icon" /></a></li>
                        <li>Software with new look. Live the life that you expect.</li>
                    </ul>
                </nav>
            </div>
            <div>
                <nav>
                    <ul>
                        <li className="font-medium text-xl">Useful link</li>
                        <li className="pt-4 pb-2.5 text-base">Behance</li>
                        <li className="pt-4 pb-2.5 text-base">Dribbble</li>
                    </ul>
                </nav>
            </div>
            <div>
                <nav>
                    <ul>
                        <li className="font-medium text-xl">Support</li>
                        <li className="pt-4 pb-2.5 text-base">Conditions</li>
                        <li className="pt-4 pb-2.5 text-base">Privecy and policy</li>
                    </ul>
                </nav>
            </div>
            <div>
                <nav>
                    <ul>
                        <li className="font-medium text-xl">Contact us</li>
                        <li className="pt-4 pb-2.5 text-base">(773) 217-8810</li>
                        <li className="pt-4 pb-2.5 text-base">Downers Grove, IL 60515</li>
                    </ul>
                </nav>
            </div>
        </div>
    </footer>
  )
}

export default Footer