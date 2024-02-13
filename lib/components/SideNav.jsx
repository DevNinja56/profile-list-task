import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { sideNavData } from "../utils/side-nav-data";

const SideNav = () => {
  const router = useRouter();
  return (
    <nav className="bg-white h-screen min-w-[300px] max-w-[300px]">
      <ul className="mt-5">
        {sideNavData.map(({ name, href, Icon }, index) => (
          <li key={index} className="w-full">
            <Link
              href={href}
              className={`px-5 py-3 flex items-center gap-1 navLink  ${
                router.pathname.includes(href)
                  ? "bg-[#4360b50e] text-[#435FB5] active"
                  : "text-[#797979]"
              }`}
            >
              <span>{Icon}</span>
              <span>{name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;
