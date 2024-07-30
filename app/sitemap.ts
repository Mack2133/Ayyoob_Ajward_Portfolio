import { MetadataRoute } from "next";


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {url: `${process.env.BASE_URL}`},
        {url: `${process.env.BASE_URL}/projects`},
        {url: `${process.env.BASE_URL}/contact`},
    ]
}