"use client";

import Link from "next/link";
import MobileMenu from "./MobileMenu";

import { cn } from "../lib/utils";
import Logo from "./Logo";

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
          <Link href="/" aria-label="Laura Consoni — home">
            <Logo className="sm:w-44 w-36" />
          </Link>
        </div>

        <nav className="hidden sm:flex items-start gap-12 pb-4 text-right">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}

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
