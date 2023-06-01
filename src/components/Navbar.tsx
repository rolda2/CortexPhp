import React from "react";
import LiNav from "./list/LiNav";
var Scroll   = require('react-scroll');
var Element  = Scroll.Element;
var scroller = Scroll.scroller;

function Navbar () {
    scroller.scrollTo('gain', {
        duration: 1500,
        delay: 100,
        smooth: true,
        containerId: 'gain1',
    })
    return (
        <>
        <div className="sticky shadow-[0_2px_2px_0_rgba(0,0,0,0.14),0_3px_1px_-2px_rgba(0,0,0,0.12),0_1px_5px_0_rgba(0,0,0,0.2)] overflow-hidden top-0 z-10">
            <nav className="bg-[#2a2a2a] text-white h-[64px] leading-[64px]">
                <div className="h-full relative">
                    <ul className="text-center">
                        <li className="inline-block text-[#f55d4b] transition duration-300 ease-in-out hover:bg-[#000000]">
                            <a href="/" className="uppercase px-[15px] py-[21px]">
                                Home
                            </a>
                        </li>
                        <LiNav />
                    </ul>
                </div>
            </nav>
        </div>
        </>
    )
}

export default Navbar;