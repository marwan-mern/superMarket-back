import gainModel from "../models/gainModel.js"


export const getgain =async (req, res) => {
    try {
        const TotalGain = await gainModel.find();
        res.status(200).json(TotalGain[0].TotalGain)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const updateGain = async (req, res) => {
    const { totalGain} = req.body;

    const updatedPost = await gainModel.findOneAndUpdate({_id:"62c87ac719d12ab6c031e692"},{ TotalGain:totalGain }, { new: true });
    res.json(updatedPost);
}
