import React from "react";
import styles from "../components/css/Price.module.css";
import { useState } from "react";
import PriceC from "./price/Cards";

function Price () {
    const cards = [
        { id: 1, course: "Early Access", price: "€ 299", vat: " incl VAT", signup: "SIGN UP EARLY AND ENJOY DISCOUNT.", info: "For registrations more than a month before the start date.", text: "For older than 26 years. Suitable for professionals and enthusiasts aiming to expand their knowledge in OOP programming." },
        { id: 2, course: "Student Academy", price: "Only € 20*", vat: " incl VAT", signup: "Common student price € 199", info: "For students under 26 years.", text: "* Are you a student, and you want to get the lowest possible price? Use our cash-back bonus! Have 100 % training attendance, fulfill all assignments, and then prove your newly gained knowledge at Cortex. After the full payment and meeting the conditions, we will cash you back € 180. Then the training costs only € 20!" },
        { id: 3, course: "Regular Access", price: "€ 399", vat: " incl VAT", signup: "GET PRACTICAL TRAINING FOR A FAIR PRICE.", info: "For older than 26 years.", text: "Suitable for professionals and enthusiasts aiming to expand their knowledge in OOP programming." },
    ];

    const [activeCardIndex, setActiveCardIndex] = useState(1);

    const handleCardClick = (index: number) => {
        setActiveCardIndex(index);
        console.log(index);
    };

   
    return (
        <>
        <div id="price" className="bg-[url('./img/o-price.png'),_url('./img/details.png')] bg-[position:right_center,_center] bg-no-repeat bg-[#f55d4b] bg-[size:auto,cover]">
            <div className="block p-[100px_0]">
                <div className="relative mb-[24px]">
                    <h1 className="m-0 text-[rgba(255,255,255,0.7)] text-[62px] text-center uppercase font-normal leading-[110%]">TRAINING PRICE</h1>
                    <h5 className="m-0 relative text-center uppercase text-[1.64rem] leading-[110%] font-normal">CHOOSE THE ONE</h5>
                </div>
                <div className="m-0 p-0 align-baseline flex flex-row lg:flex-col justify-center lg:hidden">
                    <div className={`${styles.cardContainer} overflow-hidden relative w-full h-[520px] flex justify-center md:block md:p-[30px_0]`}>
                        {cards.map((card, index) => (
                            <div
                            key={card.id}
                            className={`${styles.card} ${
                                index === activeCardIndex ? styles.active : index < activeCardIndex ? styles.left : styles.right
                              }`}
                            onClick={() => handleCardClick(index)}
                            >
                                <a>
                                    <h5 className="text-[#f55d4b] text-[1.64rem] leading-[110%] m-[1.09rem_0_0.656rem_0] font-normal">{card.course}</h5>
                                    <h4 className="text-[#f55d4b] text-[2.28rem] leading-[110%] m-[1.52rem_0_0.912rem_0] font-normal">{card.price}
                                        <span className="text-[1.36rem] text-[#f55d4b] leading-[22px]">{card.vat}</span>
                                    </h4>
                                    <span className="uppercase text-[16px] leading-[22px] text-[#444444]">{card.signup}</span>
                                    <br></br>
                                    <br></br>
                                    <p className="mb-[20px] text-[#444444] leading-[22px]">{card.info}</p>
                                    <button className="p-[7px_32px] rounded-[20px] m-[10px] cursor-pointer text-white bg-[#f55d4b] border border-[#f55d4b] transition duration-200 ease-in-out hover:bg-[#ffffff] hover:text-[#f55d4b]">Sign Up</button>
                                    <p className="text-[12px] text-[#727272] mt-[20px] leading-[17px] mb-[20px]">{card.text}</p>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="m-0 p-0 align-baseline flex flex-col justify-center 2xlm:hidden">
                        <PriceC />
                </div>
            </div>
        </div>
        </>
    )
}

export default Price;


/* 
2 + "2" = 22
2 - "2" = 0
s

*/