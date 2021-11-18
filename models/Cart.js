const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
    userID:{
        type:String,

    },
    products:[
        {
            productId: {type: String},
            quantity: {type: Number, default:1}
        }
]

}, {timestamp: true})

exports.module = mongoose.model("Cart", CartSchema)
