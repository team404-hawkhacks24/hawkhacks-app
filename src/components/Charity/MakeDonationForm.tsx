"use client";

import React, { useContext, useState } from "react";
import { Input } from "../ui/form/input";
import { Label } from "../ui/form/label";

import { NearContext } from "@/src/context";
import { cn } from "@/utils/cn";
import axios from "axios";
import { useRouter } from "next/navigation";



const MakeDonationForm  = ({ orgList}: {
    orgList: string[]
}) => {
    const { signedAccountId, wallet } = useContext(NearContext);
    
    const router = useRouter()
    const [error, setError] = useState("");
    const [org, setOrg] = useState("");
    const [amount, setAmount] = useState("");
    const [submit, setSubmit] = useState(false);


      
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (amount == "") {
        setError("First name can not be empty");
        return;
      } else {
        setError("");
      }
    
      const userData = {
        walletId: signedAccountId,
        org,
        amount
      };

    await axios
      .post("/api/charity/make", userData)
      .then((response) => {
        console.log(response);
        router.push("/dashboard")
      })
      .catch((error) => {
        setError("Something went wrong, please try again later.")
        console.log(error);
      });
  };

    
    return(
        <>
          {submit ? (
       <p>
       Thank you for filling the form, your valuable feedback matters a lot!
     </p>
      ) : (
        <form  className="my-8" action="formFeedback" method="post">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">Your Wallet ID</Label>
            <Input
            value={signedAccountId}
            readOnly
              id="firstname "
              placeholder="Wallet ID"
              type="text"
            />
          </LabelInputContainer>
  
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Select Organization to Donate</Label>
          <select className="bg-zinc-800 p-2 rounded-lg " name="cars" id="cars" onChange={(e) => setOrg(e.target.value)}>
        {orgList.map((shortOrg)=> (
            <option value={shortOrg}>{shortOrg}</option>
        ))}
  </select>
    
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="feedback">Amount</Label>
          <Input
          id="amount"
            placeholder="Amount (in NEAR Tokens)"
            onChange={(e) => setAmount(e.target.value)}
          />
        </LabelInputContainer>
        {error ? <p className="text-red-500 font-bold"> {error} </p> : ""}
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          onClick={handleSubmit}
        >
          Submit &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4"></div>
      </form>
      )}
        </>
    )
}

const BottomGradient = () => {
    return (
      <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      </>
    );
  };
  
  const LabelInputContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
      </div>
    );
  };
  
    


export default MakeDonationForm