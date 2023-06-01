import React from "react";
import BtnOtW from "./buttons/BtnOtW";
import HMainG from "./Headings/HMainG";
import HSecB from "./Headings/HSecB";
import SignUpForm from "./forms/SignUpForm";

function Signup () {
    return (
        <>
            <div className="md:bg-[url('./img/blank-business-composition.png')] 2xlm:bg-[url('./img/o-form.png'),_url('./img/blank-business-composition.png')] bg-[left_center] bg-no-repeat relative">
                <div className="p-[100px_0] w-[70%] m-[0_auto] md:w-[85%] md:p-[100px_0]">
                    <div className="mr-auto mb-[20px]">
                        <div className="relative mb-[24px]">
                            <HMainG description="APPLICATION" />
                            <HSecB description="SIGN UP AND DISCOVER THE WORLD OF #PHP" />
                        </div>
                    </div>
                    <div className="ml-auto mr-auto mb-[20px]">
                        <SignUpForm />
                    </div>
                    <div className=""></div>
                </div>
            </div>
        </>
    )
}

export default Signup;