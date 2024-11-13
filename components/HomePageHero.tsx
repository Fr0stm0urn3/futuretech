import Image from "next/image"
import follow from "@/assets/images/Icon (11).png"
import person1 from "@/assets/images/Person_1.png"
import person2 from "@/assets/images/Person_2.png"
import person3 from "@/assets/images/Person_3.png"
import person4 from "@/assets/images/Person_4.png"

const HomePageHero = () => {
  return (
    <div className="mt-[150px] mb-[126px] container mx-auto">
      <div className="flex items-center">
        <div className="flex flex-col gap-10">
          <div className="w-[90%]">
            <div className="mb-[100px]">
              <h3 className="text-2xl text-[#626262] font-medium">
                Your Journey to Tomorrow Begins Here
              </h3>
              <h1 className="font-semibold text-5xl my-5 mt-6">
                Explore the Frontiers of Artificial Intelligence
              </h1>
              <p className="text-[#626262] text-lg">
                Welcome to the epicenter of AI innovation. FutureTech AI News is your
                passport to a world where machines think, learn, and reshape the future.
                Join us on this visionary expedition into the heart of AI.
              </p>
            </div>
            <div className="flex justify-between">
              <div>
                <div className="text-3xl font-medium flex items-center">
                  300K{" "}
                  <span className="text-5xl text-yellow-500 mb-2 font-bold ml-0.5">
                    +
                  </span>
                </div>
                <p className="text-[#626262] text-lg">Resources available</p>
              </div>
              <div>
                <div className="text-3xl font-medium flex items-center">
                  12K{" "}
                  <span className="text-5xl text-yellow-500 mb-2 font-bold ml-0.5">
                    +
                  </span>
                </div>
                <p className="text-[#626262] text-lg">Resources available</p>
              </div>
              <div>
                <div className="text-3xl font-medium flex items-center">
                  10K{" "}
                  <span className="text-5xl text-yellow-500 mb-2 font-bold ml-0.5">
                    +
                  </span>
                </div>
                <p className="text-[#626262] text-lg">Resources available</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%]">
          <div className="flex">
            <Image
              priority
              src={person1}
              alt="Link"
              height={50}
              width={50}
              className="object-fit inline rounded-full"
            />
            <Image
              priority
              src={person2}
              alt="Link"
              height={50}
              width={50}
              className="object-fit inline rounded-full -ml-3"
            />
            <Image
              priority
              src={person3}
              alt="Link"
              height={50}
              width={50}
              className="object-fit inline rounded-full -ml-3"
            />
            <Image
              priority
              src={person4}
              alt="Link"
              height={50}
              width={50}
              className="object-fit inline rounded-full -ml-3"
            />
          </div>
          <div className="my-[30px]">
            <h5 className="text-[24px]">Explore 1000+ resources</h5>
            <p className="text-lg text-[#626262] mt-3">
              Over 1,000 articles on emerging tech trends and breakthroughs.
            </p>
          </div>
          <button className="text-lg text-[#626262]">
            Explore Resources{" "}
            <Image
              priority
              src={follow}
              alt="Link"
              height={20}
              width={20}
              className="object-fit inline"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomePageHero
