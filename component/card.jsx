import React from 'react';
import '../src/App.css'; 
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
function Card({
  imgSrc,
  title,
  secondaryTitle,
  content,
  hoverTitle,
  hoverContent,
  hoverImgSrc,
  bgColor = 'red',
  hoverBgColor = 'blue',
  enableHover = true,
  className = '',
  textstyle='',
  containerstyler=''
}) {
return (
     <div className={`card-wrapper ${enableHover ? 'hover-enabled' : 'static'} ${containerstyler}`}> 
        {/* Initial card */}
        <div
            className={`card-face card-front`}
            style={{ backgroundColor: bgColor }}
        >
            <img src={imgSrc} className={`${className} animate-custom `} alt="card image" />
            <div className={`${textstyle} mt-8`}>
                <h1 className={`text-3xl font-bold `}>{title}</h1>
                <h1 className="text-xl mt-4 font-nunito">{secondaryTitle}</h1>
                <p className="mt-4 text-sm font-nunito ">{content}</p>
            </div>
        </div>

        {/* Hover card (only rendered if enabled) */}
        {enableHover && (
            <div
                className="card-face card-back"
                style={{ backgroundColor: hoverBgColor }}>
             <div className='bg-[#FAFAFA] flex items-center justify-center rounded-full w-18 h-18 mb-4 left-arrow  '>
                 <FaArrowLeft color='black' size={32}/>
                
                 
             </div>
             <img src={hoverImgSrc || imgSrc} className="first-back " alt="card visual" />
             <div className='bg-[#FAFAFA] flex items-center justify-center rounded-full w-18 h-18 mb-4 right-arrow shadow-2lg'>
                 <FaArrowRight color='black' size={32}/>
             </div>
             <h1 className=" font-bold back-text">{hoverTitle}</h1>
            </div>
        )}
    </div>
);
}

export default Card;
