const connectDB = require("./db/connect")
const Product = require("./models/products")
const data = require("./products.json")

uri = "mongodb+srv://jyotiprakashb23:UUrFwCbmOQRYOx8h@cluster0.6f7k01j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const start = async () => {
    try {
        await connectDB(uri);
        await Product.deleteMany();
        await Product.create(data);
        console.log("Success");
    } catch (error) {
        console.log(error);
    }
}

start()