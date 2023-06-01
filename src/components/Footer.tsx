import React from "react";
import HSecB from "./Headings/HSecB";

function Footer () {
    return (
        <>
        <div className="bg-[url('./img/poly-grey.png')] bg-repeat bg-center">
            <div className="p-[15px_0] w-[70%] m-[0_auto]">
                <div className="flex flex-wrap mb-0">
                    <div className="w-[33.333333%] self-center ml-auto p-[0_0.75rem] text-center">
                        <HSecB description="Contacts" />
                        <p className="">
                            Cortex, a.s.
                            <br></br>
                             U Elektry 974/1c,
                            <br></br>
                             190 00 Praha
                        </p>
                    </div>
                    <div className="w-[33.333333%] self-center ml-auto p-[0_0.75rem] text-center border-x border-[#f55d4b]">
                        <HSecB description="Phone" />
                        <p className="">+420 266 610 465</p>
                        <HSecB description="E-mail" />
                        <p className="">phpacademy@cortex.cz</p>
                    </div>
                    <div className="w-[33.333333%] self-center ml-auto p-[0_0.75rem] text-center">
                        <p className="">
                            IČO: 471 256 16, DIČ: CZ 471 256 16
                            <br></br>
                             Cortex, a.s. is registered in commercial register
                            <br></br>
                             by the Prague Municipal court,
                            <br></br>
                             section C, entry 13052
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;