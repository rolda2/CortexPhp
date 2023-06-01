import React from "react";

interface HProps {
    description: string;
}

function HSecB ({description}:HProps) {
    return (
        <>
            <h5 className="m-0 relative text-[1.64rem] leading-[110%] text-center md:leading-[1.1em] md:m-[1rem_0_0.656rem_0]">{description}</h5>
        </>
    )
}

export default HSecB;