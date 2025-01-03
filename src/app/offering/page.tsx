"use client";
import { useEffect } from "react";

// app/offering/page.tsx
export default function Offering() {

    useEffect(() => {
        document.body.classList.remove( 'dark-mode');
        document.body.classList.remove( 'gsap-loaded');
        document.body.classList.remove( 'hide-logo');
    }, []);


    return (
        <div className="section-container">
            <h1>Offering</h1>
            <p>Welcome to the Offering page of our Next.js project!</p>
        </div>
    );
}
