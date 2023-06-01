import React from "react";

interface BtnProps {
    description: string;
    link?: string;
}

function BtnWtN ({description, link}:BtnProps) {
    return (
        <>
            <a href={`#${link}`} className="rounded-full border border-[#ffffff] p-[7px_32px] m-[10px] bg-[#ffffff] text-[#f55d4b] cursor-pointer transition duration-200 ease-in-out hover:text-[#ffffff] hover:bg-[transparent]">{description}</a>
        </>
    )
}

export default BtnWtN;