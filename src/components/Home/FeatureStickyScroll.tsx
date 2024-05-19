"use client";
import { smartContract, transparent } from "@/public/images";
import Image from "next/image";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

const content = [
  {
    title: "Transparency in Donating Money",
    description:
      "With our blockchain-based decentralized donating system, every transaction is transparent and publicly verifiable. Donors can track their contributions from start to finish, ensuring that funds are used as intended. Our platform leverages the power of blockchain technology to provide an unparalleled level of accountability and trust, making sure your donations make a real impact. ",
    content: (
      <Image src={transparent} alt="Transparency" className=""/>
    ),
  },
  {
    title: "Smart Contracts for Safe and Automated Donations",
    description:
      "Utilize smart contracts to automate your donations. Set conditions and schedules for your contributions, and let the technology handle the rest. This ensures that funds are released automatically when specific criteria are met, providing efficiency and reducing the need for manual intervention.",
    content: (

      <div className="flex justify-center items-center h-full">
        <Image
          src={smartContract}
          
          className="max-w-40"
          alt="linear board demo"
        />
      </div>
      
        
      
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Community Governance",
    description:
      "Participate in the governance of the platform through a decentralized decision-making process. Stakeholders, including donors and recipients, can vote on important matters, ensuring that the platform evolves according to the community’s needs and values.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
export function StickyScrollReveal() {
  return (
    <div className="no-scrollbar">
      <StickyScroll content={content} />
    </div>
  );
}
