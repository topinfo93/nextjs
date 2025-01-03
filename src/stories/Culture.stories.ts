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
        title: "Change is in our DNA",
        description: "Our culture of work with people you like is pervasive and has been key to our resilience and evolution. It embodies family while celebrating individuality. It sings true internally and is reflected externally in how we work",
        cta: {
            text: 'About us',
            isExternal: false,
            url: '#',
        },
        image: {
            url: '/demo.gif',
            alt: 'image',
        },
    },
};



export const Default: Story = {
    args: defaultData,
};
