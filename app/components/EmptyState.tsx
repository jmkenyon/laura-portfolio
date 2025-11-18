"use client";

import { Navbar } from "./Navbar";
import { Translate } from "./Translate";

interface EmptyState {
  title?: string;
  subtitle?: string;
  navbar?: boolean;
}

const EmptyState: React.FC<EmptyState> = ({
  title = "Página não encontrada",
  subtitle = "A página que você procura não existe ou foi removida",
  navbar = true
}) => {
  return (
    <div className="px-8 sm:py-8 py-13 bg-white">
      {navbar && (
        <>
          <div className="hidden sm:block">
            {" "}
            <Translate mode="light" />
          </div>
          <Navbar />
        </>
      )}

      <div
        className="
        flex
        flex-col
        gap-2
        justify-center
        sm:items-center
        items-start
         h-[60vh]
    "
      >
        <h1 className="text-sm font-semibold  text-gray-500">{title}</h1>
        <p className="text-sm text-black">{subtitle}</p>
      </div>
    </div>
  );
};

export default EmptyState;
