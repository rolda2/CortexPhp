import React from "react";

interface BtnProps {
    description: string;
    link?: string;
}

function BtnNtW ({description, link}:BtnProps) {
    return (
        <>
            <a href={`#${link}`} className="rounded-full border border-[#ffffff] p-[7px_32px] m-[10px] bg-[transparent] text-[#ffffff] cursor-pointer transition duration-200 ease-in-out hover:text-[#f55d4b] hover:bg-[#ffffff]">{description}</a>
        </>
    )
}

export default BtnNtW;