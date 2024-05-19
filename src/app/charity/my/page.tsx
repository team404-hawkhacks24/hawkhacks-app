import FilterMyDonations from "@/src/components/Charity/FilterMyDonations";
import axios from "axios";

const MyDonations = async () => {
  const response = await axios.get(
    "https://us-east-2.aws.neurelo.com/rest/donations",
    {
      headers: {
        "X-API-KEY": process.env.NEXT_PUBLIC_NEURELO_KEY,
      },
    }
  );

  const data = response.data.data;  
  return (
    <div className="w-full min-h-screen mt-44 md:max-w-[60vw] mx-auto">
      <div className="w-full px-32">
        <h1 className="text-4xl font-bold text-center">My Donations</h1>
      </div>
      <div className="">
          {/* {
            data.donations.map((donation: any) => (
<div className="flex px-28 justify-between rounded-xl py-5 bg-slate-500">
            <div className="flex w-8/12 space-x-3 items-baseline">
                <p className="font-semibold text-xl">{donation.donor_id}</p>
                <p className="text-sm text-white/70">({donation.timestamp})</p>
            </div>
            <div className="font-bold text-xl text-white">{donation.amount} <span className="font-thin text-sm">NEAR</span></div>
        </div>
            ))
        } */}
        <FilterMyDonations donationsData={data}/>
          
      </div>
    </div>
  );
};

export default MyDonations;
