import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Translate from "../components/Translate";
import SocialIcons from "../components/SocialIcons";
import Footer from "../components/Footer";

const Page = () => {
  return (
    <div className="px-6 sm:px-10 sm:py-10 py-13 bg-white text-foreground min-h-screen">
      <div className="hidden sm:block">
        <Translate mode="light" />
      </div>
      <Navbar />
      <ContactForm />
      <SocialIcons />
      <Footer />
    </div>
  );
};

export default Page;
