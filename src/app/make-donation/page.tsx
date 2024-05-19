import MakeDonationForm from "@/src/components/Charity/MakeDonationForm";
import axios from "axios";



export default async function MakeDonationPage() {

    const response = await axios.get(
        `https://us-east-2.aws.neurelo.com/rest/ngo`,
        {
          headers: {
            "X-API-KEY": process.env.NEXT_PUBLIC_NEURELO_KEY,
          },
        }
      );
    
      const data = response.data.data;
    let orgList:string[] = []
    
    data.map((ngo: any) => {
        orgList.push(`${ngo.name} - ${ngo.location}`)
    })
    
  return (
    <div className="w-full mt-44 min-h-screen md:max-w-[60vw] mx-auto">
      <div className="max-w-xl w-full mx-auto mt-40 rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <div className="border border-t-0 p-4 border-white/30 rounded-xl">
        <h2 className="font-bold text-center text-4xl text-neutral-800 dark:text-neutral-200">
          Donate Now
        </h2>
        <MakeDonationForm orgList={orgList} />
        </div>
      </div>
    </div>
  );
}
