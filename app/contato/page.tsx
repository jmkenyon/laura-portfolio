import React from "react";
import { Navbar } from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import { Translate } from "../components/Translate";
import { PiInstagramLogoThin } from "react-icons/pi";
import { PiLinkedinLogoThin } from "react-icons/pi";
import Link from "next/link";

const Page = () => {
  return (
    <div className="px-8 sm:py-8 py-13 bg-white">
      <div className="hidden sm:block">
        {" "}
        <Translate mode="light" />
      </div>
      <Navbar />

      <ContactForm />

      <div className="sm:flex-col flex flex-row justify-center gap-2 sm:justify-start">
        <Link
          href={"https://www.instagram.com/lauraconsoni.arq"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <PiInstagramLogoThin size={24} />
        </Link>
        <Link href={"https://www.linkedin.com/in/lauraconsoni/"} target="_blank" rel="noopener noreferrer">

          <PiLinkedinLogoThin size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Page;
