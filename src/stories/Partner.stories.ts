import type { Meta, StoryObj } from '@storybook/react';

import { Partner, PartnerProps } from "./Partner";


const meta: Meta<typeof Partner> = {
    title: "Example/Partner",
    component: Partner,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen", // Storybook layout
    },
};

export default meta;

type Story = StoryObj<typeof meta>;


const defaultData: PartnerProps = {
    data: {
        title: "Your partners from 'now' to the 'next'",
        description: "By operating at the intersection of brand, experience & technology we deliver a better experience for our people, our clients and their customers.",
        cta: {
            text: 'Get in touch',
            isExternal: false,
            url: '#',
        },
        imageText: [
            {
                title: 'DEFINING YOUR MOST VALUABLE FUTURE',
                description: 'Unlike consultancies that value endless reports, we’re focussed on connecting insight and action at speed. With a strategic approach centred on feasibility, viability and desirability we ensure your future state vision becomes a future state reality.',
                image: {
                    url: '/demo.mp4',
                    alt: 'image',
                }
            },
            {
                title: 'DEFINING YOUR MOST VALUABLE FUTURE',
                description: 'Unlike consultancies that value endless reports, we’re focussed on connecting insight and action at speed. With a strategic approach centred on feasibility, viability and desirability we ensure your future state vision becomes a future state reality.',
                image: {
                    url: '/demo.mp4',
                    alt: 'image',
                }
            },
        ],
    },
};



export const Default: Story = {
    args: defaultData,
};
