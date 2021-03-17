import React from "react";
import done from "assets/tick.svg";
import "./style.css";

export default function Success({ link }: { link: string }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(link);
  };

  return (
    <div className="Success">
      <img className="Success__icon" src={done} alt="successfully uploaded" />
      <h1 className="Success__title">Uploaded Successfully!</h1>
      <img className="Success__image" src={link} alt={link} />
      <div className="Success__link">
        <h5 className="Success__text">{link}</h5>
        <button onClick={handleCopy} className="Success__button">
          Copy Link
        </button>
      </div>
    </div>
  );
}
