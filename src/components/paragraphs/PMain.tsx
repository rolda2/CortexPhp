import React from "react";

interface PProps {
    description: string;
}

function PMain ({description}:PProps) {
    return (
        <>
            <p className="leading-[22px] md:text-center">{description}</p>
        </>
    )
}

export default PMain;