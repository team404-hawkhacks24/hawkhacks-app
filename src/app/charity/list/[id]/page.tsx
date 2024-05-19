import { checkmark } from "@/public/images";
import axios from "axios";
import Image from "next/image";

const IndividualCharityPage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const response = await axios.get(
    `https://us-east-2.aws.neurelo.com/rest/campaignsCollection/${params.id}`,
    {
      headers: {
        "X-API-KEY": process.env.NEXT_PUBLIC_NEURELO_KEY,
      },
    }
  );

  const data = response.data.data;
  console.log(data);
  let ngoData: any = {};
  if (data) {
    const ngo_id = data.ngo_id;
    const response = await axios.get(
      `https://us-east-2.aws.neurelo.com/rest/ngo/${ngo_id}`,
      {
        headers: {
          "X-API-KEY": process.env.NEXT_PUBLIC_NEURELO_KEY,
        },
      }
    );
    ngoData = response.data.data;
    console.log(ngoData);
  }

  return (
    <div className="w-full mt-44 min-h-screen md:max-w-[60vw] mx-auto">
      <div className="bg-zinc-700 p-6 px-10 space-y-5 rounded-xl shadow-md">
        <p className="text-white/70"> ID: #{data.campaign_id}</p>
        <div className="flex justify-between">
          <h1 className="text-6xl font-bold">{data.name}</h1>
          <span className="flex flex-col mt-4">
            <div className="">{data.start_date}</div>
            <span className="flex items-center space-x-2 text-white/70">
              <span>Status (Active)</span>
              <div className="bg-green-500 h-1 rounded-full p-1.5"></div>
            </span>
          </span>
        </div>

        <div className=" flex space-x-20 text-lg">
          <p>
            Goal:{" "}
            <span className="text-blue-500 font-semibold">
              {data.fundraising_goal}
            </span>
          </p>
          <p>
            Currently:{" "}
            <span className="text-red-500 font-semibold">
              {data.current_amount}!
            </span>
          </p>
        </div>
        <p className="text-gray-400 text-lg">{data.description}</p>

        <div className="space-y-4 w-full border-t-2 py-8 mt-8">
          <h3 className="text-md font-semibold text-white/80">NGO Details</h3>
          <div className="space-y-2">
            <span className="flex items-center space-x-3">
              <h1 className="text-3xl font-semibold text-white">
                {ngoData.name}
              </h1>
              <span className="">
                <Image className="w-6" src={checkmark} alt="Verified Organization"/>
              </span>
            </span>
            <div className="space-y-3">
                <p>{ngoData.location}</p>
                <p>Rating: {ngoData.score}/10</p>
            </div>
            <p className="text-white/70">{ngoData.description}</p>
          </div>
        </div>
        <div className="space-y-4 w-full border-t-2 py-8 mt-8">
        <h3 className="text-md font-semibold text-white/80">Donation Details</h3>
        {
            data.donations.map((donation: any) => (
<div className="flex px-28 justify-between rounded-xl py-5 bg-slate-500">
            <div className="flex w-8/12 space-x-3 items-baseline">
                <p className="font-semibold text-xl">{donation.donor_id}</p>
                <p className="text-sm text-white/70">({donation.timestamp})</p>
            </div>
            <div className="font-bold text-xl text-white">{donation.amount} <span className="font-thin text-sm">NEAR</span></div>
        </div>
            ))
        }
        
</div>
      </div>
    </div>
  );
};

export default IndividualCharityPage;
