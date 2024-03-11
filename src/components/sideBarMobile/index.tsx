import logo from "../../assets/logo.svg";
import { TbChevronLeftPipe, TbChevronRightPipe } from "react-icons/tb";
import profilePic from "../../assets/profilePic.png";
import { createContext, useContext, useState } from "react";

const SideBarContext = createContext({} as any);

export function SideBarMobile({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <nav className="h-dvh w-[90%] flex flex-col bg-[#171717] shadow-2xl">
      <div className="p-4 pb-2 flex justify-between items-center">
        <img
          src={logo}
          alt="Logo"
          className={`overflow-hidden transition-all ${
            expanded ? "w-28" : "w-0"
          }`}
        />
        <button onClick={() => setExpanded((curr) => !curr)}>
          {expanded ? (
            <TbChevronLeftPipe size={24} color="#fff" />
          ) : (
            <TbChevronRightPipe size={24} color="#fff" />
          )}
        </button>
      </div>

      <SideBarContext.Provider value={{ expanded, setExpanded }}>
        <ul className="flex-1 px-3">{children}</ul>
      </SideBarContext.Provider>

      <div className="border-t border-gray-700 flex p-3">
        <img src={profilePic} alt="Profile picture" className="w-10 h-10" />
        <div
          className={`flex justify-between items-center overflow-hidden transition-all  ${
            expanded ? "w-52 ml-3" : "w-0 h-0"
          }`}
        >
          <div className="leading-3">
            <h4 className="text-white text-sm font-bold">Jeferson Luís</h4>
            <span className="text-xs text-gray-300">Full-Stack Developer</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function SideBarItems({
  icon,
  link,
  active,
}: {
  icon: React.ReactNode;
  link: React.ReactNode;
  active: boolean;
}) {
  const { expanded, setExpanded } = useContext(SideBarContext);

  const general =
    "flex relative my-5 rounded-md transition-colors px-2 py-2 font-medium cursor-pointer items-center";
  const current =
    "flex relative my-5 rounded-md transition-colors px-2 py-2 font-medium cursor-pointer items-center bg-[#A611DA]";

  return (
    <li
      onClick={() => setExpanded((curr: boolean) => !curr)}
      className={active ? current : general}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all  ${
          expanded ? "w-full ml-5" : "w-0"
        }`}
      >
        {link}
      </span>
    </li>
  );
}
