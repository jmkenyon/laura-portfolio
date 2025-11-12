
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
      <div>Sobre mim</div>
    </div>
  );
};

export default Page;
