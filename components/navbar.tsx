import Link from "next/link"

import { AtSign, Download, Folder, Home } from 'lucide-react';
import React from "react";
import { SideMenu } from "./sidemenu";

export function Navbar() {
  // const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  return (
    <header className="text-primary/80 dark:bg-secondary/80 bg-gradient-to-bl from-zinc-800/70 to-zinc-900 border ring-1 ring-zinc-300/50 dark:ring-1 px-5 md:px-10 h-[55px] rounded-full mt-5 max-w-full md:w-[700px] w-full flex items-center justify-between">
      <div className="font-medium text-sm">
        <div className="flex items-center justify-center space-x-1">
          <span className="text-sm"><Home size={16}/></span>
          <Link href="/">Home</Link>
        </div>
      </div>
      <div className="items-center justify-between gap-x-5 text-sm font-medium hidden md:flex">
        <div className="center-center space-x-1">
          <Folder size={17}/>
          <Link href="/projects">Projects</Link>
        </div>

        <div className="center-center space-x-1">
          <Download size={17}/>
          <Link download={"https://drive.google.com/drive/folders/13YnZNY7MEvAL80Q_fqZlnnsiAVgzxm1n?usp=drive_link"} href="https://drive.google.com/drive/folders/13YnZNY7MEvAL80Q_fqZlnnsiAVgzxm1n?usp=drive_link">CV/Resume</Link>
        </div>

        <div className="center-center space-x-1">
          <AtSign size={17}/>
          <Link href="/contact">Contact</Link>
        </div>
      </div>

      {/* small screen nav bar  */}
      <div className="md:hidden">
        <SideMenu />
      </div>

    </header>
  );
}
