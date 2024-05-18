"use client";

import { useEffect, useState } from "react";

import { HelloNearContract, NetworkId } from "@/src/config";
import { NearContext } from "@/src/context";
import Navbar from "@/src/components/Navbar";
import { Wallet } from "@/src/wallets/near";

const wallet = new Wallet({
  networkId: NetworkId,
  createAccessKeyFor: HelloNearContract,
});

// Layout Component
export default function RootLayout({ children }) {
  const [signedAccountId, setSignedAccountId] = useState("");

  useEffect(() => {
    wallet.startUp(setSignedAccountId);
  }, []);

  return (
    <html lang="en">
      <body>
        <NearContext.Provider value={{ wallet, signedAccountId }}>
          <Navbar
            navItems={[
              {
                name: "Home",
                link: "/",
              },
            ]}
          />
          {children}
        </NearContext.Provider>
      </body>
    </html>
  );
}
