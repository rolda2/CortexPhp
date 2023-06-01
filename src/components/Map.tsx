import { useState } from "react";

function Map () { 
    const [showMap, setShowMap] = useState(false); 
    const onClick = () => setShowMap(prevCheck => !prevCheck); 
    return ( 
        <> 
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0" />
        <div className={`flex justify-center items-center bg-[url('./img/maps.png')] bg-cover h-[9.375rem] ${showMap == true && "hidden"}`}> 
            <h5 className="text-white text-[1.64rem] leading-[110%] uppercase"> where will you find us? </h5> 
            <span onClick={onClick} className="material-symbols-outlined text-[#f55d4b] ml-4 z-10 w-5 h-5 cursor-pointer">expand_circle_down</span>
        </div>
        <div> 
            <div className={`relative ${showMap !== true && "hidden"}`}> 
                <span onClick={onClick} className="absolute z-10 top-[5%] left-[calc(50%-1.25rem)] cursor-pointer material-symbols-outlined text-[#f55d4b]">expand_circle_down</span> 
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.0247872094806!2d14.517018676940687!3d50.10454301220915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470becd5deb7f715%3A0x854138104cb1b825!2sCortex%2C%20a.s.!5e0!3m2!1scs!2scz!4v1685359993211!5m2!1scs!2scz" className="w-full h-[500px]" /> 
            </div> 
        </div> 
    </> 
    ); 
} 
        

export default Map;