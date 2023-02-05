import Link from "next/link";
import NextBreadcrumbs from "../Breadcrumbs/NextBreadcrumbs";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center pb-10">
      <div className="breadcrumb">
        <span className="text-xs tracking-widest flex dark:text-white items-center justify-center gap-2 font-nunito">
          {/* HOME / <span className="font-bold">DASHBOARD</span> */}
          <span className=""> HOME / </span>
          <NextBreadcrumbs />
        </span>
      </div>
      <div className="utilities">
        <span>
          {" "}
          <DarkModeToggle />{" "}
        </span>
        <span>
          <input type="text" placeholder="Search" />
        </span>
      </div>
    </div>
  );
};

export default Topbar;
