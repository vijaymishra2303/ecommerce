require("./mongoose")
const productSchema=require("./ecomSchema")
const express=require("express")
const app=express()
const multer=require("multer")
const cors=require("cors")
app.use(cors())
app.use(express.json())

app.use(express.static("public"))
const storage=multer.diskStorage({
    destination:(req,resp,cb)=>{
        cb(null,"public/uploads/");
    },
    filename:(req,file,cb)=>{
   cb(null,file.originalname);
    }
});
const upload=multer({storage:storage}).single("pimage");

app.post("/",(req,resp)=>{
    upload(req,resp,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            const newImage=new ImageModel({
                pid:req.body.pid,
                pname:req.body.pname,
                pprice:req.body. pprice,
                pdesc:req.body.pprice,
                pcat:req.body.pcat,
                pimage:"localhost:4000/uploads/"+req.file.filename
            })
            newImage.save()
            resp.send("File Uploaded")
        }
    })
})
app.listen(4000)