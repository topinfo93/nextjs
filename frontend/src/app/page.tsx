import { getHomePageData } from "@/data/loaders";
// import { useEffect, useRef, useState } from "react";

// import { HeroSection } from "@/components/custom/hero-section";
// import { FeatureSection } from "@/components/custom/features-section";
import { ScrollAnimation } from "@/stories/ScrollAnimation";
import { Partner } from "@/stories/Partner";
import { CaseStudies } from "@/stories/CaseStudies";

import { Culture } from "@/stories/Culture";

import Script from "next/script";
// import ScrollAnimation from "@/components/custom/ScrollAnimation";
export default async function Home() {
    const homeData = await getHomePageData();

    // console.log(homeData.data);


    const customJS = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/custom.js`;

    return (
        <>
            <ScrollAnimation data={homeData.data}/>

            <Partner data={homeData.data.partner}/>

            <CaseStudies data={homeData.data.caseStudies}/>

            <Culture data={homeData.data.culture}/>

            <Script src="/lottie.min.js" />
            <Script src="/gsap.min.js" />
            <Script src="/ScrollTrigger.min.js" />
            <Script src="/anime.min.js" />
            <Script src="/ScrollMagic.min.js" />
            <Script src="/TweenMax.min.js" />
            <Script src="/animation.gsap.min.js" />
            <Script src="/Observer.min.js" /> 
            <Script src={customJS} />
        </>
    );
}
