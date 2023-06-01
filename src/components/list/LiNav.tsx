import React from "react";
var Scroll   = require('react-scroll');
var Element  = Scroll.Element;
var scroller = Scroll.scroller;


function LiNav () {

    const navs = [
        { id: 1, name: "About Academy", link: "#gain" },
        { id: 2, name: "Prices", link: "#price" },
        { id: 3, name: "Dates", link: "#gain" },
        { id: 4, name: "Reservations", link: "#gain" },
        { id: 5, name: "Contact Us", link: "#gain" },
    ]

    return (
        <>
        {navs.map((nav) => (
        
            <li key={nav.id} className="scroll-smooth inline-block transition duration-300 ease-in-out hover:bg-[#000000]">
                <a href={nav.link} className="scroll-smooth uppercase px-[15px] py-[21px]">
                    {nav.name}
                </a>
            </li>
            ))}
        </>
    )
}

export default LiNav;