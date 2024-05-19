import axios from "axios";



export async function GET(){
    return Response.json("Hi")
}

export async function POST(request: Request) {
    const formData = await request.json()
    
    const response = await axios.post('https://us-east-2.aws.neurelo.com/rest/feedbackForm/__one', {
      feedback_type: formData.type,
      feedback_id: "real",
      message: formData.feedback,
      user_email: formData.email,
        username: `${formData.firstName} ${formData.lastName}`,
        rating: 5,
        timestamp: Date.now().toString()
    }, {
        headers: {
          "X-API-KEY": process.env.NEXT_PUBLIC_NEURELO_KEY
        }
      })
    const data = await response.data
    
      return Response.json(data)
  }

