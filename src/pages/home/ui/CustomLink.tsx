import { Link, useMatch } from "react-router-dom";

import React from 'react'

type ICustomLink = {
    text: string,
    to: string
}

const CustomLink: React.FC<ICustomLink> = ({ text, to }) => {
    const match = useMatch(to)

    return (
        <Link to={to} className={`flex gap-x-[10px] py-2 transition-all p-3 rounded-lg ${match ? 'text-[#F8B319]' : 'text-white'}`}>
            <p className={`text-[17px] font-semibold ${match && 'text-[25px]'} transition-all`}>{text}</p>
        </Link>
    )
}

export default CustomLink;