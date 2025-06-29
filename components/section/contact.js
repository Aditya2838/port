import { FaDiscord, FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from 'react-icons/fa';
import toast from "react-hot-toast";
import Confetti from "react-dom-confetti";
import { useState } from "react";
import Waypoints from "../dust/waypoints";

export default function Contact() {
    const [explode, setExplode] = useState();

    const confettiConfig = {
      angle: 90,
      spread: 360,
      startVelocity: 40,
      elementCount: 70,
      dragFriction: 0.12,
      duration: 3000,
      stagger: 3,
      width: "10px",
      height: "10px",
      perspective: "500px",
      colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
    };

    const formSubmit = async(e) => {
        e.preventDefault();
        var d = document.getElementById("contactFormSubmit");
        d.innerHTML = "Sending...";
        d.classList.add("btn-disabled");
        d.classList.add("loading");
        
        try {
          // Prepare form data for Google Sheets
          const formData = new FormData();
          formData.append('Name', e.target.from.value);
          formData.append('Email', e.target.email.value);
          formData.append('Message', e.target.msg.value);
          formData.append('Timestamp', new Date().toLocaleString());

          // Replace with your Google Apps Script Web App URL
          const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxbiBh0GyZH1e7_zMbZD9HzCZ1Mau-_7zZpMq9EIauGKdHLytVLgD_oHcAlViDddHJMPw/exec';
          
          const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            body: formData
          });

          if (response.ok) {
            toast.success("Message sent successfully!");
            setExplode(!explode);
            setTimeout(() => setExplode(false), 1000);
            
            // Reset form
            e.target.reset();
          } else {
            throw new Error('Failed to send message');
          }
          
        } catch (error) {
          console.error('Error:', error);
          toast.error("Failed to send message. Please try again.");
        } finally {
          d.innerHTML = "Send Message";
          d.classList.remove("btn-disabled");
          d.classList.remove("loading");
        }
    }

    return (
      <>
        {/* Contact Starts */}

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
        <div className="px-6 bg-[#e3f2fd]">
          <Waypoints target={'tocontact'}>
            <section id="contact" className="pt-28">
              <h1
                className="text-2xl font-bold text-center text-gray-900"
                data-aos="fade-up"
              >{`Get in Touch`}</h1>
              <div className="flex justify-center">
                <div
                  className="bg-[#6C63FF] w-[150px] h-[5px]"
                  data-aos="fade-up"
                  data-aos-delay="400"
                ></div>
              </div>
              <div className="max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto text-gray-900">
                <div className="flex flex-col justify-between">
                  <div>
                    <div>
                      <h2
                        className="text-2xl font-bold mt-10"
                        data-aos="fade-right"
                      >
                        <FaLinkedin className="fill-indigo-500 inline-block" />{" "}
                        linkedin
                      </h2>
                      <div
                        className="bg-[#6C63FF] w-[120px] h-[5px]"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                      ></div>

                        <li className="mt-2">
    <a
      href="https://www.linkedin.com/in/kaveti-aditya/"
      target="_blank"
      rel="noopener noreferrer"
      className=" hover:underline"
    >
      LinkedIn - Kaveti Aditya
    </a>
  </li>
                    </div>

                    <div>
                      <h2
                        className="text-2xl font-bold mt-10"
                        data-aos="fade-right"
                      >
                        <FaEnvelope className="fill-indigo-500 inline-block" />{" "}
                        Email
                      </h2>
                      <div
                        className="bg-[#6C63FF] w-[120px] h-[5px]"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                      ></div>

                      <ul className="list-disc ml-5 mt-1">
                        <li>
                          <a
                            href="mailto:akditya0937@gmail.com"
                            className="hover:text-indigo-500"
                          >
                            akditya0937@gmail.com
                          </a>{" "}
                          (main)
                        </li>
                        <li>
                          <a
                            href="mailto:contact@ak.my.id"
                            className="hover:text-indigo-500"
                          >
                            contact@ak.my.id
                          </a>{" "}
                          (second)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <form id="contactForm" onSubmit={formSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="uppercase text-sm font-bold">
                          Name
                        </span>
                        <input
                          className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                          type="text"
                          placeholder="your name"
                          name="from"
                          required
                        />
                      </div>
                      <div>
                        <span className="uppercase text-sm font-bold">
                          Email
                        </span>
                        <input
                          className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                          type="email"
                          placeholder="your@email.com"
                          name="email"
                          required
                        />
                      </div>
                    </div>

                    <div className="mt-8">
                      <span className="uppercase text-sm font-bold">
                        Message
                      </span>
                      <textarea
                        className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        placeholder="type something... has 1024 max length..."
                        name="msg"
                        maxLength={1024}
                        required
                      ></textarea>
                    </div>
                    <div className="mt-8">
                      <button
                        className="uppercase text-sm font-bold btn btn-block btn-primary"
                        id="contactFormSubmit"
                        type="submit"
                      >
                        Send Message
                      </button>
                      <div className="flex justify-center">
                        <Confetti active={explode} config={confettiConfig} />
                      </div>
                    </div>
                  </form>
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
            d="M0,64L48,96C96,128,192,192,288,224C384,256,480,256,576,218.7C672,181,768,107,864,112C960,117,1056,203,1152,224C1248,245,1344,203,1392,181.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>

        {/* Contact Ends */}
      </>
    );
}