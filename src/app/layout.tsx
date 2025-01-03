import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/main.scss";
import { getGlobalPageMetadata,getGlobalData } from "@/data/loaders";

import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/stories/Header";
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

    // console.log(globalData.data);

    return (
        <html lang="en">
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
