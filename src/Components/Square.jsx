import React, { useEffect, useRef, useState } from "react";
import "./Style/Square.scss";

const Square = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observerCallBack = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        } else {
          setIsIntersecting(false);
        }
      },{ rootMargin: "-300px" });
    };

    const observer = new IntersectionObserver(observerCallBack);
    if (ref.current) {
      observer.observe(ref.current);
    }

    // isIntersecting ? console.log("is intesecting") : console.log("it is not");

    return() => {
      observer.disconnect();
    };
  },[isIntersecting]);

  return (
    <div className="test">
      <div ref={ref}>
        <div className={`am-first-square am-square ${isIntersecting ? "first-square-animation" : ""}`}></div>

        <div className={`am-second-square am-square ${isIntersecting ? "second-square-animation" : ""}`}></div>

        <div className={`am-third-square am-square ${isIntersecting ? "third-square-animation" : ""}`}></div>
      </div>
    </div>
  );
};

export default Square;
