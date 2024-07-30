import { client } from "@/sanity/lib/client";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const urlValidator = (url: string) => {
  if(url == null){
    return;
  }

  if(url.search("github") !== -1){
    return url;
  } 
  
  if(url.startsWith('http:localhost:3000/')) {
     return url.replace('http:localhost:3000/', '');
  } 
  
  if(url.includes('https://ayyyoob-ajward-portfolio.vercel.app')) {
    return url.replace('https://ayyyoob-ajward-portfolio.vercel.app', '');
  }

  if(url.includes('site')){
    return url.replace("https://ayyoobajward.site",'');
  }
} 

export const getProjects = async() => {
  const projects: Project [] = await client.fetch(`* [_type == "project"]{
  project_name,
  technologies,
  cover_image,
  excerpt,
  project_description,
  project_url,
  project_type -> {
    type_name
  }
}`);

  return projects;
}