import mongoose from 'mongoose';

const gainSchema = mongoose.Schema({
    TotalGain: Number,
})

const totalgains = mongoose.model('totalgains', gainSchema);

export default totalgains;