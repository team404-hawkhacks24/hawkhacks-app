"use client";

import { NearContext } from "@/src/context";
import { useContext, useEffect, useState } from "react";

const FilterMyDonations = ({ donationsData }: { donationsData: any }) => {
  const { signedAccountId, wallet } = useContext(NearContext);

  const [donations, setDonations] = useState<any>();
  const [ngoData, setNGOData] = useState<any>()

  

  useEffect(() => {

    let tempData: any = [];
    donationsData.map((donationData: any) => {
      if (donationData.donor_id == signedAccountId) {
        tempData.push(donationData);
        console.log(donationData);
        
      }
    });
    
    setDonations(tempData);
  }, [donationsData]);



  return (
    <div className="rounded-lg bg-slate-600 p-4 mt-10 space-y-5">
        {donations && donations.length == 0 && (
            <p>You currently don't have any donations</p>
        )}
      {donations && donations.map((donation: any) => (
        <div className="flex px-28 justify-between rounded-xl py-5 bg-slate-500">
          <div className="flex  w-8/12 flex-col">
            <div className="flex space-x-3 items-baseline">
              <p className="font-semibold text-xl">{donation.donor_id}</p>
              <p className="text-sm text-white/70">({donation.date})</p>
            </div>
            
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="font-bold text-3xl text-white">
              {donation.amount}{" "}
              <span className="font-thin text-base">NEAR</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilterMyDonations;
