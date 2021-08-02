import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import Stripe from "stripe"

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const stripe = new Stripe(process.env.SECRET_KEY);

const port = 3001;


//Create a webhook
app.post("/stripe/webhook",
 express.raw({type:"application/json"}),
 async(request, response)=>{
  const sig = request.headers["stripe-signature"]
  let event;

  try{
    event = Stripe.webhooks.constructEvent(
      request.body,
      sig,
      process.env.END_POINT_SECRET
    );
  }catch(err){
    response.status(400).send(`Webhook Error:${err.message}`);
  }
  switch(event.type){
    case "payment_indent.succeeded":
      const paymentIntent = event.data.object;
      console.log("paymentIntent was successful");
      break
    case "payment_method.attached":
      const paymentMethod = event.data.object;
      console.log("Payment method was attached by customer");
      break
      //handle other event types
    default:
      console.log(`unhandled event type ${event.type}`);
  }
  response.json({recieved:true});
})

//Another end point
app.post("/stripe", async(request,response)=>{
  const {amount} = request.body;
  //shoud never trust the client side amount

  try{
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency:"usd"
    })
    response.status(200).send({
      secret:paymentIntent.client_secret
    })
  }catch(error){
    console.log("Error",error);
    response.status(500).send("error"+ error);
  }
})

app.get("/", (req,res)=>{
  res.send("Hello World");
});

app.listen(port, ()=>{
  console.log("running on" + port);
});
