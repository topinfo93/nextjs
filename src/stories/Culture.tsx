"use client";

// import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";


export interface CultureProps {
    data: {
        title: string;
        description: string;
        cta: {
            text: string;
            isExternal: boolean;
            url: string;
        },
        image: {
            url: string;
            alt: string;
        },
    };
}



export const Culture = ({ data }: CultureProps) => {
    if (!data) {
        return <div>Error: Data is missing or invalid.</div>;
    }

    // console.log(data);
    const imageUrl = getStrapiMedia(
        data.image?.url
    );

    return (
        <>

         
            <div className="section-culture">
                <div className="section-container">
                    {imageUrl ? (
                        <div className="img-wrap">
                                <Image
                                    src="https://ghosydney.com/wp-content/uploads/2024/07/a1fa308e908cc3179aab93a51f2b5403.gif"
                                    alt="image"
                                    width={300}
                                    height={300}
                                />
                        </div>
                    ) : null} 


                    <div className="section-module">
                        {data?.title ? (
                            <div className="subtext">{data.title}</div>
                        ) : null}


                        <div className="large-text">

                            {data?.description ? (
                                <>
                                    {data.description}
                                </>
                            ) : null}

                            {data?.cta ? (

                                <div className="cta">
                                    <a 
                                        href={data.cta.url}
                                        target={data.cta.isExternal ? "_blank" : "_self"}
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
                                        <div className="text"> {data.cta.text}</div>
                                    </a>
                                </div>

                            ) : null}

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
