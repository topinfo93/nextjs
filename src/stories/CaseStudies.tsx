"use client";
import '../app/styles/main.scss';
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
        cases: Box[]
    };
}



export const CaseStudies = ({ data }: CaseStudiesProps) => {

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
        if (data && data.cases) {
            setIsLoaded(true);
        }
    }, [data]);

    if (!isLoaded) {
        return (<></>); // Render loading state until the data is loaded
    }

    if (!data?.cases || data.cases.length === 0) {
        return <p>No cases available</p>; // Handling case where no data is available
    }

    return (
        <>

            <div className="section-starts">
                <div className="section-container">
                    <div className="section-module">
                        <h5>{data.title}</h5>
       

                        <div className="card-items">
                            {data.cases.map((card, index) => {
                                const imageUrl = getStrapiMedia(
                                    card.image?.url
                                );
                                const altText = card.image?.alt || 'Card image';
                                if (!imageUrl) {
                                    return null; 
                                }

                                return (
                                    <div key={index} className="card before-cards">
                                        <a href="#">
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

        </>
    );
}
