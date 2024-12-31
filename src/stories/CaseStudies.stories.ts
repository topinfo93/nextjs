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
        title: "",
        description: "",
        cta: {
            text: 'Get in touch',
            isExternal: false,
            url: '#',
        },
        imageText: [],
    },
};



export const Default: Story = {
    args: defaultData,
};
