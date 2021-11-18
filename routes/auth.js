const router = require ("express").Router();
const User = require ("../models/User")

//REGISTER A NEW USER
//async function: means that the function takes some time before it execute and give results..
// it also does not execute from top to buttom i.e synchronously
router.post("/register", async (req, res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        isAdmin: req.body.isAdmin
    })
    //save and send above inputed data to DB: Bcz it takes some time to save, use async await
    //It could take more time to save due to internet of the user, server etc
    //wait for the new user to be saved and sent to DB
    try{
        const savedUser = await newUser.save();
        //sending saved data to client side
        //200: successful
        //201: Successfully added
        res.status(201).json(savedUser)
        console.log("User successfully saved!")
    }catch(err){
        res.status(500).json(err)
    }


})

module.exports = router ;