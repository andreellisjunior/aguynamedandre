import Link from 'next/link';
import NextBreadcrumbs from '../Breadcrumbs/NextBreadcrumbs';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

const Topbar = () => {
  return (
    <div className="flex justify-between items-center pb-8">
      <div className="breadcrumb">
        <span className="text-xs tracking-widest flex dark:text-white items-center justify-center gap-2 font-nunito">
          {/* HOME / <span className="font-bold">DASHBOARD</span> */}
          <span className="relative top-[1.5px]"> HOME / </span>
          <NextBreadcrumbs />
        </span>
      </div>
      <div className="utilities flex items-center">
        <DarkModeToggle />
        <span>
          <input
            type="text"
            placeholder="Search Project"
            className="px-2 py-2 border-[0.5px] rounded-lg text-xs bg-[#01B3FF] bg-opacity-10 w-48 italic"
          />
        </span>
      </div>
    </div>
  );
};

export default Topbar;
