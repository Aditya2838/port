import Image from "next/legacy/image";
import { FaHtml5, FaNodeJs, FaAngleRight, FaGithub, FaLaravel } from "react-icons/fa";
import { useState, Fragment } from "react";
import { clsx } from "clsx";
import Waypoints from "../dust/waypoints";

export default function Projects() {
    let gh = "https://github.com/aditya2838";
  let [projects] = useState([
  {
    name: "HireWise - AI Job Portal",
    description:
      "An AI-powered MERN stack job portal featuring resume parsing, job-fit scoring, and intelligent job alerts.",
    isLeft: true,
    link: "/hirewise-ai-job-portal",
    icon: {
      name: FaNodeJs,
      fill: clsx("group-hover:fill-[#689F63]"),
    },
    image: {
      src: "/img/projects/siswa-crud.webp",
      alt: "HireWise AI Portal",
      width: 448,
      height: 148,
    },
  },
  {
    name: "College Event Manager",
    description:
      "Event management system built with HTML, CSS, Bootstrap, and PHP. Helps colleges manage fests and registrations.",
    isLeft: false,
    link: "/college-event-manager",
    icon: {
      name: FaHtml5,
      fill: clsx("group-hover:fill-[#E96228]"),
    },
    image: {
      src: "/img/projects/siswa-crud.webp",
      alt: "College Event System",
      width: 500,
      height: 250,
    },
  },
  {
    name: "NodeHotel",
    description:
      "A simple Node.js + Express.js application that manages hotel bookings with MongoDB and Postman APIs.",
    isLeft: true,
    link: "/nodehotel",
    icon: {
      name: FaNodeJs,
      fill: clsx("group-hover:fill-[#689F63]"),
    },
    image: {
      src: "/img/projects/siswa-crud.webp",
      alt: "NodeHotel App",
      width: 448,
      height: 148,
    },
  },
  {
    name: "BIM Data Extractor",
    description:
      "A Revit API-based desktop tool that extracts BIM object data (walls, doors, etc.) into an SQL database for analysis.",
    isLeft: false,
    link: "/bim-data-extractor",
    icon: {
      name: FaNodeJs,
      fill: clsx("group-hover:fill-[#689F63]"),
    },
    image: {
      src: "/img/projects/siswa-crud.webp",
      alt: "BIM Extractor",
      width: 448,
      height: 148,
    },
  },
  {
    name: "Portfolio Website",
    description:
      "My personal portfolio built using Next.js, Tailwind, and AOS animation – showcasing all my projects and journey.",
    isLeft: true,
    link: "/portfolio-website",
    icon: {
      name: FaHtml5,
      fill: clsx("group-hover:fill-[#E96228]"),
    },
    image: {
      src: "/img/projects/siswa-crud.webp",
      alt: "Portfolio Site",
      width: 448,
      height: 148,
    },
  },
]);
   
    return (
      <>
        {/* Projects Starts */}

        <div className="px-6">
          <Waypoints target={'toprojects'}>
            <section id="projects" className="pt-28">
              <h1 className="text-2xl font-bold text-center" data-aos="fade-up">
                Some of My Projects
              </h1>
              <div className="flex justify-center">
                <span
                  className="bg-[#6C63FF] w-[150px] h-[5px]"
                  data-aos="fade-up"
                  data-aos-delay="400"
                ></span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-4">
                {projects.map(
                  ({ name, description, isLeft, link, icon, image }) => {
                    return (
                      <Fragment key={name}>
                        <div className="flex justify-center">
                          <a
                            className={`group hover:scale-110 ${
                              isLeft ? "hover:rotate-6" : "hover:-rotate-6"
                            } transition delay-75`}
                            href={gh + link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div
                              className="card max-w-md bg-base-100 shadow-xl image-full"
                              data-aos="fade-up"
                            >
                              <figure>
                                <Image {...image} />
                              </figure>
                              <div className="card-body">
                                <h2 className="card-title">
                                  <icon.name
                                    className={`${icon.fill} transition ease-in-out delay-150`}
                                  />
                                  {name}
                                </h2>
                                <p>{description}</p>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div></div>
                        <div></div>
                      </Fragment>
                    );
                  }
                )}
              </div>

              <div className="text-center mt-20">
                <a
                  className="btn btn-wide"
                  href="https://github.com/aditya2838?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="mr-2 w-5 h-5" />
                  View all my Porjects. <FaAngleRight className="ml-2" />
                </a>
              </div>
            </section>
          </Waypoints>
        </div>

        {/* Projects Ends */}
      </>
    );
}