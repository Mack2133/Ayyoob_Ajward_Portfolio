import TechBadge from "@/components/techBadge"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { urlValidator } from "@/lib/utils";
import urlFor from "@/sanity/lib/urlFor";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { Skeleton } from "./ui/skeleton";

export const revalidate = 10;

export default function ProjectCard( {project} : {project: Project}){
  const url = urlValidator(project.project_url);
    return (
        <div className="pt-5">
        <Card>
          <CardHeader className="pb-3">
            <div className="flex justify-between flex-wrap max-md:space-y-2 max-md:mb-2">
              <CardTitle className="">
                {project.project_name}
              </CardTitle>
              <div>
              <Badge variant="outline" className="hidden md:block">
                {project.project_type.type_name}
              </Badge>
              <Badge variant="secondary" className="md:hidden">
                {project.project_type.type_name}
              </Badge>
              </div>
            </div>
            <CardDescription>
              {project.excerpt}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TechBadge technologies={project.technologies} />
            <Suspense fallback={<Skeleton className="w-full aspect-square"/>}>
            <Image
              src={urlFor(project.cover_image.asset).url()}
              alt=""
              width={500}
              height={300}
              className="w-full my-5 rounded-md object-cover"
            />
            </Suspense>
            <CardDescription className="space-y-2">
              {project.project_description}
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href={`${url}`} className="w-full">
                view project
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
}