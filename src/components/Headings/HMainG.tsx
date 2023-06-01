import React from "react";

interface HProps {
    description: string;
}

function HMainG ({description}:HProps) {
    return (
        <>
            <h1 className="uppercase m-0 text-[rgba(68,68,68,0.1)] text-[62px] text-center md:m-[4.4rem_0_1.6rem_0] md:leading-[1.1em] md:font-normal">{description}</h1>
        </>
    )
}

export default HMainG;