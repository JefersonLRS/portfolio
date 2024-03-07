import { Link } from "react-router-dom";
import profilePicture from "../../assets/profilePic.png";
import { AiOutlineHome, AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { RiComputerLine } from "react-icons/ri";

export default function SideBar() {
  return (
    <header className="h-screen w-[20%] bg-[#171717]">
      <div className="w-full flex flex-col justify-center items-center my-4">
        <div>
          <img
            src={profilePicture}
            alt="Foto de perfil"
            className="object-cover"
          />
        </div>
        <div className="text-center mt-2">
          <p className="text-2xl font-bold">Jeferson Luís</p>
          <p className="opacity-60">Full-Stack Developer</p>
        </div>
        <div className="flex flex-col mt-12 gap-7">
          <div>
            <Link
              to="/"
              className="flex items-center gap-6 opacity-60 hover:opacity-100 transition-all duration-300 ease-in-out"
            >
              <AiOutlineHome size={18} color="#fff" />
              <p className="font-medium">Home</p>
            </Link>
          </div>
          <div>
            <Link
              to="/projects"
              className="flex items-center gap-6 opacity-60 hover:opacity-100 transition-all duration-300 ease-in-out"
            >
              <RiComputerLine size={18} color="#fff" />
              <p className="font-medium">Projects</p>
            </Link>
          </div>
          <div>
            <Link
              to="/about"
              className="flex items-center gap-6 opacity-60 hover:opacity-100 transition-all duration-300 ease-in-out"
            >
              <AiOutlineUser size={18} color="#fff" />
              <p className="font-medium">About</p>
            </Link>
          </div>
          <div>
            <Link
              to="/contact"
              className="flex items-center gap-6 opacity-60 hover:opacity-100 transition-all duration-300 ease-in-out"
            >
              <AiOutlineMail size={18} color="#fff" />
              <p className="font-medium">Contact</p>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
