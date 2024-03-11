import profilePicture from "../../assets/profilePic.png";

import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { RiComputerLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { SideBarItems, SideBarMobile } from "../sideBarMobile";
import { usePath } from "../../hooks/usePath";

export default function SideBar() {
  const [isMobile, setIsMobile] = useState(false);
  const { isCurrentPage } = usePath();

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

  const current = "flex items-center gap-6 opacity-100";

  const general =
    "flex items-center gap-6 opacity-60 hover:opacity-100 transition-all duration-300 ease-in-out";

  return (
    <div>
      <nav
        className={`${
          !isMobile ? "bg-[#171717] fixed h-screen p-8" : "hidden"
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
              <Link to="/" className={isCurrentPage("/") ? current : general}>
                <AiOutlineHome size={18} color="#fff" />
                <p className="font-medium">Home</p>
              </Link>
            </ul>
            <ul>
              <Link
                to="/projects"
                className={isCurrentPage("/projects") ? current : general}
              >
                <RiComputerLine size={18} color="#fff" />
                <p className="font-medium">Projects</p>
              </Link>
            </ul>
            <ul>
              <Link
                to="/about"
                className={isCurrentPage("/about") ? current : general}
              >
                <AiOutlineUser size={18} color="#fff" />
                <p className="font-medium">About</p>
              </Link>
            </ul>
            <ul>
              <Link
                to="/contact"
                className={isCurrentPage("/contact") ? current : general}
              >
                <AiOutlineMail size={18} color="#fff" />
                <p className="font-medium">Contact</p>
              </Link>
            </ul>
          </nav>
        </div>
      </nav>

      <aside className={`${isMobile ? "h-screen fixed z-10" : "hidden"}`}>
        <SideBarMobile>
          <SideBarItems
            icon={<AiOutlineHome size={18} color="#fff" />}
            link={<Link to="/">Home</Link>}
            active={isCurrentPage("/")}
          />
          <SideBarItems
            icon={<RiComputerLine size={18} color="#fff" />}
            link={<Link to="/projects">Projects</Link>}
            active={isCurrentPage("/projects")}
          />
          <SideBarItems
            icon={<AiOutlineUser size={18} color="#fff" />}
            link={<Link to="/about">About</Link>}
            active={isCurrentPage("/about")}
          />
          <SideBarItems
            icon={<AiOutlineMail size={18} color="#fff" />}
            link={<Link to="/contact">Contact</Link>}
            active={isCurrentPage("/contact")}
          />
        </SideBarMobile>
      </aside>
    </div>
  );
}
