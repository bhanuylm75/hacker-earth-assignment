import express from "express"
import mongoose from "mongoose";
import User from "./models/user.js"
import RentalProperty from "./models/property.js";
import cors from "cors"
import path from 'path';

const app = express();
mongoose.connect("mongodb+srv://bhanuylm01:KlR9eNh0v156JdJA@cluster0.uwjuthw.mongodb.net/")
//app.use(cors());

app.use(express.json())
app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3009, () => {
  console.log("Server running at http://localhost:3009");
});

const xyz="production"

const __dirname1 = path.resolve();

if (xyz === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}


app.get("api/signup/",async (req,res)=>{
  const { name, email, password } = req.body;
  console.log(req.body)
  res.send("pp")

  try{
    const user = await User.create({
      name,
      email,
      password
    })
    res.send(user)
    
  }
  catch(e){
    console.log(e)
  }
})

app.post("/api/signup",async (req,res)=>{
  console.log(req.body)
  const { name, email, password,lastname,phonenumber} = req.body;
  try{
    const user = await User.create({
      name,
      lastname,
      email,
      password,
      phonenumber
    })
    res.json({userid:user.
      _id,
      name:user.name,
      phonenumber:user.phonenumber,
      status:"pass",
      email:user.email
    })

  }
  catch(e){
    console.log(e)
  }
})

app.post("/api/signin",async (req,res)=>{
  console.log(req.body)
  const { email, password } = req.body;
  const user=await User.findOne({email})
  try{
    if(!user){
      res.send("user not found");
     
    }
    if (password !== user?.password){
      res.send('Incorrect Password')
      return
  
    }
    if (user && password === user?.password){
      res.json({userid:user.
        _id,
        name:user.name,
        phonenumber:user.phonenumber,
        status:"pass",
        name:user.name,
        email:user.email
      })
    }
  }
  catch(e){
    console.log(e)
  }
})

app.post("/postproperty",async(req,res)=>{
  const propertyData = req.body;
  try{
    const newProperty = new RentalProperty(propertyData);
    await newProperty.save();
    res.send(newProperty)

  }
  catch(e){
    console.log(e)

  }
})

app.get("/allpro",async (req,res)=>{
  try{
    const properties = await RentalProperty.find();
    res.json(properties);
  }
  catch (err) {
    res.status(500).json({ message: err.message });
  }

})

app.get('/property/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    console.log(userId)
    const properties = await RentalProperty.find({ owner: userId });
    res.json(properties);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


app.get('/filter', async (req, res) => {
  console.log(req.body)
  try {
    const properties = await RentalProperty.find({
      "title": "Charming Bungalow",
      "description": "A charming bungalow with a beautiful garden.",
      "address": "123 Garden Lane",
      "city": "Greenfield",
      "state": "IN",
      "zipCode": "46140",
      "pricePerNight": 120,
      "numBedrooms": 3,
      "numBathrooms": 2,
      "owner":"6651d43a56bc11c1618ea5c6"
    });
    res.json(properties);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


