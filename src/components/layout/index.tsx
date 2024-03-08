import { Outlet } from "react-router-dom";
import SideBar from "../sideBar";

export default function Layout() {
  return (
    <div className="flex">
      <div className="flex flex-1">
        <SideBar />
      </div>
      <div className="flex-[5]">
        <Outlet />
      </div>
    </div>
  );
}
