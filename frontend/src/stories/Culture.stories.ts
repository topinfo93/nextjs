import type { Meta, StoryObj } from '@storybook/react';

import { Culture, CultureProps } from "./Culture";


const meta: Meta<typeof Culture> = {
    title: "Example/Culture",
    component: Culture,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen", // Storybook layout
    },
};

export default meta;

type Story = StoryObj<typeof meta>;


const defaultData: CultureProps = {
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
