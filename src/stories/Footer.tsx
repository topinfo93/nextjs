import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";
import '../app/styles/main.scss';

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

export const Footer = ({ data }: FooterProps) => {


    const footerText = data.footerText;
    const copyright = data.copyright;
    const footerCTA = data.footerCTA;
    const socialLinks = data.socialLinks;
    const footerMenu = data.footerMenu;
    const logoText = data.logoText;
    const logoUrl = getStrapiMedia(
        logoText.logoImage?.url
    );
    return (
        <>
            <footer id="home-footer">
                <div className="section-container">
                    <div className="row">
                        <div className="slogan">

                            {footerText ? (
                                <p dangerouslySetInnerHTML={{ __html: footerText }} />
                            ) : null}

                            {footerCTA ? (

                                <div className="wrap-btn">
                                    <a

                                        href={footerCTA.url}
                                        target={footerCTA.isExternal ? "_blank" : "_self"}
                                        className="btn"
                                    >
                                        {footerCTA.text}
                                    </a>
                                </div>


                            ) : null}




                        </div>
                        <div className="socials">
                            <ul>
                                {socialLinks.map((social, index) => {
                                    if (!social.text) {
                                        return null;
                                    }
                                    return (
                                        <li key={index}>
                                            <a href={social.link}
                                                target={social.isExternal ? "_blank" : "_self"}
                                            >
                                                {social.text}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>

                            <div className="logo">

                                <Link
                                    href={logoText.url}
                                >

                                    {logoUrl ? (
                                        <Image
                                            src={logoUrl}
                                            alt="logo"
                                            width={100}
                                            height={100}
                                        />
                                    ) : null}

                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="menu-footer">
                            <nav className="site-navigation">
                                <div className="menu-footer-menu-animation-container">
                                    <ul id="menu-footer-menu-animation" className="menu">

                                        {footerMenu.map((menu, index) => {
                                            if (!menu.linkText) {
                                                return null;
                                            }
                                            return (

                                                <li
                                                    key={index}

                                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                                >
                                                    <Link
                                                        href={menu.url}
                                                        target={menu.isExternal ? "_blank" : "_self"}
                                                    >

                                                        {menu.linkText}
                                                    </Link>
                                                </li>
                                            )
                                        })}


                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="row">
                        <div className="copyright-text">

                            {copyright ? (
                                <p dangerouslySetInnerHTML={{ __html: copyright }} />
                            ) : null}

                        </div>
                    </div>
                </div>
            </footer>

            <div className="marquee">
                <div className="track">
                    <div className="content" role="list">
                        <div role="listitem">
                            <b>Work with people you like. </b> Life’s short.
                        </div>{" "}
                        <div role="listitem">
                            <b>Work with people you like. </b> Life’s short.
                        </div>{" "}
                        <div role="listitem">
                            <b>Work with people you like. </b> Life’s short.
                        </div>{" "}
                    </div>
                </div>
            </div>
        </>
    )


};
