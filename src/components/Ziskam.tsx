import React from "react";
import BtnOtW from "./buttons/BtnOtW";
import PMain from "./paragraphs/PMain";
import HMainG from "./Headings/HMainG";
import HSecB from "./Headings/HSecB";
import * as Scroll from 'react-scroll';
var Element = Scroll.Element;
var scroller = Scroll.scroller;

function Ziskam () {
    return (
        <>
        <div id="gain" className="bg-[#fafafa]">
        <div className="bg-[url('./img/light-lamp.png')] md:bg-none bg-no-repeat bg-[left_40px_top]">
        <div className="bg-[url('./img/o-co-ziskam.png')] md:bg-none bg-no-repeat bg-[left_85%_center]">
            <div className="p-[100px_0] m-[0_auto] max-w-7xl w-[70%] md:w-[85%] md:p[50px_0]">
                <div className="ml-auto mr-auto mb-[20px] align-baseline">
                    <div className="w-2/4 box-border p-[0_0.75rem] md:w-[66%] md:ml-[16%]">
                        <div className="relative mb-[24px] md:block">
                            <HMainG description="WHAT WILL I GAIN?" />
                            <HSecB description="BY GRADUATING PHP ACADEMY" />
                        </div>
                        <PMain description="At the end of the training, you will acquire:" />
                        <ul className="m-[50px_0] pl-0 list-disc">
                            <li className="leading-[22px]">
                                <i className="text-[1rem]"></i>
                                Essential knowledge for Object-Oriented Programming
                            </li>
                            <li className="leading-[22px]">
                                <i className="text-[1rem]"></i>
                                Access to online lectures
                            </li>
                            <li className="leading-[22px]">
                                <i className="text-[1rem]"></i>
                                Practical tips & tricks for more effective PHP use
                            </li>
                            <li className="leading-[22px]">
                                <i className="text-[1rem]"></i>
                                Graduation certificate
                            </li>
                        </ul>
                        <BtnOtW description="Sign Up" />
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default Ziskam;