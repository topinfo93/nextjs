"use client";
import './global.css';
import React, { useEffect } from "react";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";

interface Award {
    title: string;
    description: string;
    image: {
        url: string;
        alt: string;
    };
}

export interface AnimProps {
    data: {
        id: number,
        hero: {
            id: number,
            title: string;
            description: string;
            cta: {
                id: number,
                text: string;
                isExternal: boolean;
                url: string;
            },
            awards: Award[]; // List of awards
        },
        animation: {
            video: {
                url: string;
            };
            gallery: any[];
            deliverTitle: string;
            deliverText1: string;
            deliverText2: string;
            deliverText3: string;
        }
    };
}



export const ScrollAnimation = ({ data }: AnimProps) => {

    if (!data) {
        return (<></>);
    }

    const videoUrl = getStrapiMedia(
        data.animation.video?.url
    );

    const gallery = data.animation.gallery;

    useEffect(() => {
        document.body.classList.remove('gsap-loaded');

        const handleScroll = () => {
            if (window.scrollY >= 2) {
                document.body.classList.add('hide-logo');
            } else {
                document.body.classList.remove('hide-logo');
            }
        };

        // Add the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth <= 767) {
                // const imageGalleries = document.querySelector('.image-galleries');
                const imageGalleries = document.querySelector('.your-selector') as HTMLElement;

                const textBelowVideoScale = document.querySelector('.text-below-video-scale');

                if (imageGalleries && textBelowVideoScale) {
                    const imageGalleriesTop = imageGalleries.getBoundingClientRect().top;
                    const imageGalleriesHeight = imageGalleries.offsetHeight;
                    const windowHeight = window.innerHeight;

                    // Check if the element is within the viewport
                    if (
                        window.scrollY > imageGalleriesTop - windowHeight &&
                        window.scrollY < imageGalleriesTop + imageGalleriesHeight
                    ) {
                        imageGalleries.classList.add('on-viewport');
                        textBelowVideoScale.classList.add('on-viewport');
                    } else {
                        imageGalleries.classList.remove('on-viewport');
                        textBelowVideoScale.classList.remove('on-viewport');
                    }
                }
            }
        };

        // Add the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts


    return (
        <>
            <div className="section-intro">
                <div className="intro-content">
                    <div className="text">
                        <h1 className="large-text">
                            {data.hero.title}
                            <div className="cta">
                                <a href={data.hero.cta.url}>
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
                                    <div className="text-cta-dot">{data.hero.cta.text}</div>
                                </a>
                            </div>
                        </h1>
                        <div className="desc">
                            {data.hero.description}
                        </div>
                        <div className="large-text only-mobile">
                            <div className="cta">
                                <a href={data.hero.cta.url}>
                                    <div className="text-cta-dot">{data.hero.cta.text}</div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="content-awards-home">
                        <div className="flipper" data-start_number={0}>
                            {data.hero.awards.map((award, index) => {
                                const imageUrl = getStrapiMedia(award.image?.url);
                                if (index === 0) {
                                    return (
                                        <div key={index} className="front-card card"> {/* Use award.id if available, else fallback to index */}
                                            <span className="card-title">{award.title}</span>
                                            <div className="card-content">
                                                <p dangerouslySetInnerHTML={{ __html: award.description }} />
                                            </div>
                                        </div>
                                    );
                                }
                                return null; // Ensure something is returned if index !== 0 (optional)
                            })}
                        </div>


                        <div className="awards-home">
                            <ul>
                                {data.hero.awards.map((award, index) => {
                                    const imageUrl = getStrapiMedia(
                                        award.image?.url
                                    );
                                    return (

                                        <li key={index} className="item-awards-home" data-number={index}>
                                            <div className="flipper-mobile" data-start_number={0}>
                                                <div className="front-card card">
                                                    <span className="card-title">{award.title}</span>
                                                    <div className="card-content">
                                                        <p dangerouslySetInnerHTML={{ __html: award.description }} />

                                                    </div>
                                                </div>
                                                <div className="back-card card">
                                                    <span className="card-title">{award.title}</span>
                                                    <div className="card-content">
                                                        <p>
                                                            {award.title}
                                                            <br />
                                                            {award.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="awards-home-list-img">
                                                {imageUrl && (
                                                    <Image src={imageUrl} alt={`${award.title} - ${award.description}`} width={300} height={300} />
                                                )}
                                            </div>
                                            <div className="awards-home-list-content">
                                                <div className="back-card card">
                                                    <span className="card-title">{award.title}</span>
                                                    <div className="card-content">
                                                        <p>
                                                            {award.title}
                                                            <br />
                                                            {award.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )

                                })}



                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <div className="section-intro section-intro-two">
                <div className="big-cirle section-animation">


                    {videoUrl && (
                        <video
                            id="video1"
                            className="video-circle"
                            playsInline={true}
                            webkit-playsinline="true"
                            preload="auto"
                            muted={true}
                            loop={true}
                            src={videoUrl}
                        />
                    )}


                    <div className="text-below-video-scale">
                        Some of the challenges we&apos;re helping solve
                    </div>
                    <div className="image-galleries">
                        <ul>


                            {gallery.map((image, index) => {

                                const imageUrl = getStrapiMedia(
                                    image?.url
                                );
                                if (!imageUrl) {
                                    return null; 
                                }

                                return (
                                    <li key={index} className={index % 2 === 0 ? 'right' : 'left'}>
                                        <Image
                                            src={imageUrl}
                                            alt={image.alt}
                                            width={300}
                                            height={300}
                                        />
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="lottie-section">
                    <div className="left-lottie-section">
                        <div className="top-lottie-section only-desktop">
                            {data.animation.deliverTitle}
                        </div>
                        <div className="txt-lottie-section">
                            <ul>
                                <li className="item-txt-lottie item-0">
                                    <div className="large-text" dangerouslySetInnerHTML={{ __html: data.animation.deliverText1 }}>
                                    </div>
                                </li>
                                <li className="item-txt-lottie item-1">
                                    <div className="large-text" dangerouslySetInnerHTML={{ __html: data.animation.deliverText2 }}>
                                    </div>
                                </li>
                                <li className="item-txt-lottie item-2">
                                    <div className="large-text" dangerouslySetInnerHTML={{ __html: data.animation.deliverText3 }}>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="deliver-text only-mobile">{data.animation.deliverTitle}</div>
                    <div className="right-lottie-section">
                        <div id="animationWindow"></div>
                    </div>
                </div>
            </div>


        </>
    );
}
