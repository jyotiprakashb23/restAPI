const Product = require("../models/products")

const getAllProducts = async (req,res)=>{
    // an empty curly braces for retrieve all the datas
    // const data = await Product.find({})
    // res.status(200).json( {data} )

    const {  category,select } = req.query;
    const queryObject = {};

    if (category) {
        queryObject.category = category;
    }

    const data = await Product.find( queryObject )
    res.status(200).json( {data} )

}

const getAllProductsTesting = async (req,res)=>{
    const data = await Product.find({}).select("title")
    res.status(200).json( {data} )
}

module.exports = {getAllProducts,getAllProductsTesting}