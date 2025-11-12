import React from "react";
import { Navbar } from "../components/Navbar";
import { Translate } from "../components/Translate";

const Page = () => {
  return (
    <div className="px-8 sm:py-8 py-13">
      <div className="hidden sm:block">
        {" "}
        <Translate mode="light" />
      </div>
      <Navbar />
      <div>Projetos</div>
    </div>
  );
};

export default Page;
