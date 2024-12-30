import type { Meta, StoryObj } from '@storybook/react';

// import { ScrollAnimation } from './ScrollAnimation';
import { ScrollAnimation, AnimProps } from "./ScrollAnimation";


// const meta = {
//     title: 'Example/ScrollAnimation',
//     component: ScrollAnimation,
//     tags: ['autodocs'],
//     parameters: {
//         layout: 'fullscreen',
//     },
// } satisfies Meta<typeof ScrollAnimation>;

const meta: Meta<typeof ScrollAnimation> = {
    title: "Example/ScrollAnimation",
    component: ScrollAnimation,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen", // Storybook layout
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

// const homeImage = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/award-2022.svg`;
const homeImage = `http://localhost:3000/award-2022.svg`;
const homeVideo = `http://localhost:3000/gho-reel-july-2024-1080_1.mp4`;


const defaultData: AnimProps = {
    data: {
        title: "Sample Title",
        description: "Sample Description",
        id: 1,
        hero: {
            id: 1,
            title: "Tomorrow's thinking, powered by people",
            description: "We combine big-end-of-town strategy with agile thinking to help businesses define, design and build new pathways for sustainable growth. Welcome to the new generation of problem solvers.",
            cta: {
                id: 1,
                text: "Learn More",
                isExternal: true,
                url: "#",
            },
            awards: [
                {
                    title: "WINNER",
                    description: "AdNews Awards",
                    image: {
                        url: homeImage,
                        alt: "Award 1 Image",
                    },
                },
                {
                    title: "WINNER",
                    description: "AdNews Awards ",
                    image: {
                        url: homeImage,
                        alt: "Award 2 Image",
                    },
                },
            ],
        },
        animation: {
            video: {
                url: homeVideo
            },
            gallery: [
                {
                    url: 'https://ghosydney.com/wp-content/uploads/2024/07/Frame-55.png',
                },
                {
                    url: 'https://ghosydney.com/wp-content/uploads/2024/07/Frame-55.png',
                },
                {
                    url: 'https://ghosydney.com/wp-content/uploads/2024/07/Frame-55.png',
                },
            ],
            deliverTitle: 'How we deliver change',
            deliverText1: 'We connect <br><span>insights</span> and <span>action</span><br> at speed',
            deliverText2: 'Defining <span>your <br>most valuable <br>future,</span> with you',
            deliverText3: 'and designing <span>new<br> pathways</span> for change and growth',
        }

    },
};



export const Default: Story = {
    play: async () => {
        const scriptUrls = [
            "/lottie.min.js",
            "/gsap.min.js",
            "/ScrollTrigger.min.js",
            "/anime.min.js",
            "/ScrollMagic.min.js",
            "/TweenMax.min.js",
            "/animation.gsap.min.js",
            "/Observer.min.js",
            "/custom.js",
        ];

        scriptUrls.forEach((url) => {
            const script = document.createElement("script");
            script.src = url;
            script.async = true;
            document.body.appendChild(script);

            script.onload = () => {};
        });
    },
    args: defaultData,
};
