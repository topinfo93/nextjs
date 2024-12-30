"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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

    // appear animation 
    const [classNames, setClassNames] = useState({});
    useEffect(() => {
        const handleScroll = () => {
            const rightContents = document.querySelectorAll(".md-txt-vid .right-content");
            const updatedClasses = {};

            rightContents.forEach((section, index) => {
                const sectionTop = section.getBoundingClientRect().top + window.scrollY;
                const sectionBottom = sectionTop + section.offsetHeight;
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
    const sectionsRef = useRef([]);
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
                } else {
                    // Play dynamicVars logic here if necessary
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


                    <div className="section-modules">
                        {data.imageText.map((section, index) => {
                            const videoUrl = getStrapiMedia(
                                section.image?.url
                            );

                            return (
                                <div className="section-module" key={index}>
                                    <div
                                        key={index}
                                        className={`md-txt-vid ${index % 2 === 0 ? "" : "reserve"}`}
                                        data-id={index}
                                        ref={(el) => (sectionsRef.current[index] = el)}
                                       
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

                    {/* <div className="section-module">
                        <div className="md-txt-vid" data-id={1}>
                            <div className="left-content">
                                <h3>DEFINING YOUR MOST VALUABLE FUTURE</h3>
                                <div className="desc">
                                    <p>
                                        <span
                                            className="ui-provider a b c d e f g h i j k l m n o p q r s t u v w x y z ab ac ae af ag ah ai aj ak"
                                            dir="ltr"
                                        >
                                            Unlike consultancies that value endless reports, we're
                                            focussed on connecting insight and action at speed. With a
                                            strategic approach centred on feasibility, viability and
                                            desirability we ensure your future state vision becomes a
                                            future state reality.
                                        </span>
                                    </p>
                                    <p>&nbsp;</p>
                                </div>
                            </div>
                            <div className="right-content">
                                <video
                                    src="https://ghosydney.com/wp-content/uploads/2024/07/GHO-Reel-July-2023-web.mp4"
                                    width=""
                                    muted={false}
                                    loop=""
                                    playsInline={true}
                                    webkit-playsinline="true"

                                />




                            </div>
                        </div>
                    </div>
                    <div className="section-module">
                        <div className="md-txt-vid reserve" data-id={2}>
                            <div className="left-content">
                                <h3>Designing product Systems and experiences</h3>
                                <div className="desc">
                                    <p>
                                        <span
                                            className="ui-provider a b c d e f g h i j k l m n o p q r s t u v w x y z ab ac ae af ag ah ai aj ak"
                                            dir="ltr"
                                        >
                                            Design thinking and atomic design principles sit at the heart
                                            of what we do. Through collaboration we insource innovation;
                                            connecting your team and ours in more meaningful ways –
                                            delivering award winning digital experiences.
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="right-content">
                                <video
                                    src="https://ghosydney.com/wp-content/uploads/2024/07/GHO-Reel-NoMusicOrTitles.mp4"
                                    width=""
                                    muted={false}
                                    loop=""
                                    playsInline={true}
                                    webkit-playsinline="true"

                                />
                            </div>
                        </div>
                    </div>
                    <div className="section-module">
                        <div className="md-txt-vid" data-id={3}>
                            <div className="left-content">
                                <h3>Creating Engaging brand platforms</h3>
                                <div className="desc">
                                    <p>
                                        <span
                                            className="ui-provider a b c d e f g h i j k l m n o p q r s t u v w x y z ab ac ae af ag ah ai aj ak"
                                            dir="ltr"
                                        >
                                            We're focussed on delivering sustainable creative platforms
                                            that live on, not isolated campaigns that get lost in the
                                            noise. Right message, right place and right time, we ensure
                                            your brand goes the distance.
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="right-content">
                                <video
                                    src="https://ghosydney.com/wp-content/uploads/2024/07/for_all_the_goals_we_share_-_cba_-_bourke-720p.mp4"
                                    width=""
                                    muted={false}
                                    loop=""
                                    playsInline={true}
                                    webkit-playsinline="true"

                                />
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>

            {/* <div className="section-starts">
                <div className="section-container">
                    <div className="section-module">
                        <h5>Change starts here</h5>
                        <div className="card-items">
                            <div className="card before-cards">
                                <a href="https://ghosydney.com/work/fundstream-positioning-brand-website/">
                                    <div
                                        className="card-inner"
                                        style={{
                                            backgroundImage:
                                                "url(https://ghosydney.com/wp-content/uploads/2024/11/media-1.png)"
                                        }}
                                    >
                                        <Image
                                            className="d-none"
                                            src="https://ghosydney.com/wp-content/uploads/2024/11/media-1.png"
                                            alt="image"
                                            width={300}
                                            height={300}
                                        />
                                    </div>
                                </a>
                            </div>
                            <div className="card before-cards">
                                <a href="https://ghosydney.com/work/redesigning-the-ssi-digital-experience/">
                                    <div
                                        className="card-inner"
                                        style={{
                                            backgroundImage:
                                                "url(https://ghosydney.com/wp-content/uploads/2024/08/SSI-featured-image-SEO.jpg)"
                                        }}
                                    >
                                        <Image
                                            width={150}
                                            height={150}
                                            src="https://ghosydney.com/wp-content/uploads/2024/08/SSI-featured-image-SEO-150x150.jpg"
                                            className="d-none wp-post-image"
                                            alt="image"
                                            decoding="async"
                                        />

                                    </div>
                                </a>
                            </div>
                            <div className="card before-cards">
                                <a href="https://ghosydney.com/work/inspiring-women-to-work-in-aviation-aerospace/">
                                    <div
                                        className="card-inner"
                                        style={{
                                            backgroundImage:
                                                "url(https://ghosydney.com/wp-content/uploads/2024/08/AAA-featured-image-SEO.jpg)"
                                        }}
                                    >
                                        <Image
                                            width={150}
                                            height={150}
                                            src="https://ghosydney.com/wp-content/uploads/2024/08/AAA-featured-image-SEO-150x150.jpg"
                                            className="d-none wp-post-image"
                                            alt="image"
                                            decoding="async"
                                        />
                                    </div>
                                </a>
                            </div>
                            <div className="card before-cards">
                                <a href="https://ghosydney.com/work/delivering-a-digital-learning-strategy-in-a-post-covid-world/">
                                    <div
                                        className="card-inner"
                                        style={{
                                            backgroundImage:
                                                "url(https://ghosydney.com/wp-content/uploads/2024/08/NDSS-featured-image-SEO.jpg)"
                                        }}
                                    >
                                        <Image
                                            loading="lazy"
                                            width={150}
                                            height={150}
                                            src="https://ghosydney.com/wp-content/uploads/2024/08/NDSS-featured-image-SEO-150x150.jpg"
                                            className="d-none wp-post-image"
                                            alt="image"
                                            decoding="async"
                                        />
                                    </div>
                                </a>
                            </div>
                            <div className="card before-cards">
                                <a href="https://ghosydney.com/work/defining-a-new-brand-and-positioning/">
                                    <div
                                        className="card-inner"
                                        style={{
                                            backgroundImage:
                                                "url(https://ghosydney.com/wp-content/uploads/2024/08/featured-image-SEO.jpg)"
                                        }}
                                    >
                                        <Image
                                            loading="lazy"
                                            width={150}
                                            height={150}
                                            src="https://ghosydney.com/wp-content/uploads/2024/08/featured-image-SEO-150x150.jpg"
                                            className="d-none wp-post-image"
                                            alt="image"
                                            decoding="async"
                                        />
                                    </div>
                                </a>
                            </div>
                            <div className="card before-cards">
                                <a href="https://ghosydney.com/work/making-hiv-testing-accessible-to-more-people/">
                                    <div
                                        className="card-inner"
                                        style={{
                                            backgroundImage:
                                                "url(https://ghosydney.com/wp-content/uploads/2023/12/Slide-16_9-3.png)"
                                        }}
                                    >
                                        <Image
                                            className="d-none"
                                            src="https://ghosydney.com/wp-content/uploads/2023/12/Slide-16_9-3.png"
                                            alt="image"
                                            width={300}
                                            height={300}
                                        />
                                    </div>
                                </a>
                            </div>
                            <div className="card before-cards">
                                <a href="https://ghosydney.com/work/campaignbrief2023/">
                                    <div
                                        className="card-inner"
                                        style={{
                                            backgroundImage:
                                                "url(https://ghosydney.com/wp-content/uploads/2023/08/Rectangle-87-e1693176992943.png)"
                                        }}
                                    >
                                        <Image
                                            loading="lazy"
                                            width={150}
                                            height={150}
                                            src="https://ghosydney.com/wp-content/uploads/2023/08/Rectangle-87-e1693176992943-150x150.png"
                                            className="d-none wp-post-image"
                                            alt="image"
                                            decoding="async"
                                            srcSet="https://ghosydney.com/wp-content/uploads/2023/08/Rectangle-87-e1693176992943-150x150.png 150w, https://ghosydney.com/wp-content/uploads/2023/08/Rectangle-87-e1693176992943-650x650.png 650w"
                                            sizes="(max-width: 150px) 100vw, 150px"
                                        />
                                    </div>
                                </a>
                            </div>
                            <div className="card before-cards">
                                <a href="https://ghosydney.com/work/commbank-for-all-the-goals-we-share/">
                                    <div
                                        className="card-inner"
                                        style={{
                                            backgroundImage:
                                                "url(https://ghosydney.com/wp-content/uploads/2023/07/CommBank-FIFA-Brand-Video-Still_1.1.26-scaled.jpg)"
                                        }}
                                    >

                                        <Image
                                            loading="lazy"
                                            width={150}
                                            height={150}
                                            src="https://ghosydney.com/wp-content/uploads/2023/07/CommBank-FIFA-Brand-Video-Still_1.1.26-150x150.jpg"
                                            className="d-none wp-post-image"
                                            alt="image"
                                            decoding="async"
                                            srcSet="
                                                        https://ghosydney.com/wp-content/uploads/2023/07/CommBank-FIFA-Brand-Video-Still_1.1.26-150x150.jpg    150w,
                                                        https://ghosydney.com/wp-content/uploads/2023/07/CommBank-FIFA-Brand-Video-Still_1.1.26-650x650.jpg    650w,
                                                        https://ghosydney.com/wp-content/uploads/2023/07/CommBank-FIFA-Brand-Video-Still_1.1.26-1300x1300.jpg 1300w
                                                    "
                                            sizes="(max-width: 150px) 100vw, 150px"
                                        />


                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="wrap-btn">
                            <a href="https://ghosydney.com/work/" target="">
                                View more work
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-culture">
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
