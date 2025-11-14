import Link from "next/link"
import { PiInstagramLogoThin, PiLinkedinLogoThin } from "react-icons/pi"


const SocialIcons = () => {
  return (
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
  )
}

export default SocialIcons