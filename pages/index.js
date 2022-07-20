import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "./footer";
Image;
export default function Home() {
  return (
    <>
      <div className="containter bg-slate-500 max-w-4xl mx-auto text-black-800 py-2 px-10 h-90 overflow-hidden ">
        <Navbar />

        <div className="home-container mx-auto border-4   my-10 flex justify-between gap-5 py-2 px-5 font-bold rounded-lg">
          <div className="flex flex-col justify-center items-center object-cover rounded-full  w-1/2">
            <Image src="/user.png" alt="user" width={200} height={200} />
            <a
              className="text-white font-bold"
              href="https://drive.google.com/file/d/1l0Cst6bBiCUUsxNKdzKqTK5JXLAFELvd/view?usp=sharing"
            >
              view resume
            </a>
          </div>
          <div className=" w-1/2 py-5">
            <p>
              I am Reena from Nagpur. I completed my bachelors degree in the
              stream of computer science engineering in NIT engineering college.
              It is located in Nagpur-MH. I did my schooling in corporation
              D.A.K.V higher secondary school and I got 60 %. After completing
              my graduation, I joined in Phenix technology pvt.ltd and in that
              company work as trainee software developer. Then I joined as staff
              trainee in roots industries and here I worked in the production
              department and I learned the process of building, how the design
              is software websites from raw material to final to customer. My
              hobbies are listening to songs, travelling to new places and
              playing badminton. My Strengths, I am a hard worker, a quick
              learner and easy to understand. Coming to my weakness, as now I
              dont have any weaknesses in future if I get any weaknesses and I
              am sure that it will not affect my professional life.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
