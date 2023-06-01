import React from "react";

interface BtnProps {
    description: string;
    link?: string;
}

function BtnWelcome ({description, link}:BtnProps) {
    return (
        <>
            <a href={`#${link}`} className="rounded-full border border-[#444444] p-[7px_32px] m-[10px] w-[83.333333%] cursor-pointer transition duration-200 ease-in-out hover:bg-[#f55d4b] hover:text-[#ffffff] hover:border-none">{description}</a>
        </>
    )
}

export default BtnWelcome;
