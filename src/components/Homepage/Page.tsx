"use client";
import { wheel } from "@/public/images";
import Image from "next/image";
import { AuroraBackground } from "../ui/AuroraBackground";
import { FlipWords } from "../ui/flip-words";

const Homepage = () => {
  const words = ["Possible", "Impactful", "Sustainable"];
  return (
    <>
      <AuroraBackground>
        <div className="z-[9999] flex md:flex-row w-full md:max-w-[75vw] mx-auto space-x-5">
          <Image src={wheel} className="aspect-square max-w-sm" alt="" />
          <div className="space-y-5 flex flex-col justify-center">
            <span className="text-white text-5xl font-semibold">
              {/* Revolutionizing Charity: <br /> */}
              Building Trust &<br /> Loyalty with Blockchain
              <FlipWords words={words} />
            </span>
            <p className="text-white">
            Secure and Transparent Giving: Empowering Lives Through Disability Support
            </p><div className="\">

            <button className="w-auto font-bold border border-white py-2 px-5 text-white rounded-full hover:text-black hover:bg-white/90">
              Log In
            </button>
            </div>
          </div>

          
        </div>
      </AuroraBackground>
    </>
  );
};

export default Homepage;
