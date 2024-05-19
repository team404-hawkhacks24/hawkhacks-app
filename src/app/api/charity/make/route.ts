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
      const donationRes = await axios.post('https://us-east-2.aws.neurelo.com/rest/donations/__one', {
        amount: formData.amount,
        date: Date.now(),
        donor_id: formData.walletId,
        ngo_id: "60d5f9e2d8b5b6e45f1b3c4f",
        smart_contract_info: {
          contract_address: "0x123456789abcdef",
          contract_details: "Smart contract details here"
        },
         
      }, {
          headers: {
            "X-API-KEY": process.env.NEXT_PUBLIC_NEURELO_KEY
          }
        })
    
      return Response.json(data)
  }

