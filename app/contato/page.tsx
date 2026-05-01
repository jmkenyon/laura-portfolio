import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Translate from "../components/Translate";
import SocialIcons from "../components/SocialIcons";

const Page = () => {
  return (
    <div className="px-6 sm:px-10 sm:py-10 py-13 bg-white text-foreground min-h-screen">
      <div className="hidden sm:block">
        <Translate mode="light" />
      </div>
      <Navbar />
      <ContactForm />
      <SocialIcons />
      <footer className="mt-32 pt-10 border-t border-line label-mono text-foreground-muted flex justify-between max-w-[1600px] mx-auto">
        <span>© laura consoni — 2026</span>
        <span>são paulo · paris</span>
      </footer>
    </div>
  );
};

export default Page;
