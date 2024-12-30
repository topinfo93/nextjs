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
        // title: "Your partners from 'now' to the 'next'",
        // description: "By operating at the intersection of brand, experience & technology we deliver a better experience for our people, our clients and their customers.",
        // cta: {
        //     text: 'Get in touch',
        //     isExternal: false,
        //     url: '222',
        // },
        // imageText: [],
    },
};



export const Default: Story = {
    args: defaultData,
};
