import profilePicture from "../../assets/profilePic.png";

import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { RiComputerLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { SideBarItems, SideBarMobile } from "../sideBarMobile";

export default function SideBar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <nav
        className={`${
          !isMobile ? "bg-[#171717] h-screen w-full p-10" : "hidden"
        }`}
      >
        <div className="w-full flex flex-col justify-center items-center">
          <div>
            <img
              src={profilePicture}
              alt="Foto de perfil"
              className="object-cover w-full"
            />
          </div>
          <div className="text-center mt-2 mb-14">
            <p className="text-xl font-bold">Jeferson Luís</p>
            <p className="opacity-60 text-sm">Full-Stack Developer</p>
          </div>
          <nav className="flex flex-col justify-center gap-7">
            <ul>
              <Link
                to="/"
                className="flex items-center gap-6 opacity-60 hover:opacity-100 transition-all duration-300 ease-in-out"
              >
                <AiOutlineHome size={18} color="#fff" />
                <p className="font-medium">Home</p>
              </Link>
            </ul>
            <ul>
              <Link
                to="/projects"
                className="flex items-center gap-6 opacity-60 hover:opacity-100 transition-all duration-300 ease-in-out"
              >
                <RiComputerLine size={18} color="#fff" />
                <p className="font-medium">Projects</p>
              </Link>
            </ul>
            <ul>
              <Link
                to="/about"
                className="flex items-center gap-6 opacity-60 hover:opacity-100 transition-all duration-300 ease-in-out"
              >
                <AiOutlineUser size={18} color="#fff" />
                <p className="font-medium">About</p>
              </Link>
            </ul>
            <ul>
              <Link
                to="/contact"
                className="flex items-center gap-6 opacity-60 hover:opacity-100 transition-all duration-300 ease-in-out"
              >
                <AiOutlineMail size={18} color="#fff" />
                <p className="font-medium">Contact</p>
              </Link>
            </ul>
          </nav>
        </div>
      </nav>

      <aside className={`${isMobile ? "h-screen absolute z-10" : "hidden"}`}>
        <SideBarMobile>
          <SideBarItems
            icon={<AiOutlineHome size={18} color="#fff" />}
            link={<Link to="/">Home</Link>}
          />
          <SideBarItems
            icon={<RiComputerLine size={18} color="#fff" />}
            link={<Link to="/projects">Projects</Link>}
          />
          <SideBarItems
            icon={<AiOutlineUser size={18} color="#fff" />}
            link={<Link to="/about">About</Link>}
          />
          <SideBarItems
            icon={<AiOutlineMail size={18} color="#fff" />}
            link={<Link to="/contact">Contact</Link>}
          />
        </SideBarMobile>
      </aside>
    </div>
  );
}
