"use client"; // Required for Next.js App Router

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function BasicGsapAnimation() {
  const boxRef = useRef(null); // Create a ref for the element to animate

  useEffect(() => {
    // GSAP animation - move the box 300px to the right
    gsap.to(boxRef.current, {
      x: 300,
      duration: 2,
      rotation: 360,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div style={{ padding: "50px" }}>
      <h1>Basic GSAP Animation in Next.js</h1>
      <div
        ref={boxRef}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "teal",
          borderRadius: "8px",
        }}
      />
    </div>
  );
}
