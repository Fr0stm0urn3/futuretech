import Link from "next/link"
import Image from "next/image"
import icon_1 from "@/assets/images/Icon (8).png"
import icon_2 from "@/assets/images/Icon (9).png"
import icon_3 from "@/assets/images/Icon (10).png"
import icon_4 from "@/assets/images/Icon (11).png"

const Footer = () => {
  const currYear = new Date().getFullYear()

  return (
    <footer className="container mx-auto px-4 mb-[40px] text-lg">
      <div className="grid grid-cols-1 gap-10 lg:flex lg:justify-between">
        <div className="w-fit">
          <h4 className="font-bold text-xl mb-8">Home</h4>
          <ul className="flex flex-col gap-5">
            <li className="w-fit text-[#585858] cursor-pointer hover:text-gray-400 hover:scale-105 will-change-transform transform duration-300">
              Features
            </li>
            <li className="w-fit text-[#585858] cursor-pointer hover:text-gray-400 hover:scale-105 will-change-transform transform duration-300">
              Blogs
            </li>
            <li className="w-fit text-[#585858] cursor-pointer hover:text-gray-400 hover:scale-105 will-change-transform transform duration-300">
              Resources{" "}
              <span className="text-xs border border-gray-700 rounded-lg p-1 px-2.5 text-white ml-1.5">
                New
              </span>
            </li>
            <li className="w-fit text-[#585858] cursor-pointer hover:text-gray-400 hover:scale-105 will-change-transform transform duration-300">
              Testimonials
            </li>
            <li className="w-fit text-[#585858] cursor-pointer hover:text-gray-400 hover:scale-105 will-change-transform transform duration-300">
              Contact Us
            </li>
            <li className="w-fit text-[#585858] cursor-pointer hover:text-gray-400 hover:scale-105 will-change-transform transform duration-300">
              Newsletter
            </li>
          </ul>
        </div>
        <div className="w-fit">
          <h4 className="font-bold text-xl mb-8">News</h4>
          <ul className="flex flex-col gap-5">
            <li className="w-fit text-[#585858] cursor-pointer hover:text-gray-400 hover:scale-105 will-change-transform transform duration-300">
              Trending Stories
            </li>
            <li className="w-fit text-[#585858] cursor-pointer hover:text-gray-400 hover:scale-105 will-change-transform transform duration-300">
              Featured Videos
            </li>
            <li className="w-fit text-[#585858] cursor-pointer hover:text-gray-400 hover:scale-105 will-change-transform transform duration-300">
              Technology
            </li>
            <li className="w-fit text-[#585858] cursor-pointer hover:text-gray-400 hover:scale-105 will-change-transform transform duration-300">
              Health
            </li>
            <li className="w-fit text-[#585858] cursor-pointer hover:text-gray-400 hover:scale-105 will-change-transform transform duration-300">
              Politics
            </li>
            <li className="w-fit text-[#585858] cursor-pointer hover:text-gray-400 hover:scale-105 will-change-transform transform duration-300">
              Environment
            </li>
          </ul>
        </div>
        <div className="w-fit">
          <h4 className="font-bold text-xl mb-8">Blogs</h4>
          <ul className="flex flex-col gap-5">
            <li className="w-fit text-[#585858] cursor-pointer hover:text-gray-400 hover:scale-105 will-change-transform transform duration-300">
              Quantum Computing
            </li>
            <li className="w-fit text-[#585858] cursor-pointer hover:text-gray-400 hover:scale-105 will-change-transform transform duration-300">
              AI Ethics
            </li>
            <li className="w-fit text-[#585858] cursor-pointer hover:text-gray-400 hover:scale-105 will-change-transform transform duration-300">
              Space Exploration
            </li>
            <li className="w-fit text-[#585858] cursor-pointer hover:text-gray-400 hover:scale-105 will-change-transform transform duration-300">
              Biotechnology{" "}
              <span className="text-xs border border-gray-700 rounded-lg p-1 px-2.5 text-white ml-1.5">
                New
              </span>
            </li>
            <li className="w-fit text-[#585858] cursor-pointer hover:text-gray-400 hover:scale-105 will-change-transform transform duration-300">
              Renewable Energy
            </li>
            <li className="w-fit text-[#585858] cursor-pointer hover:text-gray-400 hover:scale-105 will-change-transform transform duration-300">
              Biohacking
            </li>
          </ul>
        </div>
        <div className="w-fit">
          <h4 className="font-bold text-xl mb-8">Podcasts</h4>
          <ul className="flex flex-col gap-5">
            <li className="w-fit text-[#585858] cursor-pointer hover:text-gray-400 hover:scale-105 will-change-transform transform duration-300">
              AI Revolution{" "}
              <span className="text-xs border border-gray-700 rounded-lg p-1 px-2.5 text-white ml-1.5">
                New
              </span>
            </li>
            <li className="w-fit text-[#585858] cursor-pointer hover:text-gray-400 hover:scale-105 will-change-transform transform duration-300">
              TechTalk AI
            </li>
            <li className="w-fit text-[#585858] cursor-pointer hover:text-gray-400 hover:scale-105 will-change-transform transform duration-300">
              AI Conversations
            </li>
          </ul>
        </div>
        <div className="w-fit col-span-2 lg:col-span-1 mt-5 lg:mt-0">
          <h4 className="font-bold text-xl mb-8">Resources</h4>
          <ul className="flex lg:flex-col  flex-wrap gap-5">
            <li className="text-[#585858] cursor-pointer hover:text-gray-400 hover:scale-105 will-change-transform transform duration-300 w-fit">
              Whitepapers{" "}
              <Image
                src={icon_4}
                width={18}
                height={18}
                alt="Link"
                className="inline ml-1 object-fit"
              />
            </li>
            <li className="text-[#585858] cursor-pointer hover:text-gray-400 hover:scale-105 will-change-transform transform duration-300 w-fit">
              Ebooks{" "}
              <Image
                src={icon_4}
                width={18}
                height={18}
                alt="Link"
                className="inline ml-1 object-fit"
              />
            </li>
            <li className="text-[#585858] cursor-pointer hover:text-gray-400 hover:scale-105 will-change-transform transform duration-300 w-fit">
              Reports{" "}
              <Image
                src={icon_4}
                width={18}
                height={18}
                alt="Link"
                className="inline ml-1 object-fit"
              />
            </li>
            <li className="text-[#585858] cursor-pointer hover:text-gray-400 hover:scale-105 will-change-transform transform duration-300 w-fit">
              Testimonials{" "}
              <Image
                src={icon_4}
                width={18}
                height={18}
                alt="Link"
                className="inline ml-1 object-fit"
              />
            </li>
            <li className="text-[#585858] cursor-pointer hover:text-gray-400 hover:scale-105 will-change-transform transform duration-300 w-fit">
              Research Papers{" "}
              <Image
                src={icon_4}
                width={18}
                height={18}
                alt="Link"
                className="inline ml-1 object-fit"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-5 lg:justify-between lg:flex-row items-center mt-[80px]">
        <div className="gap-5 flex lg:hidden">
          <Link target="_blank" href={"https://x.com"}>
            <Image
              priority
              alt="Icon"
              src={icon_1}
              width={24}
              height={24}
              className="hover:scale-110 transition duration-[0.4s] will-change-transform"
            />
          </Link>
          <Link target="_blank" href={"https://www.figma.com/"}>
            <Image
              priority
              alt="Icon"
              src={icon_2}
              width={24}
              height={24}
              className="hover:scale-110 transition duration-[0.4s] will-change-transform"
            />
          </Link>
          <Link target="_blank" href={"https://www.linkedin.com/"}>
            <Image
              priority
              alt="Icon"
              src={icon_3}
              width={24}
              height={24}
              className="hover:scale-110 transition duration-[0.4s] will-change-transform"
            />
          </Link>
        </div>
        <div className="flex gap-[22px]">
          <h4 className="text-[#585858] cursor-pointer hover:text-gray-400 hover:scale-105 will-change-transform transform duration-300">
            Terms & Conditions
          </h4>
          <h4 className="text-[#585858] cursor-pointer hover:text-gray-400 hover:scale-105 will-change-transform transform duration-300">
            Privacy Policy
          </h4>
        </div>
        <div className="gap-5 hidden lg:flex">
          <Link target="_blank" href={"https://x.com"}>
            <Image
              priority
              alt="Icon"
              src={icon_1}
              width={24}
              height={24}
              className="hover:scale-110 transition duration-[0.4s] will-change-transform"
            />
          </Link>
          <Link target="_blank" href={"https://www.figma.com/"}>
            <Image
              priority
              alt="Icon"
              src={icon_2}
              width={24}
              height={24}
              className="hover:scale-110 transition duration-[0.4s] will-change-transform"
            />
          </Link>
          <Link target="_blank" href={"https://www.linkedin.com/"}>
            <Image
              priority
              alt="Icon"
              src={icon_3}
              width={24}
              height={24}
              className="hover:scale-110 transition duration-[0.4s] will-change-transform"
            />
          </Link>
        </div>
        <div className="text-[#585858] text-[18px]">
          &copy; {currYear} FutureTech. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
