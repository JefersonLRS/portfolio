import { Outlet } from "react-router-dom";
import SideBar from "../sideBar";

export default function Layout() {
  return (
    <div className="md:flex">
      <SideBar />
      <div className="md:flex flex-1">
        <Outlet />
      </div>
    </div>
  );
}
