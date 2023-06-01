import React from "react";
import PMain from "../paragraphs/PMain";

interface TProps {
    description: string;
    text: string;
}

function TdTimeline ({description, text}:TProps) {
    return (
        <>
        <td className="p-[25px_22px_22px_8px] table-cell text-left align-middle">
            <h6 className="text-[1.15rem] leading-[110%] font-semibold uppercases">{description}</h6>
            <PMain description="Design patterns" />
            <span className="text-[12px] text-[#f55d4b]">{text}</span>
        </td>
        </>
    )
}

export default TdTimeline;