const mongoose = require("mongoose")

uri = "mongodb+srv://jyotiprakashb23:UUrFwCbmOQRYOx8h@cluster0.6f7k01j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = ()=>{
    console.log("connected to data base");
    return mongoose.connect(uri)
};

module.exports = connectDB;