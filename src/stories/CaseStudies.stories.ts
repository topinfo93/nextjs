import type { Meta, StoryObj } from '@storybook/react';

import { CaseStudies, CaseStudiesProps } from "./CaseStudies";


const meta: Meta<typeof CaseStudies> = {
    title: "Example/CaseStudies",
    component: CaseStudies,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen", // Storybook layout
    },
};

export default meta;

type Story = StoryObj<typeof meta>;



const defaultData: CaseStudiesProps = {
    data: {
        title: "Change is in our DNA",
        description: "Our culture of work with people you like is pervasive and has been key to our resilience and evolution. It embodies family while celebrating individuality. It sings true internally and is reflected externally in how we work",
        cta: {
            text: 'View more work',
            isExternal: false,
            url: '#',
        },
        cases: [
            {
                title: '',
                description: '',
                url: '#',
                image: {
                    url: '/case1.png',
                    alt: 'image',
                }
            },
            {
                title: '',
                description: '',
                url: '#',
                image: {
                    url: '/case1.png',
                    alt: 'image',
                }
            },
            {
                title: '',
                description: '',
                url: '#',
                image: {
                    url: '/case1.png',
                    alt: 'image',
                }
            },
            {
                title: '',
                description: '',
                url: '#',
                image: {
                    url: '/case1.png',
                    alt: 'image',
                }
            },
            
        ],
    },
};



export const Default: Story = {
    args: defaultData,
};
