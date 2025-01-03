"use client";
import '../app/styles/main.scss';
import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";

interface Box {
    title: string;
    description: string;
    image: {
        url: string;
        alt: string;
    };
}


export interface PartnerProps {
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



export const Partner = ({ data }: PartnerProps) => {
    if (!data) {
        return <div>Error: Data is missing or invalid.</div>;
    }

    const [classNames, setClassNames] = useState<{ [key: number]: string }>({});

    useEffect(() => {
        
        const handleScroll = () => {
            const rightContents = document.querySelectorAll(".md-txt-vid .right-content");

            const updatedClasses: { [key: number]: string } = {};

            rightContents.forEach((section, index) => {
                const sectionTop = section.getBoundingClientRect().top + window.scrollY;
                // const sectionBottom = sectionTop + section.offsetHeight;
                const sectionBottom = sectionTop + (section as HTMLElement).offsetHeight; // Cast here

                const scrollTop = window.scrollY;
                const windowHeight = window.innerHeight;

       

                if (scrollTop < sectionTop - windowHeight) {
                    updatedClasses[index] = "before-video";
                } else if (scrollTop > sectionBottom) {
                    updatedClasses[index] = "after-video";
                } else {
                    updatedClasses[index] = "";
                }
            });

            setClassNames(updatedClasses);
        };

        window.addEventListener("scroll", handleScroll);

        // Run once on mount to initialize
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    // autoplay videos
    // const sectionsRef = useRef([]);
    const sectionsRef = useRef<HTMLDivElement[]>([]); 
    const dynamicVars: { [key: string]: HTMLVideoElement | undefined } = {}; 

    const handleScroll = () => {
        sectionsRef.current.forEach((section, index) => {


            if (!section) return;


            const idVid = section.dataset.id;
            const videoElement = section.querySelector('video');

            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;

            if (scrollTop > sectionTop - windowHeight && scrollTop < sectionBottom) {
                if (videoElement) {
                    videoElement.play();
                } else if (idVid) {
                    dynamicVars[idVid]?.play(); 
                }
            }
        });
    };
    useEffect(() => {
        document.body.classList.remove('gsap-loaded');
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="section-your-partner">
                <div className="section-container">
                    <div className="section-module">
                        <div className="subtext">{data.title}</div>
                        <div className="large-text">
                            {data.description}

                            <div className="cta">
                                <a
                                    href={data.cta.url}
                                    target={data.cta.isExternal ? "_blank" : "_self"}
                                    rel={data.cta.isExternal ? "noopener noreferrer" : undefined}
                                >
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
                                    <div className="text">{data.cta.text}</div>
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="section-modules" >
                        {data.imageText.map((section, index) => {
                            const videoUrl = getStrapiMedia(section.image?.url) || ''; // Fallback to an empty string if null


                            return (
                                <div className="section-module" key={index}>
                                    <div
                                        key={index}
                                        className={`md-txt-vid ${index % 2 === 0 ? "" : "reserve"}`}
                                        data-id={index}
                                        // ref={(el) => { 
                                        //     sectionsRef.current[index] = el; 
                                        // }}
                                       
                                    >
                                        <div className="left-content">
                                            <h3>{section.title}</h3>
                                            <div className="desc">
                                                <p>
                                                    <span
                                                        className="ui-provider a b c d e f g h i j k l m n o p q r s t u v w x y z ab ac ae af ag ah ai aj ak"
                                                        dir="ltr"
                                                    >
                                                        {section.description}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <div 
                                            className={`right-content ${classNames[index] || ""}`}
                                            data-index={index}
                                        >
                                            <video
                                                src={videoUrl}
                                                muted={true}
                                                loop
                                                playsInline
                                                webkit-playsinline="true"
                                                width="100%"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>


                </div>
            </div>


        </>
    );
}
