import { Navbar } from "./components/Navbar";
import { Translate } from "./components/Translate";


export default function Home() {
  return (
    <div
    className="p-8"

      style={{
        
        backgroundImage: `url('/background-image.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      <div className="hidden sm:block">   <Translate mode="dark" /></div>
   



        <Navbar />
      </div>

  );
}
