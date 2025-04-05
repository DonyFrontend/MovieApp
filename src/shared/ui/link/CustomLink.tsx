import { Link, useMatch } from "react-router-dom";

import React from "react";
import { ICustomLink } from "./types/LinkTypes";

const CustomLink: React.FC<ICustomLink> = ({
  image,
  text,
  to,
  activeImage,
}) => {
  const match = useMatch(to);

  return (
    <Link
      to={to}
      className={`flex gap-x-[10px] py-2 hover:bg-gray-700 transition-colors p-3 rounded-lg ${
        match ? "text-[#F8B319] border-r-2 border-r-[#F8B319]" : "text-white"
      }`}
    >
      <img
        src={match ? (activeImage ? activeImage : image) : image}
        alt="Error!"
      />
      <p className="text-[17px] font-semibold">{text}</p>
    </Link>
  );
};

export default CustomLink;
