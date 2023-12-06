import React, { useState, useEffect, useRef } from "react";
import "./Clicked.css"; // Import your CSS file

function ClickableComponent({ children, className }) {
  const [isClicked, setIsClicked] = useState(false);
  const componentRef = useRef();

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleOutsideClick = (event) => {
    if (componentRef.current && !componentRef.current.contains(event.target)) {
      setIsClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div
      ref={componentRef}
      className={`${className} ${isClicked ? "clicked" : ""}`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}

export default ClickableComponent;
