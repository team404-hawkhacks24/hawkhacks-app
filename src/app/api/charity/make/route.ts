import axios from "axios";

export async function POST(request: Request) {
    const formData = await request.json()
    
    const response = await axios.post('https://us-east-2.aws.neurelo.com/rest/users/__one', {
      email: formData.walletId.split(".")[0],
      name: formData.walletId.split(".")[0],
      type: "donor",
      user_walletId: formData.walletId,
      verified: true,
       
    }, {
        headers: {
          "X-API-KEY": process.env.NEXT_PUBLIC_NEURELO_KEY
        }
      })
    const data = await response.data
    
      return Response.json(data)
  }

