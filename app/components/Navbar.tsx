"use client";

import Link from "next/link";
import MobileMenu from "./MobileMenu";

import { cn } from "../lib/utils";
import Image from "next/image";

import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import { memo } from "react";

interface NavbarProps {
  mode?: "light" | "dark";
}

const Navbar = ({ mode }: NavbarProps) => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const isActive = (path: string) =>
    pathname.startsWith(path) ? "text-black" : "";

  return (
    <div>
      <div className="text-xs ">
        <div
          className={cn(
            "flex flex-row justify-between ",
            mode === "dark" ? "text-white" : "text-gray-500"
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
            <Link
              href="/sobre-mim"
              className={cn(
                isActive("/sobre-mim"),
                mode != "dark" && "hover:text-black"
              )}
            >
              {t("about")}
            </Link>
            <Link
              href="/projetos"
              className={cn(
                isActive("/projetos"),
                mode != "dark" && "hover:text-black"
              )}
            >
              {t("projects")}
            </Link>
            <Link
              href="/contato"
              className={cn(
                isActive("/contato"),
                mode != "dark" && "hover:text-black"
              )}
            >
              {t("contact")}
            </Link>
          </nav>
          <MobileMenu mode={mode} />
        </div>
      </div>
    </div>
  );
};

export default memo(Navbar);