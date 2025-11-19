
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Translate from "../components/Translate";
import SocialIcons from "../components/SocialIcons";

const Page = () => {
  return (
    <div className="px-8 sm:py-8 py-13 bg-white">
      <div className="hidden sm:block">
        {" "}
        <Translate mode="light" />
      </div>
      <Navbar />

      <ContactForm />

      <SocialIcons />
    </div>
  );
};

export default Page;
