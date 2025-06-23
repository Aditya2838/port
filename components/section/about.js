import Image from "next/image";
import sAge from "s-age";
import { useState, useEffect } from "react";
import Waypoints from "../dust/waypoints";

export default function About() {
  let umur = sAge("Aug 20 2003");
  let [gh, setGh] = useState({});
  useEffect(() => {
    (async() => {
      try {
        const res = await fetch("https://api.github.com/users/JastinXyz");
        const data = await res.json();
        setGh(data);
      } catch {
        setGh({ public_repos: "several" })
      }
    })()
  }, [])

  return (
    <>
      {/* About Starts */}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        fill="#e3f2fd"
      >
        <path
          fillOpacity={1}
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-[#e3f2fd] px-6">
        <Waypoints target={'toabout'}>
          <section id="about" className="text-black py-20">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex justify-center md:mb-0 mb-20 py-5">
                <Image
                  className="z-50"
                  src="/img/about.svg"
                  alt="about me"
                  width={200}
                  height={200}
                  data-aos="fade-up-right"
                />
                <Image
                  src="/img/blob/2.svg"
                  className="mt-5 md:mt-20 absolute"
                  alt="blob"
                  width={350}
                  height={350}
                  data-aos="fade-up-right"
                  data-aos-duration="1500"
                />
              </div>
              <div className="ml-10 mr-10 pt-10">
                <h1 className="text-3xl font-bold leading-9" data-aos="fade-up">
                  About Me
                </h1>
                <div
                  className="bg-[#6C63FF] w-[150px] h-[5px]"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                ></div>
                <p className="mt-2">
  {`I live in Hyderabad, India. My full name is Kaveti Aditya, but you can just call me Aditya. I'm ${umur} years old and currently pursuing a Bachelor's degree in Electronics and Computer Engineering. I’ve been exploring the world of programming since 2020, and I'm well-versed in HTML, CSS, JavaScript, and various modern web frameworks & backend technologies.`}
</p>
<p className="mt-5">
  A little throwback — I initially leaned towards backend development, enjoying the logic and data handling. But once I dove into frontend frameworks like React and Next.js, I found a passion for building sleek, responsive UIs. Right now, I’m deepening my skills in Java, Spring Boot, and full-stack engineering to become deployment-ready for real-world enterprise applications.
</p>
<p className="mt-5">
  On the side, I’ve built{" "}
  <span className="font-bold">{gh.public_repos}</span> public repositories on GitHub — ranging from web templates to end-to-end MERN stack projects and utility packages. While some of these are still in progress (thanks to the never-ending hustle of academics and internship work), they reflect my curiosity, dedication, and hands-on approach to learning.
</p>

                {/* <div class="tooltip tooltip-open tooltip-right mt-5" data-tip={`${gh.followers} Followers, ${gh.following} Following`}>
                <button class="btn"><FaGithub className="mr-2 w-5 h-5" /> Github</button>
              </div> */}
              </div>
            </div>
          </section>
        </Waypoints>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        fill="#e3f2fd"
      >
        <path
          fillOpacity={1}
          d="M0,160L40,138.7C80,117,160,75,240,64C320,53,400,75,480,106.7C560,139,640,181,720,197.3C800,213,880,203,960,170.7C1040,139,1120,85,1200,80C1280,75,1360,117,1400,138.7L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>

      {/* About Ends */}
    </>
  );
}