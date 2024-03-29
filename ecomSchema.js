const mongoose=require("mongoose")
const ecomSchema=mongoose.Schema({
    pid:Number,
    pname:String,
    pdesc:String,
    pprice:Number,
    pcat:String,
    pimage:String
})
mongoose.model.exports=mongoose.model("products",ecomSchema)





