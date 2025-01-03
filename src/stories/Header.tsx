"use client";
import { useEffect, useRef, useState } from 'react';
import { getStrapiMedia } from "@/lib/utils";
import './header.css';
import Link from "next/link";
import Image from "next/image";

export interface HeaderProps {
    data: {
        logoImage: {
            url: string;
            alt: string;
        };
        logoText: string;
        url: string;
        isExternal: boolean;
    }
}


export const Header = ({data} : HeaderProps) => {
    const logoUrl = getStrapiMedia(
        data.logoImage?.url
    );
    

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            // Add classes when menu is opened
            document.body.classList.add('menu-mobile-bg-circle');

            const openTimeout = setTimeout(() => {
                document.body.classList.add('menu-mobile-open');
            }, 1000);

            const circleTimeout = setTimeout(() => {
                document.body.classList.add('menu-mobile-circle-running');
            }, 1000);

            // Cleanup function to remove classes when component is unmounted or state changes
            return () => {
                clearTimeout(openTimeout);
                clearTimeout(circleTimeout);
            };
        } else {
            // Remove classes when menu is closed
            document.body.classList.remove('menu-mobile-open');

            const bgTimeout = setTimeout(() => {
                document.body.classList.remove('menu-mobile-bg-circle');
            }, 500);

            const circleTimeout = setTimeout(() => {
                document.body.classList.remove('menu-mobile-circle-running');
            }, 1000);

            // Cleanup function to remove timeouts on unmount
            return () => {
                clearTimeout(bgTimeout);
                clearTimeout(circleTimeout);
            };
        }

    }, [isOpen]); // This effect runs when `isOpen` changes


    const [dir, setDir] = useState("down");
    const [lastExecution, setLastExecution] = useState(0);
    const pointBanner = 200; // Example value for pointBanner
    const timeDoing = 500; // Example time for the animation
    const delay = 500; // Delay in ms
    // const sectionRef = useRef(null);



    useEffect(() => {

        const handleScroll = () => {
            const sectionAnimation = document.querySelector(".section-animation");
            if (sectionAnimation) {
                const sectionTop = sectionAnimation.getBoundingClientRect().top + window.scrollY;
                const scrollPosition = window.scrollY;

                if (scrollPosition >= sectionTop) {
                    document.body.classList.add("dark-mode", "passed-animation-st");
                } else {
                    document.body.classList.remove("dark-mode", "passed-animation-st");
                }
            }




            const section = document.querySelector(".section-intro-two");
            if (section) {
                const windowTop = window.scrollY;
                // const sectionTop2 = section.offsetTop;
                const sectionTop2 = (section as HTMLElement).offsetTop;


                // Check the scroll conditions and direction
                if (windowTop > sectionTop2 - pointBanner && windowTop < sectionTop2 - 100 && dir === "down") {
                    if ((lastExecution + delay) < Date.now()) {
                        // Scroll the page to the section's top + 10px
                        window.scrollTo({
                            top: sectionTop2 + 10,
                            behavior: 'smooth',
                        });

                        // Update last execution time
                        setLastExecution(Date.now());
                    }
                }
            }




        };

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, [dir, lastExecution, pointBanner, delay, timeDoing]);

    return (
        <>
            <div className="site-header-outter">
                <header id="site-header" className="site-header" role="banner">
                    <div className="site-branding">

                        <Link
                            href={data.url}
                            className="custom-logo-link"
                            target={data.isExternal ? "_blank" : "_self"}
                        >

                        {logoUrl ? (
                            <Image
                                src={logoUrl}
                                alt={data.logoText}
                                width={92}
                                height={60}
                            />
                        ) : null} 

                        </Link>

                    </div>
                    <div className="mobile-btn" onClick={() => setIsOpen(true)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M21 19L3 19"
                                stroke="#0F0F0F"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M21 12L3 12"
                                stroke="#0F0F0F"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M21 5L3 5"
                                stroke="#0F0F0F"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <div className="bg-circle-fadein" />
                    <nav className="site-navigation">
                        <div className="close-mobile-btn" onClick={() => setIsOpen(false)}>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <mask id="path-1-inside-1_3773_12328" fill="white">
                                    <path d="M6.00006 18.0001C6.18759 18.1875 6.4419 18.2928 6.70706 18.2928C6.97222 18.2928 7.22653 18.1875 7.41406 18.0001L12.0001 13.4141L16.5861 18.0001C16.7736 18.1875 17.0279 18.2928 17.2931 18.2928C17.5582 18.2928 17.8125 18.1875 18.0001 18.0001C18.1875 17.8125 18.2928 17.5582 18.2928 17.2931C18.2928 17.0279 18.1875 16.7736 18.0001 16.5861L13.4141 12.0001L18.0001 7.41406C18.1875 7.22653 18.2928 6.97222 18.2928 6.70706C18.2928 6.4419 18.1875 6.18759 18.0001 6.00006C17.8125 5.81259 17.5582 5.70727 17.2931 5.70727C17.0279 5.70727 16.7736 5.81259 16.5861 6.00006L12.0001 10.5861L7.41406 6.00006C7.22653 5.81259 6.97222 5.70727 6.70706 5.70727C6.4419 5.70727 6.18759 5.81259 6.00006 6.00006C5.81259 6.18759 5.70727 6.44189 5.70727 6.70706C5.70727 6.97222 5.81259 7.22653 6.00006 7.41406L10.5861 12.0001L6.00006 16.5861C5.81259 16.7736 5.70727 17.0279 5.70727 17.2931C5.70727 17.5582 5.81259 17.8125 6.00006 18.0001Z" />
                                </mask>
                                <path
                                    d="M6.00006 18.0001C6.18759 18.1875 6.4419 18.2928 6.70706 18.2928C6.97222 18.2928 7.22653 18.1875 7.41406 18.0001L12.0001 13.4141L16.5861 18.0001C16.7736 18.1875 17.0279 18.2928 17.2931 18.2928C17.5582 18.2928 17.8125 18.1875 18.0001 18.0001C18.1875 17.8125 18.2928 17.5582 18.2928 17.2931C18.2928 17.0279 18.1875 16.7736 18.0001 16.5861L13.4141 12.0001L18.0001 7.41406C18.1875 7.22653 18.2928 6.97222 18.2928 6.70706C18.2928 6.4419 18.1875 6.18759 18.0001 6.00006C17.8125 5.81259 17.5582 5.70727 17.2931 5.70727C17.0279 5.70727 16.7736 5.81259 16.5861 6.00006L12.0001 10.5861L7.41406 6.00006C7.22653 5.81259 6.97222 5.70727 6.70706 5.70727C6.4419 5.70727 6.18759 5.81259 6.00006 6.00006C5.81259 6.18759 5.70727 6.44189 5.70727 6.70706C5.70727 6.97222 5.81259 7.22653 6.00006 7.41406L10.5861 12.0001L6.00006 16.5861C5.81259 16.7736 5.70727 17.0279 5.70727 17.2931C5.70727 17.5582 5.81259 17.8125 6.00006 18.0001Z"
                                    fill="#F3F5F8"
                                />
                                <path
                                    d="M7.41406 18.0001L22.4967 33.0873L22.499 33.085L7.41406 18.0001ZM12.0001 13.4141L27.085 -1.67088L12.0001 -16.7558L-3.08488 -1.67089L12.0001 13.4141ZM16.5861 18.0001L1.50111 33.085L1.50339 33.0873L16.5861 18.0001ZM18.0001 18.0001L33.0827 33.0873L33.0873 33.0827L18.0001 18.0001ZM18.0001 16.5861L33.0873 1.50339L33.085 1.50112L18.0001 16.5861ZM13.4141 12.0001L-1.67089 -3.08489L-16.7558 12.0001L-1.67089 27.085L13.4141 12.0001ZM18.0001 7.41406L33.085 22.499L33.0873 22.4967L18.0001 7.41406ZM18.2928 6.70706L39.6262 6.70706L18.2928 6.70706ZM18.0001 6.00006L33.0873 -9.08261L33.0827 -9.08716L18.0001 6.00006ZM16.5861 6.00006L1.5034 -9.08717L1.50112 -9.08489L16.5861 6.00006ZM12.0001 10.5861L-3.08489 25.671L12.0001 40.756L27.085 25.671L12.0001 10.5861ZM7.41406 6.00006L22.499 -9.08489L22.4967 -9.08716L7.41406 6.00006ZM6.00006 6.00006L-9.08261 -9.08717L-9.08716 -9.08261L6.00006 6.00006ZM6.00006 7.41406L-9.08716 22.4967L-9.08489 22.499L6.00006 7.41406ZM10.5861 12.0001L25.671 27.085L40.756 12.0001L25.671 -3.08489L10.5861 12.0001ZM6.00006 16.5861L-9.08489 1.50111L-9.08716 1.50339L6.00006 16.5861ZM-9.08261 33.0873C-4.89449 37.2741 0.785067 39.6262 6.70706 39.6262L6.70706 -3.04049C12.0987 -3.04049 17.2697 -0.89908 21.0827 2.91284L-9.08261 33.0873ZM6.70706 39.6262C12.6291 39.6262 18.3086 37.2741 22.4967 33.0873L-7.66861 2.91283C-3.85557 -0.899052 1.31536 -3.04049 6.70706 -3.04049L6.70706 39.6262ZM22.499 33.085L27.085 28.499L-3.08488 -1.67089L-7.67089 2.91511L22.499 33.085ZM-3.08489 28.499L1.50111 33.085L31.671 2.91512L27.085 -1.67088L-3.08489 28.499ZM1.50339 33.0873C5.69151 37.2741 11.3711 39.6262 17.2931 39.6262L17.2931 -3.04049C22.6847 -3.04049 27.8557 -0.899072 31.6687 2.91284L1.50339 33.0873ZM17.2931 39.6262C23.2151 39.6262 28.8946 37.2741 33.0827 33.0873L2.91739 2.91284C6.73045 -0.899066 11.9014 -3.04049 17.2931 -3.04049L17.2931 39.6262ZM33.0873 33.0827C37.2741 28.8946 39.6262 23.2151 39.6262 17.2931L-3.04049 17.2931C-3.04049 11.9014 -0.899064 6.73045 2.91284 2.91739L33.0873 33.0827ZM39.6262 17.2931C39.6262 11.3711 37.2741 5.69151 33.0873 1.50339L2.91284 31.6687C-0.899073 27.8557 -3.04049 22.6847 -3.04049 17.2931L39.6262 17.2931ZM33.085 1.50112L28.499 -3.08489L-1.67089 27.085L2.91511 31.671L33.085 1.50112ZM28.499 27.085L33.085 22.499L2.91512 -7.67089L-1.67089 -3.08489L28.499 27.085ZM33.0873 22.4967C37.2741 18.3086 39.6262 12.6291 39.6262 6.70706L-3.04049 6.70706C-3.04049 1.31535 -0.899048 -3.85557 2.91284 -7.66861L33.0873 22.4967ZM39.6262 6.70706C39.6262 0.78507 37.2741 -4.89448 33.0873 -9.08261L2.91284 21.0827C-0.89908 17.2697 -3.04049 12.0987 -3.04049 6.70706L39.6262 6.70706ZM33.0827 -9.08716C28.8946 -13.274 23.215 -15.6261 17.2931 -15.6261L17.2931 27.0406C11.9014 27.0406 6.73048 24.8992 2.91739 21.0873L33.0827 -9.08716ZM17.2931 -15.6261C11.3711 -15.6261 5.69155 -13.2741 1.5034 -9.08717L31.6687 21.0873C27.8556 24.8992 22.6847 27.0406 17.2931 27.0406L17.2931 -15.6261ZM1.50112 -9.08489L-3.08488 -4.49889L27.085 25.671L31.671 21.085L1.50112 -9.08489ZM27.085 -4.49889L22.499 -9.08489L-7.67089 21.085L-3.08489 25.671L27.085 -4.49889ZM22.4967 -9.08716C18.3086 -13.274 12.629 -15.6261 6.70706 -15.6261L6.70706 27.0406C1.3154 27.0406 -3.85553 24.8992 -7.66861 21.0873L22.4967 -9.08716ZM6.70706 -15.6261C0.785123 -15.6261 -4.89444 -13.2741 -9.08261 -9.08717L21.0827 21.0873C17.2696 24.8992 12.0987 27.0406 6.70706 27.0406L6.70706 -15.6261ZM-9.08716 -9.08261C-13.2741 -4.89445 -15.6261 0.785117 -15.6261 6.70706L27.0406 6.70706C27.0406 12.0987 24.8992 17.2696 21.0873 21.0827L-9.08716 -9.08261ZM-15.6261 6.70706C-15.6261 12.629 -13.274 18.3086 -9.08716 22.4967L21.0873 -7.66861C24.8992 -3.85553 27.0406 1.31541 27.0406 6.70706L-15.6261 6.70706ZM-9.08489 22.499L-4.49889 27.085L25.671 -3.08489L21.085 -7.67089L-9.08489 22.499ZM-4.49888 -3.08489L-9.08489 1.50111L21.085 31.671L25.671 27.085L-4.49888 -3.08489ZM-9.08716 1.50339C-13.2741 5.69154 -15.6261 11.3711 -15.6261 17.2931L27.0406 17.2931C27.0406 22.6847 24.8992 27.8556 21.0873 31.6687L-9.08716 1.50339ZM-15.6261 17.2931C-15.6261 23.215 -13.274 28.8946 -9.08717 33.0827L21.0873 2.91739C24.8992 6.73048 27.0406 11.9014 27.0406 17.2931L-15.6261 17.2931Z"
                                    fill="#F3F5F8"
                                    mask="url(#path-1-inside-1_3773_12328)"
                                />
                            </svg>

                        </div>
                        <div className="menu-primary-menu-container">
                            <ul id="menu-primary-menu" className="menu">
                                <li
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                >
                                    <Link
                                        href="/work"
                                        onClick={() => setIsOpen(false)}
                                    >Work</Link>
                                </li>

                                <li
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                >
                                    <Link
                                        href="/about"
                                        onClick={() => setIsOpen(false)}
                                    >About</Link>
                                </li>

                                <li
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                >
                                    <Link
                                        href="/offering"
                                        onClick={() => setIsOpen(false)}
                                    >Offering</Link>
                                </li>

                                <li
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                >
                                    <Link
                                        href="/ventures"
                                        onClick={() => setIsOpen(false)}
                                    >Ventures</Link>
                                </li>


                                <li
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                >
                                    <Link
                                        href="/contact"
                                        onClick={() => setIsOpen(false)}
                                    >Contact</Link>
                                </li>

                            </ul>
                        </div>
                        <div className="big-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={175}
                                height={177}
                                viewBox="0 0 175 177"
                                fill="none"
                            >
                                <circle
                                    cx="132.5"
                                    cy="132.5"
                                    r="117.5"
                                    stroke="white"
                                    strokeWidth="29.7064"
                                />
                            </svg>
                        </div>
                        <div className="small-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={95}
                                height={95}
                                viewBox="0 0 95 95"
                                fill="none"
                            >
                                <circle
                                    cx="47.5"
                                    cy="47.5"
                                    r="35.5"
                                    stroke="white"
                                    strokeWidth={24}
                                />
                            </svg>
                        </div>
                    </nav>
                </header>
            </div>
        </>
    );
};
