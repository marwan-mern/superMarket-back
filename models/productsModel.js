import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    Name: String,
    Quantity: Number,
    Price:Number,
    type:String,
    QuantityOverMonth:Number,
    UpdatedToday:Boolean
})

const products = mongoose.model('products', productSchema);

export default products;