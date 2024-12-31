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
        title: "",
        description: "",
        cta: {
            text: 'Get in touch',
            isExternal: false,
            url: '#',
        },
        image: {
            url: '#',
            alt: '',
        },
    },
};



export const Default: Story = {
    args: defaultData,
};
