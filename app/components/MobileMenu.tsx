"use client";

import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

import { useCallback, useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Translate } from "./Translate";
import { useTranslation } from "react-i18next";
import Image from "next/image";

interface MobileMenuProps {
  mode?: "light" | "dark";
}

const MobileMenu = ({ mode }: MobileMenuProps) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="block sm:hidden">
      <div onClick={toggleOpen} className="cursor-pointer z-50 relative">
        <CiMenuBurger size={24} color={mode === "dark" ? "white" : "gray"} />
      </div>

      {isOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-50 bg-white text-black flex flex-col items-center justify-center space-y-8 text-lg "
        >
          <div
            onClick={toggleOpen}
            className="cursor-pointer absolute top-6 right-6"
          >
            <IoMdClose size={24} color="grey" />
          </div>
          

          <Link href="/">
            <Image
              src="/logo.png"
              alt="Laura Consoni Logo"
              width={150}
              height={50}
              className="h-auto w-32 absolute inset-0 mx-auto top-15"
              onClick={() => setIsOpen(false)}
              />
            </Link>
          <Link href="/sobre-mim" onClick={() => setIsOpen(false)}>
            {t("about")}
          </Link>
          <Link href="/projetos" onClick={() => setIsOpen(false)}>
            {t("projects")}
          </Link>
          <Link href="/contato" onClick={() => setIsOpen(false)}>
            {t("contact")}
          </Link>
          <Translate mode="light" />
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
