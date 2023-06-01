import React from "react";
import BtnOtW from "./buttons/BtnOtW";

function Dates () {
    return (
        <>
        <div className="bg-[url('./img/poly-grey.png')] bg-repeat bg-center">
            <div className="p-[100px_0] w-full m-[0_auto]">
                <div className="ml-auto mr-auto mb-[20px]">
                    <div className="ml-auto w-50% text-center p-[0_0.75rem]">
                        <h4 className="uppercase text-[2.28rem] leading-[110%] m-[1.52rem_0_0.912rem_0]">DATES</h4>
                        <p className="leading-[22px]">Get the edge over others thanks to PHP Academy</p>
                    </div>
                </div>
                <div className="ml-auto mr-auto mb-[20px]">
                    <div className="w-full ml-auto p-[0_0.75rem] text-center">
                        <BtnOtW description={"7.2. - 11.2.2022"} />
                        <BtnOtW description={"4.4. - 8.4.2022"} />
                        <BtnOtW description={"6.6 - 10.6.2022"} />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Dates;
/* @util/command.js*/