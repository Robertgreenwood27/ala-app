import React, { useRef, useState } from 'react';
import useOnClickOutside from "./useOnClickOutside";
import Link from "next/link";

const navData = [
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Stylists",
    href: "/stylists",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "FAQs",
    href: "/faqs",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
];

export default function Header() {
  const [isModalOpen, setModalOpen] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setModalOpen(false));

  return (
    <div className="header-container fixed top-0 left-0 w-full bg-black text-zinc-300 p-2 z-50">
      <div className="flex container justify-between items-center font-bold text-2xl px-5 py-6 bg-black text-zinc-300 min-w-full md:flex-row flex-col">
      

        <nav className="hidden md:flex space-x-10 items-center">
          {navData.map((n) => (
            <Link key={n.name} href={n.href} target={n.target} style={{ zIndex: 9999 }}>
              {n.name}
            </Link>
          ))}
        </nav>

        <div className="md:hidden mt-4">
          {isModalOpen ? (
            <div
              ref={ref}
              className="bg-zinc-900 border-[1px] border-red-100/20 fixed right-0 top-0 h-screen transition translate-x-[-1px] rounded-lg text-white w-full md:w-[24rem]"
            >
              <div className="pt-5 pb-6 px-5">
                <button
                  onClick={() => setModalOpen(!isModalOpen)}
                  className="-mr-2 float-right mb-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>

                <div className="mt-[5rem] relative">
                  <nav className="grid gap-y-8">
                    {navData.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-black/20  border-[1px] border-gray-500/60"
                      >
                        <h1 className="my-3 ml-3 text-3xl font-bold ">
                          {item.name}
                        </h1>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          ) : (
            <button onClick={() => setModalOpen(!isModalOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="white"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
