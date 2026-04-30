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
  const isActive = (path: string) => pathname.startsWith(path);

  const links = [
    { href: "/sobre-mim", label: t("about"), code: "01" },
    { href: "/projetos", label: t("projects"), code: "02" },
    { href: "/contato", label: t("contact"), code: "03" },
  ];

  return (
    <div
      className={cn(
        "text-xs",
        mode === "dark" ? "text-white" : "text-foreground"
      )}
    >
      <div className="flex flex-row justify-between items-start">
        <div className="flex flex-col gap-1">
          <Link href="/" data-cursor="HOME">
            <Image
              src="/logo.png"
              alt="Laura Consoni Logo"
              width={120}
              height={40}
              className={cn(
                "h-auto sm:w-40 w-32",
                mode === "dark" && "invert brightness-200"
              )}
              priority
              fetchPriority="high"
            />
          </Link>
          <span
            className={cn(
              "label-mono pl-1 mt-1",
              mode === "dark" ? "text-white/60" : "text-foreground-muted"
            )}
          >
            architect
          </span>
        </div>

        <nav className="hidden sm:flex items-start gap-12 pb-4 text-right">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              data-cursor="OPEN"
              className={cn(
                "group flex items-baseline gap-2 link-underline",
                isActive(link.href) && "is-active",
                mode === "dark"
                  ? "text-white/85 hover:text-white"
                  : "text-foreground-muted hover:text-foreground"
              )}
            >
              <span
                className={cn(
                  "label-mono",
                  mode === "dark" ? "text-white/50" : "text-foreground-muted/70"
                )}
              >
                {link.code}
              </span>
              <span className="lowercase tracking-wide">{link.label}</span>
            </Link>
          ))}
        </nav>
        <MobileMenu mode={mode} />
      </div>
    </div>
  );
};

export default memo(Navbar);
