"use client";
import { useEffect } from "react";

// app/ventures/page.tsx
export default function Ventures() {

    useEffect(() => {
        document.body.classList.remove( 'dark-mode');
        document.body.classList.remove( 'gsap-loaded');
    }, []);


    return (
        <div className="section-container">
            <h1>Ventures</h1>
            <p>Welcome to the Ventures page of our Next.js project!</p>
        </div>
    );
}
