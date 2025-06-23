import { FaGithub, FaFacebook, FaYoutube, FaInstagram, FaNpm } from "react-icons/fa";
import { useState, Fragment } from "react";
import { clsx } from "clsx";

export default function Social({ type }) {
    let [social] = useState([
      {
        href: "https://github.com/Aditya2838",
        icon: {
          icon: FaGithub,
          fill: clsx('hover:fill-black')
        },
      },
      {
        href: "https://github.com/Aditya2838",
        icon: {
          icon: FaFacebook,
          fill: clsx('hover:fill-brand-fb')
        },
      },
      {
        href: "https://github.com/Aditya2838",
        icon: {
          icon: FaYoutube,
          fill: clsx("hover:fill-red-500"),
        },
      },
      {
        href: "https://github.com/Aditya2838",
        icon: {
          icon: FaInstagram,
          fill: clsx("hover:fill-[url(#instagram-gradient)]"),
        },
      },
      {
        href: "/npm",
        icon: {
          icon: FaNpm,
          fill: clsx('hover:fill-red-500'),
        },
      },
    ]);

    return (
      <>
        <div
          className={`flex text-2xl text-gray-500 ${
            type === "footer"
              ? "space-x-4 ml-2 md:space-x-6"
              : "space-x-7 mt-2 text-center md:text-left"
          }`}
        >
          {social.map(({ href, icon }) => {
            return (
              <Fragment key={href}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <icon.icon
                    className={`${icon.fill} transition delay-150`}
                  />
                </a>
              </Fragment>
            );
          })}
        </div>
      </>
    );
}