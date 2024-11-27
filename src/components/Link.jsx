import React from "react";

const Link = ({ text, className }) => {
  return (
    <p>
      <a className={`font-normal text-lg ${className} duration-300`} href="#">{text}</a>
    </p>
  );
};

export default Link;
