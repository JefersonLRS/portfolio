import profilePicture from "../../assets/profilePic.png";
import logo from "../../assets/logo.svg";

import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { RiComputerLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useState } from "react";

export default function SideBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="bg-[#171717] w-full md:h-screen md:w-[20%]">
      {window.innerWidth > 768 && (
        <div className="w-full flex flex-col justify-center items-center my-4">
          <div>
            <img
              src={profilePicture}
              alt="Foto de perfil"
              className="object-cover w-full"
            />
          </div>
          <div className="text-center mt-2 mb-14">
            <p className="text-2xl font-bold">Jeferson Luís</p>
            <p className="opacity-60">Full-Stack Developer</p>
          </div>
          <div className="flex flex-col justify-center gap-7">
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
      )}
      {window.innerWidth < 768 && (
        <div className="w-full h-20 flex items-center justify-between">
          <div className="px-5">
            <Link to="/" className="cursor-pointer">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="w-[50%] flex justify-end">
            {!isMenuOpen && (
              <div className="cursor-pointer px-5">
                <button onClick={toggleMenu}>
                  <IoMdMenu size={50} />
                </button>
              </div>
            )}
            {isMenuOpen && (
              <div className="cursor-pointer px-5 w-full" onClick={toggleMenu}>
                <IoMdClose size={50} />
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
