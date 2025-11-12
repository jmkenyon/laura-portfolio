import React from "react";
import { Navbar } from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import { Translate } from "../components/Translate";

const Page = () => {
  return (
    <div className="p-8">
      <div className="hidden sm:block">
        {" "}
        <Translate mode="light" />
      </div>
      <Navbar />

      <ContactForm />
    </div>
  );
};

export default Page;
