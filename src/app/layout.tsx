"use client";

import "@/src/app/globals.css";
import Navbar from "@/src/components/Navbar";
import { HelloNearContract, NetworkId } from "@/src/config";
import { NearContext } from "@/src/context";
import { Wallet } from "@/src/wallets/near";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";


const wallet = new Wallet({
  networkId: NetworkId,
  createAccessKeyFor: HelloNearContract,
});

// Layout Component
export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  const [signedAccountId, setSignedAccountId] = useState("");

  useEffect(() => {
    wallet.startUp(setSignedAccountId);
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <NearContext.Provider value={{ wallet, signedAccountId }}>
          <Navbar
            navItems={[
              {
                name: "Home",
                link: "/",
              },
              {
                name: "Dashboard",
                link: "/dashboard"
              },
              {
                name: "Feeback",
                link: "/feedback"
              }
            ]}
          />
          {children}
          <Footer/>
        </NearContext.Provider>
      </body>
    </html>
  );
}
