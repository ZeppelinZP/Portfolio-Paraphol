import React from "react";
import NavLinks from "./NavLinks";
import Logo from "./Logo";

import { BsFolder2Open } from "react-icons/bs";

import Link from "next/link";

const MainNav = () => {
  return (
    <nav className="w-full pt-16">
      <div className="flex flex-col h-full items-center justify-between">
        <Logo />
        <NavLinks containerStyles="flex flex-col gap-6" />
        <Link href="/work" className="btn btn-lg btn-tertiary mb-16">
          <div className="flex items-center gap-3">
            <span>View Projects</span>
            <BsFolder2Open className="text-xl" />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default MainNav;
