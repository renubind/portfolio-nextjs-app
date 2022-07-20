import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="nav-container bg-slate-200 flex justify-between gap-5 my-5  py-2 px-5 font-bold rounded-lg">
      <h1 className="font-sans-serif text-2xl font-700 text-blue-900">
        Reenabind
      </h1>
      <div className=" flex flex-row text-lg gap-5">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/project">
          <a>Project</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
