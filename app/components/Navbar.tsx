"use client"

import Link from "next/link";
import MobileMenu from "./MobileMenu";

import { cn } from "../lib/utils";

interface NavbarProps {
    mode?: "light" | "dark";
}

export const Navbar = ({mode}: NavbarProps) => {
  return (
    <div>

      <div className="text-xs ">
        <div className={cn("flex flex-row justify-between ",
                    mode === "dark" ? "text-white" : "text-black"
                    )} >
          <div className="flex flex-col text-left ">
            <Link href="/" className="font-bold">
              LAURA CONSONI
            </Link>
          </div>
          <nav className="justify-end space-x-[46px] pb-4 text-right sm:block hidden"

         >
            <Link href="/sobre-mim">sobre mim</Link>
            <Link href="/projetos">projetos</Link>
            <Link href="/contato">contato</Link>
          </nav>
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};
