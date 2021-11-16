import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const App = () => {
  let cursor = useRef(null);

  useEffect(() => {
    window.addEventListener("mousemove", (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      gsap.set(cursor.current, {
        x: x,
        y: y,
      });

      gsap.to(".shape", {
        x: x,
        y: y,
        stagger: -0.1,
      });
    });
  }, []);
  return (
    <div className="App">
      <div ref={cursor} className="cursor"></div>
      <div className="shapes">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
      </div>
      <div className="content">
        <h1>Hello Developers!</h1>
      </div>
    </div>
  );
};

export default App;
