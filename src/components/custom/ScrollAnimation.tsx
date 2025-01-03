"use client";

import { useEffect } from "react";
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


interface AnimProps {
    data: {
        title: string;
        description: string;
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
        };
    };
}


export default function ScrollAnimation({ data }: AnimProps) {
    useEffect(() => {
        document.body.classList.remove('gsap-loaded');
    }, []);

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
                            <div className="front-card card">
                                <span className="card-title">WINNER</span>
                                <div className="card-content">
                                    <p>
                                        AdNews Awards:
                                        <br />
                                        Employer of the Year
                                    </p>
                                </div>
                            </div>
                            <div className="back-card card">
                                <span className="card-title">WINNER</span>
                                <div className="card-content">
                                    <p>
                                        AdNews Awards:
                                        <br />
                                        Employer of the Year
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="awards-home">
                            <ul>
                                {data.hero.awards.map((award,index) => {
                                    const imageUrl = getStrapiMedia(
                                        award.image?.url
                                    );

                                    return (

                                        <li key={index} className="item-awards-home" data-number={index}>
                                            <div className="flipper-mobile" data-start_number={0}>
                                                <div className="front-card card">
                                                    <span className="card-title">{award.title}</span>
                                                    <div className="card-content">
                                                        <p>
                                                            {award.title}
                                                            <br />
                                                            {award.description}
                                                        </p>
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
                    <video
                        id="video1"
                        className="video-circle"
                        playsInline={true}
                        webkit-playsinline="true"

                        preload="auto"
                        muted={true}
                        loop={true}
                        src="https://ghosydney.com/wp-content/uploads/2024/07/gho-reel-july-2024-1080_1.mp4"
                    />


                    <div className="text-below-video-scale">
                        Some of the challenges we&apos;re helping solve
                    </div>
                    <div className="image-galleries">
                        <ul>
                            <li className="right">
                                <Image
                                    src="https://ghosydney.com/wp-content/uploads/2024/07/Frame-54.png"
                                    alt="image"
                                    width={300}
                                    height={300}
                                />
                            </li>
                            <li className="left">
                                <Image
                                    src="https://ghosydney.com/wp-content/uploads/2024/07/Frame-55.png"
                                    alt="image"
                                    width={300}
                                    height={300}
                                />
                            </li>
                            <li className="right">
                                <Image
                                    src="https://ghosydney.com/wp-content/uploads/2024/07/Frame-56.png"
                                    alt="image"
                                    width={300}
                                    height={300}
                                />
                            </li>
                            <li className="left">
                                <Image
                                    src="https://ghosydney.com/wp-content/uploads/2024/07/Frame-57.png"
                                    alt="image"
                                    width={300}
                                    height={300}
                                />
                            </li>
                            <li className="right">
                                <Image
                                    src="https://ghosydney.com/wp-content/uploads/2024/07/Frame-58.png"
                                    alt="image"
                                    width={300}
                                    height={300}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="lottie-section">
                    <div className="left-lottie-section">
                        <div className="top-lottie-section only-desktop">
                            How we deliver change
                        </div>
                        <div className="txt-lottie-section">
                            <ul>
                                <li className="item-txt-lottie item-0">
                                    <div className="large-text">
                                        We connect <br />
                                        <span>insights</span> and <span>action</span>
                                        <br />
                                        at speed
                                        {/* We connect insights and action at speed */}
                                    </div>
                                </li>
                                <li className="item-txt-lottie item-1">
                                    <div className="large-text">
                                        Defining
                                        <span>
                                            your <br />
                                            most valuable <br />
                                            future,
                                        </span>
                                        with you
                                        {/* Defining your most valuable future, with you */}
                                    </div>
                                </li>
                                <li className="item-txt-lottie item-2">
                                    <div className="large-text">
                                        and designing
                                        <span>
                                            new
                                            <br />
                                            pathways
                                        </span>
                                        for change and growth
                                        {/* and designing new pathways for change and growth */}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="deliver-text only-mobile">How we deliver change</div>
                    <div className="right-lottie-section">
                        <div id="animationWindow"></div>
                    </div>
                </div>
            </div>
        </>
    );
}
