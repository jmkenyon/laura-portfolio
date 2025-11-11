import Link from "next/link";
import MobileMenu from "./MobileMenu";

export const Navbar = () => {
  return (
    <div className="text-white text-xs">
      <div className="flex flex-row justify-between ">
        <div className="flex flex-col text-left ">
          <Link href="/" className="font-bold">LAURA CONSONI</Link>
        </div>
        <nav className=" justify-end space-x-[46px] pb-4 text-right sm:block hidden">
          <Link href="/sobre-mim">sobre mim</Link>
          <Link href="/projetos">projetos</Link>
          <Link href="/contato">contato</Link>
        </nav>
        <MobileMenu />
      </div>
    </div>
  );
};
