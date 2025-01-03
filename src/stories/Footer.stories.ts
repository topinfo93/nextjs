import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';

import { Footer } from './Footer';

const meta = {
    title: 'Example/Footer',
    component: Footer,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
    // args: {
    //   onLogin: fn(),
    //   onLogout: fn(),
    //   onCreateAccount: fn(),
    // },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const LoggedIn: Story = {
//   args: {
//     user: {
//       name: 'Jane Doe',
//     },
//   },
// };
interface FooterMenu {
    linkText: string;
    isExternal: boolean;
    url: string;
  }
  
  interface SocialLink {
    text: string;
    link: string;
    isExternal: boolean;
  }

export interface FooterProps {
    data: {
        logoText: {
            url: string;
            isExternal: boolean;
            logoImage: {
                url: string;
                alt: string;
            };
            linkText: string;
        }
        footerText: string;
        footerCTA: {
            text: string;
            url: string;
            isExternal: boolean;
        }
        copyright: string;
        footerMenu: FooterMenu[];
        socialLinks: SocialLink[];
    }
}

export const Default: Story = {
    args: {
        data: {
            logoText: {
                url: '/',
                isExternal: false,
                logoImage: {
                    url: '/logo.svg',
                    alt: 'Example Logo',
                },
                linkText: 'logo',
            },
            footerText: '<b>Ready to make real change for your business?</b> Work with Good Humans Only.',
            footerCTA: {
                text: 'Get in touch',
                url: '/',
                isExternal: false,
            },
            copyright: 'GHO acknowledges and pays respect to the past, present and future Traditional Custodians and Elders of this nation and the continuation of cultural, spiritual and educational practices of Aboriginal and Torres Strait Islander peoples.©GHO Sydney 2024',
            footerMenu: [
                {
                    linkText: 'Work',
                    isExternal: false,
                    url: '#',
                },
                {
                    linkText: 'About',
                    isExternal: false,
                    url: '#',
                },
                {
                    linkText: 'Offering',
                    isExternal: false,
                    url: '#',
                },
                {
                    linkText: 'Contact',
                    isExternal: false,
                    url: '#',
                }
            ],
            socialLinks: [
                {
                    text: 'Linked in',
                    isExternal: false,
                    link: '#',
                },
                {
                    text: 'INSTAGRAM',
                    isExternal: false,
                    link: '#',
                }
            ]
        }
    },
};
