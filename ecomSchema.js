const mongoose=require("mongoose")
const ImgageSchema=mongoose.Schema({
    pid:Number,
    pname:String,
    pdesc:String,
    pprice:Number,
    pcat:String,
    pimage:String
})
mongoose.model.exports=mongoose.model("products",ImgageSchema)









//ye mere samjhane ke liye hai isme kitne bhi collection bana skte hai
// const mongoose = require("mongoose");

// // Schema for products collection
// const ProductSchema = mongoose.Schema({
//     pid: Number,
//     pname: String,
//     pdesc: String,
//     pprice: Number,
//     pcategory: String,
//     pimage: String
// });

// // Schema for users collection
// const UserSchema = mongoose.Schema({
//     username: String,
//     email: String,
//     password: String,
//     // Add more fields as needed
// });

// // Schema for orders collection
// const OrderSchema = mongoose.Schema({
//     orderDate: Date,
//     products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
//     // Other fields related to orders
// });

// // Create models based on the schemas
// const Product = mongoose.model("Product", ProductSchema);
// const User = mongoose.model("User", UserSchema);
// const Order = mongoose.model("Order", OrderSchema);

// // Export the models if needed
// module.exports = { Product, User, Order };
