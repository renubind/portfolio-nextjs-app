import React from "react";
import Navbar from "../components/Navbar";
import Footer from "./footer";
import ProjectSummery from "../components/Projectsummery";

const project = () => {
  const projectArr = [
    {
      img: "/capture1.png",
      github: "https://github.com/topics/covid-vaccination",
      live: "https://www.netlify.com/",
      readmore:
        "Bring it all together The fastest way to combine your favorite\
       tools and APIs to build the fastest sites, stores, and apps for the web.",
    },

    {
      img: "/Capture.png",
      github: "https://github.com/topics/covid-vaccination",
      live: "https://frontend-mentor-latest-reena.netlify.app/",
      readmore:
        "Bring it all together The fastest way to combine your favorite\
       tools and APIs to build the fastest sites, stores, and apps for the web.",
    },
  ];

  const projectList = projectArr.map((item, index) => (
    <ProjectSummery key={index} data={item} />
  ));

  return (
    <>
      <div className="project-container bg-slate-500 max-w-4xl mx-auto py-2 px-10 h-100 overflow-auto">
        <Navbar />
        <h1>{projectList}</h1>
        <Footer />
      </div>
    </>
  );
};
export default project;
