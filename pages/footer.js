import React from "react";
import Image from "next/image";
const footer = () => {
  return (
    <>
      <div className="nav-container bg-slate-200  border-4 flex justify-between gap-5 py-2 px-5 font-bold rounded-lg">
        <h1 className="text-2xl font-bold text-italic">
          Get in touch social follow
        </h1>
        <div className=" flex flex-row gap-3">
          <a href="">
            <Image src="/facebook.png" alt="fb" width="40" height="40" />
          </a>
          <a href="">
            <Image src="/github.png" alt="fb" width="40" height="40" />
          </a>
          <a href="">
            <Image src="/twitter.png" alt="fb" width="40" height="40" />
          </a>
          <a href="">
            <Image src="/netlify.png" alt="fb" width="40" height="40" />
          </a>
          <a href="">
            <Image src="/linkedin.png" alt="fb" width="40" height="40" />
          </a>
          <a href="">
            <Image src="/instagram.png" alt="fb" width="40" height="40" />
          </a>
        </div>
      </div>
    </>
  );
};

export default footer;
