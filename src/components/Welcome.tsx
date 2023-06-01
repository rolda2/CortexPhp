import React from "react";
import BtnWelcome from "./buttons/BtnWelcome";
import { useEffect, useState } from "react";
import "../App.css";

interface MousePosition {
    x: number;
    y: number;
}

function Welcome () {
    const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 });
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePos({ x: event.clientX, y: event.clientY });

            const HalfCircleElement = document.getElementById("HalfCircle");
            if(HalfCircleElement) {
                const yOffset = (event.clientY / window.innerHeight) * -5;
                HalfCircleElement.style.transform = `translateY(${yOffset}%)`;
            }

            const FullCirceElement = document.getElementById("FullCircle");
            if(FullCirceElement) {
                const xOffset = (event.clientX / window.innerWidth) * -3;
                FullCirceElement.style.transform = `translateX(${xOffset}%)`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
        <div className="">
            <div className="m-[0_auto] max-w-7xl absolute top-2/4 z-[1] translate-x-[20%] translate-y-[-50%] md:p-[100px_0] md:m-[0_auto] md:w-[85%] md:relative md:left-0 md:translate-x-[none] md:translate-y-[none] md:top-[50%]">
                <div className="p-[34px_0_34px_19px] bg-[url('./img/ellipse.png')] bg-[length:191px_191px] bg-no-repeat bg-left mb-[20px] md:bg-[length:170px_170px]">
                    <div className="pr-3">
                        <h4 className="text-[34px] md:text-[25px] m-[1.52rem_0_0.912rem_0] font-normal">
                            <span className="text-white md:text-[#000000de]">Gain Basic </span>
                            Knowledge for E-Shop Creation
                        </h4>
                        <h2 className="uppercase text-[52px] md:text-[40px]">
                            <span className="text-white pr-[12px] md:text-[#000000de]">#PHP </span>
                             Academy
                        </h2>
                    </div>
                </div>
                <div className="mb-5 p-[0_0.75rem]">
                    <div className="w-full ml-auto">
                        <p className="leading-6">Experience training focused on tools and principles.</p>
                    </div>
                </div>
                <div className="mb-[20px]">
                    <div className="p-[0_0.75rem]">
                        <BtnWelcome description="Sign Up" />
                    </div>
                </div>
            </div>
            <ul className="relative overflow-hidden h-[calc(100vh-64px)] w-full md:hidden">
                <li id="HalfCircle" className="md:hidden"></li>
                <li id="FullCircle" className="md:hidden"></li>
                <li className="absolute w-full h-full bg-[url('./img/test2.png')] bg-no-repeat bg-[right_5%_bottom] bg-[size:32%] md:hidden"></li>
            </ul>
        </div>

        </>
    )
}

export default Welcome;