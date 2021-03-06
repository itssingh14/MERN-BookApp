const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        name : {type : String, required : true},
        author : {type : String, required : true},
        ratings : {type : Number, required : true},
        genre : {type : String, require : true},
        description : {type : String, required : true},
        price : {type : Number, required : true},
        productImage : {type : String, required : true},
        productCode : {type : Number, required : true, unique : true},
        inStock : {type : Boolean, required : false, default : true},

    },
    {timestamps : true}
)

const Product = mongoose.model('Products', productSchema)

module.exports = Product