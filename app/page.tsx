"use client";

import { useRef } from "react";
import { Navbar } from "./components/Navbar";
import { Translate } from "./components/Translate";
import { IoIosArrowDown } from "react-icons/io";

const images: string[] = [
  "/background-image.png",
  "/background-image2.png",
  "/background-image3.png",
];

export default function Home() {
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  const scrollToNext = () => {
    const currentIndex = sectionRefs.current.findIndex(
      (el) => el && el.getBoundingClientRect().top === 0
    );

    const nextIndex =
      currentIndex === -1 ? 0 : (currentIndex + 1) % sectionRefs.current.length;

    sectionRefs.current[nextIndex]?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="hidden sm:block fixed z-50 right-8 top-8">
        {" "}
        <Translate mode="dark" />
      </div>
      <div className="fixed sm:top-13 top-5 w-full p-8">
        <Navbar mode="dark" />
      </div>
      <div
        onClick={scrollToNext}
        className="cursor-pointer fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 text-white"
      >
        <IoIosArrowDown size={24} />
      </div>

      <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-container">
        {images.map((image: string, index: number) => (
          <div
            key={index}
            ref={(el) => {
              if (el) sectionRefs.current[index] = el;
            }}
            className="snap-start flex items-center justify-center"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              minHeight: "100vh",
              width: "100vw",
            }}
          />
        ))}
      </div>
    </div>
  );
}
