import axios from "axios";
import Link from "next/link";

const CharityList = async () => {
  const response = await axios.get(
    "https://us-east-2.aws.neurelo.com/rest/campaignsCollection",
    {
      headers: {
        "X-API-KEY": process.env.NEXT_PUBLIC_NEURELO_KEY,
      },
    }
  );

  const data = response.data.data;

  return (
    <div className="w-full mt-44 md:max-w-[60vw] mx-auto">
      <div className="flex flex-col items-center">
        <h1 className="text-6xl text-center uppercase font-bold">
          All Charity Events
        </h1>
        <h2 className="text-3xl text-center capitalize font-semibold">
          going around you
        </h2>
      </div>
      {/* <CharityCardlist/> */}
      <div className="px-24 min-h-screen mt-16 space-y-6">
        {data?.map((entry: any) => (
          <Link key={entry.campaign_id} href={`/charity/list/${entry.id}`}>
            <div className="bg-zinc-700 p-6 px-10 space-y-5 rounded-xl shadow-md">
              <span className="flex items-center space-x-5">
                <div className="bg-green-500 h-1 rounded-full p-1.5"></div>
                <h1 className="text-2xl font-semibold">{entry.name}</h1>
              </span>

              <p className="text-gray-400">
                {entry.description}
              </p>
              <div className=" flex space-x-20">
              <p>Goal: {" "}
            <span className="text-blue-500 font-semibold">
            {entry.fundraising_goal}
            </span>
            </p>
          <p>Currently:{" "}
            <span className="text-red-500 font-semibold">

             {entry.current_amount}
            </span>
             </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CharityList;
