import { Button } from "@/components/ui/button";
import Link from "next/link";
import GmailIcon from "./icons/GmailIcon";

import GithubIcon from "./icons/GithubIcon";
import "./social-media-handler.css";
import LinkedinIcon from "./icons/LinkedinIcon";
import XIcon from "./icons/XIcon";

const SocialMediaIcons = () => {

  return (
    <>
      <div className="items-center md:justify-start hidden gap-10 pb-5 md:flex w-full">
        <Button asChild variant={"ghost"}>
          <div className="flex items-center gap-2">
            <GithubIcon />
            <Link
              href={"https://github.com/Mack2133"}
              className="text-lg leading-3 underline cursor-pointer text-zinc-400"
            >
              Github
            </Link>
          </div>
        </Button>
        <Button asChild variant={"ghost"}>
          <div className="flex items-center gap-2 mix-md:hidden">
            <LinkedinIcon />
            <Link
              href={"https://www.linkedin.com/in/ayyoob-ajward/"}
              className="text-lg leading-3 underline cursor-pointer text-zinc-400"
            >
              LinkedIn
            </Link>
          </div>
        </Button>
        <Button asChild variant={"ghost"}>
          <div className="flex items-center gap-2 mix-md:hidden">
            <XIcon />
            <Link
              href={"https://twitter.com/AyyoobAjwad"}
              className="text-lg leading-3 underline cursor-pointer text-zinc-400"
            >
              Twitter
            </Link>
          </div>
        </Button>

        <Button asChild variant={"ghost"}>
          <div className="flex items-center gap-2 min-md:hidden">
            <GmailIcon />
            <Link
              href={"mailto:ajwardayyoob@gmail.com"}
              className="text-lg leading-3 underline cursor-pointer text-zinc-400"
            >
              Email
            </Link>
          </div>
        </Button>
      </div>

      {/* md screens */}
      <div className="flex flex-col items-start pt-5 pb-5 gap-y-2 md:hidden">
        <Button asChild variant={"ghost"} className="flex justify-start w-full bg-secondary cursor-pointer hover:bg-secondary/90">
          <div className="flex items-center gap-2">
            <GithubIcon />
            <Link
              href={"https://github.com/Mack2133"}
              className="text-lg leading-3 cursor-pointer text-zinc-400"
            >
              Github
            </Link>
          </div>
        </Button>
        <Button asChild variant={"ghost"} className="flex justify-start w-full bg-secondary cursor-pointer hover:bg-secondary/90">
          <div className="flex items-center gap-2 mix-md:hidden">
            <LinkedinIcon />
            <Link
              href={"https://www.linkedin.com/in/ayyoob-ajward/"}
              className="text-lg leading-3 cursor-pointer text-zinc-400"
            >
              LinkedIn
            </Link>
          </div>
        </Button>
        <Button
          asChild
          variant={"ghost"}
          className="flex justify-start w-full bg-secondary cursor-pointer hover:bg-secondary/90"
        >
          <div className="flex items-center gap-2 mix-md:hidden">
            <XIcon />
            <Link
              href={"https://twitter.com/AyyoobAjwad"}
              className="text-lg leading-3 cursor-pointer text-zinc-400"
            >
              Twitter
            </Link>
          </div>
        </Button>
        <Button asChild variant={"ghost"} className="flex justify-start w-full bg-secondary cursor-pointer hover:bg-secondary/90">
          <div className="flex items-center gap-2 min-md:hidden">
            <GmailIcon />
            <Link
              href={"mailto:ajwardayyoob@gmail.com"}
              className="text-lg leading-3 cursor-pointer text-zinc-400"
            >
              Email
            </Link>
          </div>
        </Button>
      </div>
    </>
  );
};

export default SocialMediaIcons;
