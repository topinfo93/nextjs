import qs from "qs";
import { getStrapiURL, getStrapiURLWithPath } from "@/lib/utils";

const baseUrl = getStrapiURL();
// import { getAuthToken } from "./services/get-token";


async function fetchData(url: string) {
    // const authToken = await getAuthToken();

    const authToken = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

    if (!authToken) throw new Error("The Strapi API Token environment variable is not set.");


    const headers = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
        },
    };

    try {
        const response = await fetch(url, authToken ? headers : {});
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // or return null;
    }
}

export function getStrapiMedia(url: string | null) {
    if (url == null) {
        return null;
    }

    // Return the full URL if the media is hosted on an external provider
    if (url.startsWith('http') || url.startsWith('//')) {
        return url;
    }

    // Otherwise prepend the URL path with the Strapi URL
    return `${getStrapiURL()}${url}`;
}

export async function fetchAPI(
    path: string,
    urlParamsObject = {},
    options = {}
) {
    try {
        // Merge default and user options
        const mergedOptions = {
            next: { revalidate: 60 },
            headers: {
                "Content-Type": "application/json",
            },
            ...options,
        };

        // Build request URL
        const queryString = qs.stringify(urlParamsObject);
        const requestUrl = `${getStrapiURLWithPath(
            `/api${path}${queryString ? `?${queryString}` : ""}`
        )}`;


        // Trigger API call
        const response = await fetch(requestUrl, mergedOptions);
        const data = await response.json();
        return data;

    } catch (error) {
        console.error(error);
        throw new Error(`Please check if your server is running and you set all the required tokens.`);
    }
}

export async function getHomePageData() {
    const url = `/home-page`;

    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    if (!token) throw new Error("The Strapi API Token environment variable is not set.");
    const options = { headers: { Authorization: `Bearer ${token}` } };


    const urlParamsObject = {
        populate: {
            // fields: ['title', 'description'],
            hero: {
                populate: {
                    awards: {
                        populate: '*',
                    },
                    cta: {
                        populate: '*',
                    },
                }
            },
            animation: {
                populate: '*',
            },
            partner: {
                populate: {
                    cta: {
                        populate: '*', 
                    },
                    imageText: {
                        populate: '*', 
                    },
                },
            },

            caseStudies: {
                populate: {
                    cta: {
                        populate: '*', 
                    },
                    cases: {
                        populate: '*',
                    },
                },
            },

            culture: {
                populate: {
                    image: {
                        populate: '*', 
                    },
                    cta: {
                        populate: '*',
                    },
                },
            },
        },
    };

    const response = await fetchAPI(url, urlParamsObject, options);
    return response;


}

export async function getGlobalData() {
    const url = new URL("/api/global", baseUrl);

    url.search = qs.stringify({
        populate: [
            "header.logoText",
            "header.ctaButton",
            "footer.logoText",
            "footer.socialLink",
        ],
    });

    return await fetchData(url.href);
}

export async function getGlobalPageMetadata() {
    const url = new URL("/api/global", baseUrl);

    url.search = qs.stringify({
        fields: ["title", "description"],
    });

    return await fetchData(url.href);
}

export async function getSummaries(queryString: string, currentPage: number) {
    const PAGE_SIZE = 4;

    const query = qs.stringify({
        sort: ["createdAt:desc"],
        filters: {
            $or: [
                { title: { $containsi: queryString } },
                { summary: { $containsi: queryString } },
            ],
        },
        pagination: {
            pageSize: PAGE_SIZE,
            page: currentPage,
        },
    });
    const url = new URL("/api/summaries", baseUrl);
    url.search = query;
    return fetchData(url.href);
}

export async function getSummaryById(summaryId: string) {
    return fetchData(`${baseUrl}/api/summaries/${summaryId}`);
}