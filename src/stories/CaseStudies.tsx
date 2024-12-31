"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";

interface Box {
    title: string;
    description: string;
    url: string;
    image: {
        url: string;
        alt: string;
    };
}


export interface CaseStudiesProps {
    data: {
        title: string;
        description: string;
        cta: {
            text: string;
            isExternal: boolean;
            url: string;
        },
        imageText: Box[]
    };
}



export const CaseStudies = ({ data }: CaseStudiesProps) => {
    if (!data) {
        return <div>Error: Data is missing or invalid.</div>;
    }

    const [isLoaded, setIsLoaded] = useState(false); // State to track if the data is loaded
    const [dir, setDir] = useState('down'); // For handling scroll direction

    

    useEffect(() => {
        // Scroll event listener
        const handleScroll = () => {
            const cardItems = document.querySelector('.section-starts .card-items');
            if (cardItems) {
                // Cast cardItems to HTMLElement
                const cardItemsElement = cardItems as HTMLElement;
                const scrollTop = window.scrollY;
    
                let lastScrollTop = 0;
    
                // Handling scroll direction
                if (scrollTop > lastScrollTop) {
                    setDir('down'); // Scroll down
                } else {
                    setDir('up'); // Scroll up
                }
                lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Keep track of last scroll position
    
                // Card section logic
                if (scrollTop < cardItemsElement.offsetTop - window.innerHeight) {
                    document.querySelectorAll('.section-starts .card-items .card').forEach((card) => {
                        card.classList.remove('after-cards');
                        card.classList.add('before-cards');
                    });
                } else if (scrollTop > cardItemsElement.offsetTop + cardItemsElement.offsetHeight + 300) {
                    document.querySelectorAll('.section-starts .card-items .card').forEach((card) => {
                        card.classList.add('after-cards');
                        card.classList.remove('before-cards');
                    });
                }
    
                if (scrollTop > cardItemsElement.offsetTop - window.innerHeight && scrollTop < cardItemsElement.offsetTop + cardItemsElement.offsetHeight + 300) {
                    if (dir === 'up') {
                        document.querySelectorAll('.section-starts .card-items .card').forEach((card, i) => {
                            setTimeout(() => {
                                card.classList.remove('after-cards', 'before-cards');
                            }, i * 100);
                        });
                    } else {
                        document.querySelectorAll('.section-starts .card-items .card').forEach((card, i) => {
                            setTimeout(() => {
                                card.classList.remove('after-cards', 'before-cards');
                            }, i * 100);
                        });
                    }
                }
            }
        };
    
        // Initialize the scroll event listener
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [dir]);
    





    useEffect(() => {
        // This effect runs once the 'data' prop is available
        if (data && data.imageText) {
            setIsLoaded(true);
        }
    }, [data]);

    if (!isLoaded) {
        return; // Render loading state until the data is loaded
    }

    if (!data?.imageText || data.imageText.length === 0) {
        return <p>No cases available</p>; // Handling case where no data is available
    }

    return (
        <>

            <div className="section-starts">
                <div className="section-container">
                    <div className="section-module">
                        <h5>{data.title}</h5>


                        <div className="card-items">
                            {data.imageText.map((card, index) => {
                                const imageUrl = getStrapiMedia(
                                    card.image?.url
                                );
                                const altText = card.image?.alt || 'Card image';
                                if (!imageUrl) {
                                    return null; 
                                }

                                return (
                                    <div key={index} className="card before-cards">
                                        <a href={card.url}>
                                            <div
                                                className="card-inner"
                                                style={{
                                                    backgroundImage: `url(${imageUrl})`
                                                }}
                                            >
                                                <Image
                                                    className="d-none"
                                                    src={imageUrl}
                                                    alt={altText}
                                                    width={300}
                                                    height={300}
                                                />
                                            </div>
                                        </a>
                                    </div>
                                )
                            })}
                        </div>

                   

                        {data?.cta ? (
                            <div className="wrap-btn">
                                <a
                                    href={data.cta.url}
                                    target={data.cta.isExternal ? "_blank" : "_self"}
                                >
                                    {data.cta.text}
                                </a>
                            </div>
                        ) : null}

                    </div>
                </div>
            </div>

            {/* <div className="section-culture">
                <div className="section-container">
                    <div className="img-wrap">


                        <Image
                            src="https://ghosydney.com/wp-content/uploads/2024/07/a1fa308e908cc3179aab93a51f2b5403.gif"
                            alt="image"
                            width={300}
                            height={300}
                        />
                    </div>
                    <div className="section-module">
                        <div className="subtext">Change is in our DNA</div>
                        <div className="large-text">
                            Our culture of work with people you like is pervasive and has been key
                            to our resilience and evolution. It embodies family while celebrating
                            individuality. It sings true internally and is reflected externally in
                            how we work
                            <div className="cta">
                                <a href="https://ghosydney.com/about-us/">
                                    <div className="wrap-icon">
                                        <div className="icon">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={30}
                                                height={14}
                                                viewBox="0 0 30 14"
                                                fill="none"
                                            >
                                                <path
                                                    d="M28.7104 6.13958L22.7823 0.326301C22.3398 -0.109694 21.6193 -0.109694 21.1768 0.331891C20.7343 0.767887 20.7343 1.47778 21.1825 1.91377L25.1649 5.81538L1.13457 5.81538C0.510558 5.81538 0 6.31845 0 6.93331C0 7.54818 0.510558 8.05125 1.13457 8.05125L25.1649 8.05125L21.1825 11.9529C20.74 12.3889 20.7343 13.0987 21.1768 13.5347C21.6193 13.9707 22.3398 13.9763 22.7823 13.5403L28.7104 7.72705C29.1586 7.28546 29.1529 6.57557 28.7104 6.13958Z"
                                                    fill="#F3F5F8"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="text">About us</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </>
    );
}
