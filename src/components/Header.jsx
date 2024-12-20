import React from "react";
import logo from "../assets/icons/logo.png";
import Button from "../components/Button";
import Link from "../components/Link";

const Header = () => {
  return (
    <header>
      <div className="container max-w-[1200px] w-full  mx-auto py-6 sm:py-12 px-3 sm:px-4">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="flex items-center justify-center">
            <a href="#">
              <img src={logo} alt="Logo" />
            </a>
          </div>

          {/* nav */}
          <nav className="hidden items-center md:flex">
            <ul className="flex items-center justify-between gap-9">
              <li>
                <Link
                  text="Feature"
                  className="text-[#7F8881] hover:text-[#4E5951]"
                />
              </li>
              <li>
                <Link
                  text="Download"
                  className="text-[#7F8881] hover:text-[#4E5951]"
                />
              </li>
              <li>
                <Link
                  text="Pricing"
                  className="text-[#7F8881] hover:text-[#4E5951]"
                />
              </li>
            </ul>
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-5">
            <Link
              className="text-[#4E5951] hover:text-[#7F8881]"
              text="Login"
            />
            <Button text="Sign up" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
