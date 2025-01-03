"use client";
import { useEffect } from "react";

// app/about/page.tsx
export default function About() {

    useEffect(() => {
        document.body.classList.remove( 'dark-mode');
        document.body.classList.remove( 'gsap-loaded');
        document.body.classList.remove( 'hide-logo');
    }, []);


    return (
        <div className="section-container">
            <h1>About Us</h1>
            <p>Welcome to the About page of our Next.js project!</p>
        </div>
    );
}
