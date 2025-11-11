"use client";

import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

import { useCallback, useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Translate } from "./Translate";

const MobileMenu = () => {
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
        <CiMenuBurger size={24} color="white" />
      </div>

      {isOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-50 bg-white text-black flex flex-col items-center justify-center space-y-8 text-lg "
        >
            <div onClick={toggleOpen} className="cursor-pointer absolute top-6 right-6">
              <IoMdClose size={24} color="grey"/> 
            </div>

          <Link href="/sobre-mim" onClick={() => setIsOpen(false)}>
            sobre mim
          </Link>
          <Link href="/projetos" onClick={() => setIsOpen(false)}>
            projetos
          </Link>
          <Link href="/contato" onClick={() => setIsOpen(false)}>
            contato
          </Link>
          <Translate mode="light"/>
        </div>
      )}
    </div>
  );
};

export default MobileMenu