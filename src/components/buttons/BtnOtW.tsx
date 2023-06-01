import React from "react";

interface BtnProps {
    description: string;
    link?: string;
}

function BtnOtW ({description, link}:BtnProps) {
    return (
        <>
            <a href={`#${link}`} className="text-[#ffffff] bg-[#f55d4b] border border-[#f55d4b] cursor-pointer p-[7px_32px] rounded-full m-[10px] transition duration-200 ease-in-out hover:bg-[#ffffff] hover:text-[#f55d4b]">{description}</a>
        </>
    )
}

export default BtnOtW;