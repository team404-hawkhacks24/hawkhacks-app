import axios from "axios";

export async function GET(){
    const response = await axios.get(
        "https://us-east-2.aws.neurelo.com/rest/campaignsCollection",
        {
          headers: {
            "X-API-KEY": process.env.NEXT_PUBLIC_NEURELO_KEY,
          },
        }
      );
    
      const data = response.data.data;
    return Response.json(data)
}