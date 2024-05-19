"use client";

import { CardHoverEffect } from "@/src/components/Dashboard/Cards";
import { NearContext } from "@/src/context";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

const DashboardPage = () => {
  const { signedAccountId, wallet } = useContext(NearContext);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      if (!signedAccountId) {
        router.push("/");
      }
    }, 1000);
  }, [signedAccountId]);
  return (
    <div className="z-[10] mt-20">
      <div className="flex flex-col items-center pt-28 pb-20 space-y-5 ">
        <span className="flex items-baseline space-x-3">
          <h1 className="font-bold text-4xl">
            Welcome back, {signedAccountId && signedAccountId.split(".")[0]}
          </h1>
          <span> ({signedAccountId && signedAccountId.split(".")[1]})</span>
        </span>
        <p className="mt-10">Dashboard</p>
      </div>
      <CardHoverEffect />
    </div>
  );
};

export default DashboardPage;
