"use client";

import Link from "next/link";
import MobileMenu from "./MobileMenu";

import { cn } from "../lib/utils";
import Image from "next/image";

interface NavbarProps {
  mode?: "light" | "dark";
}

export const Navbar = ({ mode }: NavbarProps) => {
  return (
    <div>
      <div className="text-xs ">
        <div
          className={cn(
            "flex flex-row justify-between ",
            mode === "dark" ? "text-white" : "text-black"
          )}
        >
          <div className="flex flex-col">
            <Link href="/">
            <Image
         
              src="/logo.png"
              alt="Laura Consoni Logo"
              width={120}
              height={40}
              className="h-auto sm:w-40 w-32"
            />
            </Link>
          </div>
          <nav className="justify-end space-x-[46px] pb-4 text-right sm:block hidden">
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
