//importing the dependencies
const express = require ("express");
const mongoose = require ("mongoose");
const dotenv = require("dotenv");
const CryptoJS = require("crypto-js")
//importing the user route
const userRoute = require ("./routes/user");
const authRoute = require ("./routes/auth")

//using the dependeincies
const app = express();

//configure dotenc
dotenv.config();

//connecting to DB
mongoose.connect(process.env.MONGOOSE_URL)
    .then(() => console.log("DB Connection Successful!"))
    .catch((err) => console.log(err))

//To allow the application accept json as a request
app.use(express.json());

//Using the routes from the routes folder
app.use ("/api/users", userRoute)
app.use ("/api/auth", authRoute)


//Express server
app.listen(process.env.PORT, ()=>{
    console.log("SUCCESSFUL: Backend Server is running!!");
})








