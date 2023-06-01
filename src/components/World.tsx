import React from "react";
import BtnWtN from "./buttons/BtnWtN";
import BtnNtW from "./buttons/BtnNtW";
import PMain from "./paragraphs/PMain";

function World () {
    return (
        <>
        <div id="world" className="md:bg-[url(./img/poly-orange.png)] bg-[url('./img/o-white.png'),_url('./img/poly-orange.png')] bg-[position:left_center,_center] bg-no-repeat text-[#ffffff] text-center">
            <div className="p-[200px_0] m-[0_auto] max-w-7xl w-[70%] md:w-[85%] md:p-[100px_0]">
                <div className="ml-auto mr-auto mb-[20px]">
                    <div className="p-[0_0.75rem] w-2/4 ml-[25%] md:w-[50%]">
                        <h4 className="text-[2.28rem] leading-[110%] m-[1.52rem_0_0.912rem_0] font-normal">DISCOVER THE WORLD OF PHP ACADEMY</h4>
                        <PMain description="Sign up for PHP Academy training to learn everything necessary to make programming your dream job." />
                    </div>
                </div>
                <div className="ml-auto mr-auto mb-[20px]">
                    <div className="text-center">
                        <BtnWtN description="Sign Up" />
                        <BtnNtW description="Dates" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default World;

/*  */