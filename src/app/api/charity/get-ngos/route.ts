import axios from "axios";


    export async function POST(request: Request) {
        console.log("NGO");
        const formData = await request.json()
        
        console.log(formData);
        
    const response = await axios.get(
        "https://us-east-2.aws.neurelo.com/rest/ngo",
        {
          headers: {
            "X-API-KEY": process.env.NEXT_PUBLIC_NEURELO_KEY,
          },
        }
      );
    
      const data = response.data.data;
    return Response.json("Hi")
}