import React from "react";

function SignUpForm() {
    return (
        <>
        <form>
            <div className="w-[66.6666667%] ml-[16.6666667%] p-[0_0.75rem]">
                <div className="h-[50px] bg-[#f55d4b] rounded-t-2xl"></div>
                <div className="bg-[#ffffff] p-[40px] rounded-b-2xl">
                    <div id="row">
                        <div className="w-[50%] p-[0_0.75rem]">
                            <div id="input">
                                <input id="name" name="name" type="text" className="input" placeholder=" "></input>
                                <label id="label" htmlFor="name">Name and Surname</label>
                            </div>
                            <div id="input">
                                <input id="email" name="email" type="email" className="input" placeholder=" "></input>
                                <label id="label" htmlFor="email">E-mail</label>
                            </div>
                            <div id="input">
                                <input id="phoneNum" name="phoneNum" type="text" className="input" placeholder=" "></input>
                                <label id="label" htmlFor="phoneNum">Phone number</label>
                            </div>
                        </div>
                        <div className="w-[50%] p-[0_0.75rem]">
                            <div className="w-full left-auto right-auto p-[0_0.75rem] relative mt-[1rem] mb-[1rem]">
                                <div className="">
                                    <select id="type" name="type" className="w-full outline-none border-b border-[#9e9e9e] h-12 mb-2">
                                        <option value="Regular">Regular Access</option>
                                        <option value="Early">Early Access</option>
                                        <option value="Student">Student Academy</option>
                                    </select> 
                                </div>
                                <label className="w-full absolute left-3 top-[-0.75rem] text-[0.8rem] text-[#f55d4b]">
                                    Course Price
                                </label>
                            </div>
                            <div className="w-full left-auto right-auto p-[0_0.75rem] relative mt-[1rem] mb-[1rem]">
                                <div className="">
                                    <select id="type" name="type" className="w-full outline-none border-b border-[#9e9e9e] h-12 mb-2">
                                        <option value="Feb">7.2. - 11.2.2022</option>
                                        <option value="Apr">4.4. - 8.4.2022</option>
                                        <option value="June">6.6 - 10.6.2022</option>
                                    </select>
                                </div>
                                <label className="w-full absolute left-3 top-[-0.75rem] text-[0.8rem] text-[#f55d4b]">
                                    Date
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="mb-6">
                        <div className="w-7/12 p-[0_0.75rem]">
                            <button type="submit" className="text-[#ffffff] bg-[#f55d4b] border border-[#f55d4b] cursor-pointer p-[7px_32px] rounded-full m-[10px] transition duration-200 ease-in-out hover:bg-[#ffffff] hover:text-[#f55d4b]">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        </>
    )
}

export default SignUpForm;