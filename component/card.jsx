import React from 'react';
import '../src/App.css'; 

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
}) {
  return (
     <div className={`card-wrapper ${enableHover ? 'hover-enabled' : 'static'} ${className}`}>
      {/* Initial card */}
      <div
        className={`card-face card-front`}
        style={{ backgroundColor: bgColor }}
      >
        <img src={imgSrc} className="first animate-custom" alt="card image" />
        <div className="ml-6">
          <h1 className="text-3xl font-bold ">{title}</h1>
          <h1 className="text-md mt-4 font-nunito">{secondaryTitle}</h1>
          <p className="mt-4 text-sm font-nunito ">{content}</p>
        </div>
      </div>

      {/* Hover card (only rendered if enabled) */}
      {enableHover && (
        <div
          className="card-face card-back"
          style={{ backgroundColor: hoverBgColor }}
        >
          <img
            src={hoverImgSrc || imgSrc}
            className="first align-middle "
            alt="card image"
          />
          <div className="ml-6">
            <h1 className="text-3xl font-bold">{hoverTitle}</h1>
            <p className="mt-4">{hoverContent}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
