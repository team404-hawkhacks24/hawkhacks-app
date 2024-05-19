"use client";
import { CarbonNeutral, smartContract, transparent } from "@/public/images";
import Image from "next/image";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

const content = [
  {
    title: "Transparency in Donating Money",
    description:
      "With our blockchain-based decentralized donating system, every transaction is transparent and publicly verifiable. Donors can track their contributions from start to finish, ensuring that funds are used as intended. Our platform leverages the power of blockchain technology to provide an unparalleled level of accountability and trust, making sure your donations make a real impact. ",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-400),var(--white))] flex items-center justify-center text-white">
      <Image src={transparent} alt="Transparency" className="p-11"/>
     </div>
    ),
  },
  {
    title: "Smart Contracts for Safe and Automated Donations",
    description:
      "Utilize smart contracts to automate your donations. Set conditions and schedules for your contributions, and let the technology handle the rest. This ensures that funds are released automatically when specific criteria are met, providing efficiency and reducing the need for manual intervention.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--pink-300),var(--blue-400))] flex items-center justify-center text-white">
        <Image
          src={smartContract}
          
          className="max-w-40"
          alt="linear board demo"
        />
     </div>
      
        
      
    ),
  },
  {
    title: "Carbon Neutral",
    description:
      "This innovative charity platform leverages blockchain technology to facilitate secure and transparent donations for individuals with varying abilities. By utilizing a carbon-neutral blockchain - NEAR, the platform minimizes its environmental impact while empowering supporters to contribute to causes they care about. This fosters a more inclusive and sustainable approach to charitable giving.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--white),var(--green-400))] flex items-center justify-center text-white">
       <Image className="p-16"  src={CarbonNeutral} alt="Carbon Neutral Platform - Curo"/>
      </div>

    ),
  },
  {
    title: "",
    description:
"",    content: (
null
    ),
  },
];
export function StickyScrollReveal() {
  return (
    <div className="no-scrollbar mt-60 md:mt-0">
      <StickyScroll content={content} />
    </div>
  );
}
