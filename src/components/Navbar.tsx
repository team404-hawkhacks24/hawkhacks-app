"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { curo } from "../../public/images";
import { cn } from "../../utils/cn";
import { NearContext } from "../context";

const Navbar = ({
  className,
  navItems,
}: {
  className?: string;
  navItems: {
    name: string;
    link: string;
  }[];
}) => {
  const { signedAccountId, wallet } = useContext(NearContext);
  const [action, setAction] = useState<any>();
  const [label, setLabel] = useState("Loading...");

  useEffect(() => {
    if (!wallet) return;

    if (signedAccountId) {
      setAction(() => wallet.signOut);
      setLabel(`Logout ${signedAccountId}`);
    } else {
      setAction(() => wallet.signIn);
      setLabel("Login");
    }
  }, [signedAccountId, wallet]);

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-xl mx-auto px-5 sm:px-0 z-[11]",
        className
      )}
    >
      <nav className="w-full relative rounded-full border border-white/20 backdrop-filter backdrop-blur-lg shadow-input flex justify-center space-x-5 px-3 py-3 sm:py-4 ">
        <Link href="/" className="flex items-center pl-1 lg:mr-12">
          <Image src={curo} className="w-24" alt="" />
        </Link>
        {navItems.map(
          (
            navItem: {
              name: string;
              link: string;
            },
            id: number
          ) => (
            <Link
              key={`link-${id}`}
              href={navItem.link}
              className={cn(
                "relative text-neutral-50 items-center flex space-x-1 dark:hover:text-neutral-300 hover:underline"
              )}
            >
              {navItem.name}
            </Link>
          )
        )}

        <span className="flex items-center lg:ml-12 lg:pl-12">
          <button onClick={action} className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] px-[0.9px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex shimmer-animation hover:opacity-75 transition-opacity h-full w-full cursor-pointer items-center justify-center rounded-full bg-transparent  px-6 py-1 text-sm font-medium text-white backdrop-blur-xl">
              {label}
            </span>
          </button>
        </span>
      </nav>
    </div>
  );
};

export default Navbar;
