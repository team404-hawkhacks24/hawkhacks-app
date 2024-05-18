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
        "fixed top-10 inset-x-0 max-w-xl mx-auto px-5 sm:px-0 z-50",
        className
      )}
    >
      <nav className="w-full relative rounded-full border border-white/20 backdrop-filter backdrop-blur-lg shadow-input flex justify-center space-x-5 px-3 py-3 sm:py-4 ">
        <Link href="/" className="flex items-center pl-1 lg:mr-12">
          {/* <span className={cn("text-xl font-bold text-white   ", bungee.className)}>CURO</span> */}
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
        <div className="container-fluid">
          <Link href="/" passHref legacyBehavior>
            hi
          </Link>
          <div className="navbar-nav pt-1">
            <button className="btn btn-secondary" onClick={action}>
              {label}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
