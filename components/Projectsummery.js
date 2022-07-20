import React from "react";
import Image from "next/image";

const ProjectSummery = ({ data }) => {
  return (
    <>
      <div className=" h-100 mx-auto border-4 my-10 gap-5 py-10 px-10  rounded-lg">
        <div className="contact-container  flex flex-row gap-10 ">
          <div className="w-1/2 flex flex-row border-2">
            <Image src={data.img} alt="imag" width={500} height={250} />
          </div>
          <div className="w-1/2">
            <hi className="font-bold text-xl">Discription</hi>
            <p>{data.readmore}</p>
          </div>
        </div>
        <div className="flex flex-row justify-end  gap-5 ">
          <a
            className="border-2 bg-red-700 text-white py-3 px-3 rounded-lg"
            href={data.github}
          >
            github
          </a>
          <a
            className="border-2 bg-green-700 text-white py-3 px-3 rounded-lg"
            href={data.live}
          >
            Live view
          </a>
          <a
            className="border-2 bg-blue-700 text-white py-3 px-3 rounded-lg"
            href={data.readmore}
          >
            Read more..
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectSummery;
