"use client";

import Link from "next/link";
import MobileMenu from "./MobileMenu";

import { cn } from "../lib/utils";
import Image from "next/image";

import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";

interface NavbarProps {
  mode?: "light" | "dark";
}

export const Navbar = ({ mode }: NavbarProps) => {
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
              className={isActive("/sobre-mim")}
            >
              {t("about")}
            </Link>
            <Link
              href="/projetos"
              className={isActive("/projetos")}
            >
              {t("projects")}
            </Link>
            <Link
              href="/contato"
              className={isActive("/contato")}
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
