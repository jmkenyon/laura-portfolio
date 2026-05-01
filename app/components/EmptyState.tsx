"use client";

import { memo } from "react";
import { cn } from "../lib/utils";
import Navbar from "./Navbar";
import Translate from "./Translate";

interface EmptyState {
  title?: string;
  subtitle?: string;
  navbar?: boolean;
}

const EmptyState: React.FC<EmptyState> = ({
  title = "Página não encontrada",
  subtitle = "A página que você procura não existe ou foi removida",
  navbar = true,
}) => {
  return (
    <div
      className={cn(
        "bg-white text-foreground min-h-screen",
        navbar && "px-6 sm:px-10 sm:py-10 py-13"
      )}
    >
      {navbar && (
        <>
          <div className="hidden sm:block">
            <Translate mode="light" />
          </div>
          <Navbar />
        </>
      )}

      <div className="flex flex-col gap-4 justify-center items-start h-[60vh] max-w-[1400px] mx-auto">
        <div className="label-mono text-foreground-muted">— {title}</div>
        <h1 className="font-display text-5xl md:text-7xl tracking-tight lowercase leading-[0.95]">
          {subtitle}
        </h1>
      </div>
    </div>
  );
};

export default memo(EmptyState);
