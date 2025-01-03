import type { Metadata } from "next";
import localFont from "next/font/local";
// import "./styles/main.scss";
import { getGlobalPageMetadata,getGlobalData } from "@/data/loaders";

import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/stories/Header";
import Head from 'next/head';
import { Footer } from "@/stories/Footer";

import Transition from "./transition";
// import { Inter } from "next/font/google";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export async function generateMetadata(): Promise<Metadata> {
    const metadata = await getGlobalPageMetadata();

    return {
        title: metadata?.data?.title ?? "Epic Next Course",
        description: metadata?.data?.description ?? "Epic Next Course",
    };
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const globalData = await getGlobalData();

    // console.log(globalData.data.footer);

    return (
        <html lang="en">
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="GHO Sydney is an award winning creative brand experience agency. We use strategy, design thinking and creativity to solve your business challenges, from positioning to user experience." />

                <title>GHO Sydney: Brand Experience Agency</title>

                <link rel="icon" href="/favicon.png" />

                <meta property="og:title" content="GHO Sydney: Brand Experience Agency" />
                <meta property="og:description" content="GHO Sydney is an award winning creative brand experience agency. We use strategy, design thinking and creativity to solve your business challenges, from positioning to user experience." />
                <meta property="og:image" content="/GHO-default-image.png" />
                <meta property="og:url" content="https://ghosydney.com/" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased home`}>

                <div id="main" role="main">
                    <Header data={globalData.data.header} />

                    <Toaster position="bottom-center" />

                    <Transition>
                        {children}
                    </Transition>

                    <Footer data={globalData.data.footer}/>

                </div>

            </body>
        </html>
    );
}
