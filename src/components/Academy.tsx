import React from "react";
import { useInView } from "react-intersection-observer";
import HMainG from "./Headings/HMainG";
import PMain from "./paragraphs/PMain";
import HSecB from "./Headings/HSecB";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import styles from './css/Line.module.css';

interface Shape {
    top?: number;
    left?: number;
    bottom?: number;
    right?: number;
  }

interface Props {
    onChange?: (isVisible: boolean) => void;
    active?: boolean;
    partialVisibility?: boolean;
    offset?: Shape;
    minTopValue?: number;
    intervalCheck?: boolean;
    intervalDelay?: number;
    scrollCheck?: boolean;
    scrollDelay?: number;
    scrollThrottle?: number;
    resizeCheck?: boolean;
    resizeDelay?: number;
    resizeThrottle?: number;
    containment?: any;
    delayedCall?: boolean;
    isVisible?: boolean;
    children?:
      | React.ReactNode
      | ((
          args: { isVisible: boolean; visibilityRect?: Shape }
        ) => React.ReactNode);
  }

function Academy ({children}:Props) {
    return (
        <>
        <div id="academy" className="bg-[url('./img/o-php-academy.png')] md:bg-none bg-no-repeat bg-left bg-[size:20%]">
        <div className="bg-[url('./img/ipad.png')] md:bg-none bg-no-repeat bg-right bg-[size:20%] border-b border-[#d6d6d6]">
            <div></div>
            <div className="p-[100px_0] w-[70%] m-auto md:p-[100px_0] md:w-[85%] md:m-[0_auto]">
                <div className="mr-auto ml-auto mb-[20px]">
                    <div className="ml-[25%] w-[66%] p-[0_0.75rem] md:ml-[16%] md:w-[66%]">
                        <div className="relative mb-[24px] md:block md:mb-0">
                            <HMainG description="PHP academy" />
                            <HSecB description="Training Introduction" />
                        </div>
                        <PMain description="Interactive training focused on homing basic programming knowledge, learning Object-Oriented Programing, and mastering any framework. Thanks to this training, you will gain programming knowledge, for example, for e-shop creation." />
                        <br></br>
                        <PMain description="Graduating from PHP Academy provides you with capabilities and knowledge at the level of a junior programmer." />
                        <br></br>
                        <PMain description="Training takes place during five training days with four-hour tuition and one hour of consulting." />
                        <div className="m-[0_150px_0_30px] md:m-0">
                            <h5 className="uppercase m-[60px_0] text-right text-[1.64rem] leading-[110%] md:text-center md:leading-[1.1em]">Training focus</h5>
                            <PMain description="Programmer Development" />
                            <div className="relative w-full h-[5px] bg-[rgba(68,68,68,0.1)] m-[15px_0]">
                                <div id="line" className="w-[70%] absolute h-[5px] bg-[#f55d4b] transition duration-300 ease"></div>
                            </div>
                            <PMain description="Gaining Practical Experience" />
                            <div className="relative w-full h-[5px] bg-[rgba(68,68,68,0.1)] m-[15px_0]">
                                <div id="line" className="w-[90%] absolute h-[5px] bg-[#f55d4b] transition duration-300 ease"></div>
                            </div>
                            <PMain description="Improved Code Understanding" />
                            <div className="relative w-full h-[5px] bg-[rgba(68,68,68,0.1)] m-[15px_0]">
                                <div id="line" className="w-0 absolute h-[5px] bg-[#f55d4b] duration-300 ease transition-width-[85%]"></div>
                                <ReactVisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                                    <div id="line" className={styles.line3}></div>
                                </ReactVisibilitySensor>
                            </div>
                        </div>
                        <h5 className="m-[80px_0_50px_0] text-center text-[1.64rem] leading-[110%] md:leading-[1.1em]">Additional Information</h5>
                    </div>
                </div>
                <div className="ml-auto mr-auto mb-[20px]">
                    <div className="text-left flex justify-center flex-wrap w-full ml-auto p-[0_0.75rem] md:text-center">
                        <div className="w-[220px] self-start m-[5px]">
                            <ReactVisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                                {({ isVisible }:Props) => (
                                <h4 className="text-[2.28rem] leading-[110%] m-[1.52rem_0_0.912rem_0]">
                                    {isVisible ? <CountUp start={0} end={10} duration={2.75} /> : '0'}
                                </h4>
                                )}
                            </ReactVisibilitySensor>
                            <PMain description="Experienced Tutors" />
                        </div>
                        <div className="w-[220px] self-start m-[5px]">
                            <ReactVisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                                {({ isVisible }:Props) => (
                                <h4 className="text-[2.28rem] leading-[110%] m-[1.52rem_0_0.912rem_0]">
                                    {isVisible ? <CountUp start={0} end={7} duration={2.75} /> : '0'}
                                </h4>
                                )}
                            </ReactVisibilitySensor>
                            <PMain description="Main Topics with Real-Life Examples" />
                        </div>
                        <div className="w-[220px] self-start m-[5px]">
                            <ReactVisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                                {({ isVisible }:Props) => (
                                <h4 className="text-[2.28rem] leading-[110%] m-[1.52rem_0_0.912rem_0]">
                                    {isVisible ? <CountUp start={0} end={20} duration={2.75} suffix="+" /> : '0'}
                                </h4>
                                )}
                            </ReactVisibilitySensor>
                            <PMain description="Hours of Practical Tuition" />
                        </div>
                        <div className="w-[220px] self-start m-[5px]">
                            <ReactVisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                                {({ isVisible }:Props) => (
                                <h4 className="text-[2.28rem] leading-[110%] m-[1.52rem_0_0.912rem_0]">
                                    {isVisible ? <CountUp start={0} end={100} duration={2.75} suffix="%"/> : '0'}
                                </h4>
                                )}
                            </ReactVisibilitySensor>
                            <PMain description="Individual Approach" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Academy;