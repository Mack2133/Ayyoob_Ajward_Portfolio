import AboutMe from "@/components/about-me";
import { AvatarImageCircle } from "@/components/avatar-image";
import SocialMediaIcons from "@/components/social-media-handles";

export default function Home() {
  return (
    <main className="pt-10 flex flex-col w-full">
      <div className="center-center flex-col gap-10">
        <div className="flex justify-start gap-x-5 items-center self-start">
          <AvatarImageCircle />
          <div className="space-y-1">
            <h1 className="text-3xl md:text-4xl font-bold text-primary">Ayyoob Ajward</h1>
            <h1 className="text-lg font-medium text-primary/80">
              Full Stack Developer
            </h1>
          </div>
        </div>
        <AboutMe />
      </div>
      <div className="w-full py-5">
        <SocialMediaIcons />
      </div>
    </main>
  );
}
