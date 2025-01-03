"use client";
import { useEffect } from "react";

// app/work/page.tsx
export default function Work() {
    useEffect(() => {
        document.body.classList.remove('dark-mode');
        document.body.classList.remove( 'gsap-loaded');
        document.body.classList.remove( 'hide-logo');
    }, []);


    return (
        <div className="section-container"> 
            <h1>Work</h1>
            <p>Welcome to the Work page of our Next.js project!</p>
        </div>
    );
}
