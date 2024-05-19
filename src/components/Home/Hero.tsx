"use client";
import { wheel } from "@/public/images";
import { NearContext } from "@/src/context";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { AuroraBackground } from "../ui/AuroraBackground";
import { FlipWords } from "../ui/flip-words";


const Homepage = () => {
  const { signedAccountId, wallet } = useContext(NearContext);
  const [action, setAction] = useState<any>();
  const [label, setLabel] = useState<any>();
  const router = useRouter()

  const navigateToDonate = () => {
    router.push("/make-donation")
  }

  useEffect(() => {
    if (!wallet) return;

    if (signedAccountId) {
      setLabel("Donate Now");
      setAction(() => navigateToDonate);
    } else {
      setAction(() => wallet.signIn);
      setLabel("Login");
    }
  }, [signedAccountId, wallet]);

  const words = ["Possible", "Impactful", "Sustainable"];
  return (
    <>
      <AuroraBackground>
        <div className="z-[10] flex flex-col mt-52 md:mt-0 md:flex-row w-full md:max-w-[80vw] mx-auto space-x-5">
          <Image src={wheel} className="aspect-square max-w-sm p-0" alt="Disable person getting help through our Curo platform build on top of NEAR " />
          <div className="space-y-5 flex flex-col justify-center">
            <span className="text-white text-2xl md:text-5xl font-semibold">
              Building Trust &<br /> Loyalty with Blockchain
              <FlipWords words={words} />
            </span>
            <p className="text-white/80">
              Secure and Transparent Giving: Empowering Lives Through Disability
              Support
            </p>
            <div className="\">
              <button onClick={action} className="w-auto mt-3 font-bold border border-white py-2 px-5 text-white rounded-full hover:text-black hover:bg-white/90">
                {label || "Login"}
              </button>
            </div>
          </div>
        </div>
      </AuroraBackground>
    </>
  );
};

export default Homepage;
