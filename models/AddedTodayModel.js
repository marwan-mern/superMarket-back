import mongoose from 'mongoose';

const addedtodaySchema = mongoose.Schema({
    Name: String,
    Quantity: Number,
    Price:Number,
})

const addedtodays = mongoose.model('addedtodays', addedtodaySchema);

export default addedtodays;