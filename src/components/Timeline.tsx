import React from "react";
import PMain from "./paragraphs/PMain";
import HSecB from "./Headings/HSecB";
import HMainG from "./Headings/HMainG";
import TdTimeline from "./table/TdTimeline";
import VerticalTimeline from "./table/VerticalTimeline";

function Timeline () {
    return (
        <>
        <div className="">
            <div className="">
                <div className="ml-auto mr-auto mb-[20px]">
                    <div className="text-center">
                        <div className="m-[100px_0_24px_0] relative md:block">
                            <HMainG description="TRAINING TIMELINE" />
                            <HSecB description="THE MAIN TOPICS" />
                        </div>
                    </div>
                </div>
                <div className="ml-auto mr-auto mb-[20px] text-center">
                    <div className="w-full ml-auto p-[0_0.75rem] md:ml-[25%] md:w-[50%]">
                        <PMain description="We selected the PHP Academy topics to give you the knowledge and tips & tricks helpful for both small and large projects." />
                    </div>
                </div>
                <div className="ml-auto mr-auto mb-[20px]">
                    <div className="block ml-[8.333333%] w-[83.333333%] p-[0_0.75rem] lg:hidden">
                        <table className="bg-[url('./img/timeline.png')] md:bg-none md:hidden bg-no-repeat bg-center bg-[size:100%] m-[60px_0_100px_0] w-full table border-collapse border-spacing-0">
                            <tbody className="">
                                <tr className="">
                                    <td className="p-[25px_22px_22px_8px] table-cell text-left align-middle w-[3%]"></td>
                                    <td className="p-[25px_22px_22px_8px] table-cell text-left align-middle w-[13%]"></td>
                                    <td className="p-[25px_22px_22px_8px] table-cell text-left align-middle w-[18%]">
                                        <h6 className="text-[1.15rem] leading-[110%] font-semibold">PostgreSQL and DIBI</h6>
                                        <PMain description="Database abstraction library" />
                                        <span className="text-[12px] text-[#f55d4b]">2nd topic</span>
                                    </td>
                                    <td className="p-[25px_22px_22px_8px] table-cell text-left align-middle w-[15%]"></td>
                                    <td className="p-[25px_22px_22px_8px] table-cell text-left align-middle w-[16%]">
                                        <h6 className="text-[1.15rem] leading-[110%] uppercase font-semibold">
                                            Advanced 
                                            <br></br>
                                            techniques
                                        </h6>
                                        <PMain description="PHP made more efficient" />
                                        <span className="text-[12px] text-[#f55d4b]">4th topic</span>
                                    </td>
                                    <td className="p-[25px_22px_22px_8px] table-cell text-left align-middle w-[15%]"></td>
                                    <td className="p-[25px_22px_22px_8px] table-cell text-left align-middle w-[9%]">
                                        <h6 className="text-[1.15rem] leading-[110%] font-semibold">AJAX</h6>
                                        <PMain description="JSON" />
                                        <span className="text-[12px] text-[#f55d4b]">6th topic</span>
                                    </td>
                                    <td className="p-[25px_22px_22px_8px] table-cell text-left align-middle w-[11%]"></td>
                                </tr>
                                <tr className="">
                                    <td className="p-[25px_22px_22px_8px] table-cell text-left align-middle"></td>
                                    <td className="p-[25px_22px_22px_8px] table-cell text-left align-middle">
                                        <h6 className="text-[1.15rem] leading-[110%] font-semibold">OOP in PHP</h6>
                                        <p className="leading-[22px]">
                                            Program as a 
                                            <br></br>
                                            kit set
                                        </p>
                                        <span className="text-[12px] text-[#f55d4b]">1st topic</span>
                                    </td>
                                    <td className="p-[25px_22px_22px_8px] table-cell text-left align-middle"></td>
                                    <TdTimeline description={"Application architecture"} text="3rd topic"></TdTimeline>
                                    <td className="p-[25px_22px_22px_8px] table-cell text-left align-middle"></td>
                                    <td className="p-[25px_22px_22px_8px] table-cell text-left align-middle">
                                        <h6 className="text-[1.15rem] leading-[110%] font-semibold">SECURITY</h6>
                                        <PMain description="Common vulnerabilities" />
                                        <span className="text-[12px] text-[#f55d4b]">5th topic</span>
                                    </td>
                                    <td className="p-[25px_22px_22px_8px] table-cell text-left align-middle"></td>
                                    <td className="p-[25px_22px_22px_8px] table-cell text-left align-middle">
                                        <h6 className="text-[1.15rem] leading-[110%] font-semibold uppercase">Integrations</h6>
                                        <PMain description="SOAP, REST API" />
                                        <span className="text-[12px] text-[#f55d4b]">7th topic</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="">
                        <VerticalTimeline />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Timeline;

/* Application architecture 3rd topic SECURITY 5th topic*/