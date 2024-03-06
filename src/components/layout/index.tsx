import { Outlet } from "react-router-dom";
import SideBar from "../sideBar";

export default function Layout() {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-1">
        <Outlet />
      </div>
    </div>
  );
}
