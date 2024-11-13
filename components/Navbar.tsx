"use client"

import React from "react"
import logo from "@/assets/images/futureTech-logo.png"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect, useRef } from "react"
import burger from "@/assets/images/futureTech-burger.png"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

  const node = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    window.addEventListener("resize", () => setIsMobileMenuOpen(false))
  }, [])

  useEffect(() => {
    const closeMobileMenuUponClickingOutside = (e: MouseEvent) => {
      if (!node?.current?.contains(e.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("click", closeMobileMenuUponClickingOutside)
  }, [node])

  const pathname = usePathname()

  return (
    <nav className="flex justify-between container mx-auto items-center pt-8 px-4 md:px-0 font-medium relative">
      <Link href={"/"} className="flex items-center gap-[12.7px]">
        <Image
          priority
          src={logo}
          alt="FutureTech Logo"
          width={50}
          height={50}
          className="object-cover w-full h-auto"
        />
        <h3 className="font-bold text-lg">FutureTech</h3>
      </Link>
      <ul className="hidden md:flex justify-between items-center list-none gap-[30px]">
        <Link
          href={"/"}
          className={`${
            pathname === "/"
              ? "text-white font-semi-bold border border-gray-700 p-[10px] px-5 rounded-xl transition-all duration-500 "
              : "text-[#626262] hover:text-gray-200 transition"
          } text-lg  outline-none `}
        >
          <li>Home</li>
        </Link>
        <Link
          href={"/news"}
          className={`${
            pathname === "/news"
              ? "text-white font-semi-bold border border-gray-700 p-[10px] px-5 rounded-xl transition-all duration-500 "
              : "text-[#626262] hover:text-gray-200 transition"
          } text-lg  outline-none `}
        >
          <li>News</li>
        </Link>
        <Link
          href={"/podcast"}
          className={`${
            pathname === "/podcast"
              ? "text-white font-semi-bold border border-gray-700 p-[10px] px-5 rounded-xl transition-all duration-500 "
              : "text-[#626262] hover:text-gray-200 transition"
          } text-lg  outline-none `}
        >
          <li>Podcasts</li>
        </Link>
        <Link
          href={"/resource"}
          className={`${
            pathname === "/resource"
              ? "text-white font-semi-bold border border-gray-700 p-[10px] px-5 rounded-xl transition-all duration-500 "
              : "text-[#626262] hover:text-gray-200 transition"
          } text-lg  outline-none `}
        >
          <li>Resources</li>
        </Link>
      </ul>
      <Link
        href={"/contact"}
        className="hidden md:block text-black p-[14px] px-5 bg-yellow-500 rounded-xl focus:outline-none font-semibold hover:bg-yellow-400 hover:scale-110 transition-all duration-[0.35s] will-change-transform"
      >
        Contact Us
      </Link>
      <div className="md:hidden" ref={node}>
        <Image
          className="md:hidden cursor-pointer"
          src={burger}
          sizes=""
          width={34}
          height={34}
          alt="Burger-Icon"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        />
        {isMobileMenuOpen && (
          <div className="absolute border-yellow-600 border-2 rounded-xl top-16 right-10 px-10 py-6 transition-all duration-500">
            <ul className="flex flex-col justify-between items-center list-none gap-[30px]">
              <Link
                onClick={() => setIsMobileMenuOpen(false)}
                href={"/"}
                className={`${
                  pathname === "/"
                    ? "text-white font-semi-bold border border-gray-700 p-[10px] px-5 rounded-xl transition-all duration-500 "
                    : "text-[#626262] hover:text-gray-200 transition"
                } text-lg  outline-none `}
              >
                <li>Home</li>
              </Link>
              <Link
                href={"/news"}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`${
                  pathname === "/news"
                    ? "text-white font-semi-bold border border-gray-700 p-[10px] px-5 rounded-xl transition-all duration-500 "
                    : "text-[#626262] hover:text-gray-200 transition"
                } text-lg  outline-none `}
              >
                <li>News</li>
              </Link>
              <Link
                href={"/podcast"}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`${
                  pathname === "/podcast"
                    ? "text-white font-semi-bold border border-gray-700 p-[10px] px-5 rounded-xl transition-all duration-500 "
                    : "text-[#626262] hover:text-gray-200 transition"
                } text-lg  outline-none `}
              >
                <li>Podcasts</li>
              </Link>
              <Link
                href={"/resource"}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`${
                  pathname === "/resource"
                    ? "text-white font-semi-bold border border-gray-700 p-[10px] px-5 rounded-xl transition-all duration-500 "
                    : "text-[#626262] hover:text-gray-200 transition"
                } text-lg  outline-none `}
              >
                <li>Resources</li>
              </Link>
              <Link
                href={"/contact"}
                className={`${
                  pathname === "/contact"
                    ? "text-white font-semi-bold border border-gray-700 p-[10px] px-5 rounded-xl transition-all duration-500"
                    : "text-[#626262] hover:text-gray-200 transition"
                } text-lg  outline-none `}
              >
                <li>Contact Us</li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
