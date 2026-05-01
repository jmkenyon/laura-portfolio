"use client";

import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

import { useEffect, useState, useRef, memo } from "react";
import Link from "next/link";
import Translate from "./Translate";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

interface MobileMenuProps {
  mode?: "light" | "dark";
}

const MobileMenu = ({ mode }: MobileMenuProps) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => setIsOpen((value) => !value);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const links = [
    { href: "/sobre-mim", label: t("about"), code: "01" },
    { href: "/projetos", label: t("projects"), code: "02" },
    { href: "/contato", label: t("contact"), code: "03" },
  ];

  return (
    <div className="block sm:hidden">
      <button
        onClick={toggleOpen}
        className="relative z-50"
        aria-label="Open menu"
      >
        <CiMenuBurger size={22} color={mode === "dark" ? "white" : "currentColor"} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-white text-foreground flex flex-col justify-between p-8"
          >
            <div className="flex justify-between items-center">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <Image
                  src="/logo.png"
                  alt="Laura Consoni Logo"
                  width={130}
                  height={40}
                  className="h-auto w-32"
                />
              </Link>
              <button onClick={toggleOpen} aria-label="Close menu">
                <IoMdClose size={26} />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-baseline gap-3 border-b border-line py-4"
                  >
                    <span className="label-mono text-foreground-muted">
                      {link.code}
                    </span>
                    <span className="font-display text-5xl lowercase tracking-tight">
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="flex justify-between items-end">
              <div className="label-mono text-foreground-muted">
                <div>são paulo</div>
                <div>laura consoni © 2026</div>
              </div>
              <Translate mode="light" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default memo(MobileMenu);
