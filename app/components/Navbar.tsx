"use client";

import Link from "next/link";
import MobileMenu from "./MobileMenu";

import { cn } from "../lib/utils";
import Image from "next/image";

import { useTranslation } from "react-i18next";

interface NavbarProps {
  mode?: "light" | "dark";
}

export const Navbar = ({ mode }: NavbarProps) => {
  const { t } = useTranslation();
  return (
    <div >
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
            <Link href="/sobre-mim">{t("about")}</Link>
            <Link href="/projetos">{t("projects")}</Link>
            <Link href="/contato">{t("contact")}</Link>
          </nav>
          <MobileMenu mode={mode}/>
        </div>
      </div>
    </div>
  );
};
