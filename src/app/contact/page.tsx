"use client";
import { useEffect } from "react";

// app/contact/page.tsx
export default function Contact() {

    useEffect(() => {
        document.body.classList.remove( 'dark-mode');
        document.body.classList.remove( 'gsap-loaded');
        document.body.classList.remove( 'hide-logo');
    }, []);


    return (
        <div className="section-container">
            <h1>Contact</h1>
            <p>Welcome to the Contact page of our Next.js project!</p>
        </div>
    );
}
