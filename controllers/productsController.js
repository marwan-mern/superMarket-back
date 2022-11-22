import MedsModel from "../models/productsModel.js"


export const getmeds =async (req, res) => {
    try {
        const Medecins = await MedsModel.find().sort({"Name":1});
        res.status(200).json(Medecins)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}
export const Addmeds =async (req, res) => {
    const { Name , Quantity , Price , type , QuantityOverMonth} = req.body;

    const newMedecine = new MedsModel({ Name:Name ,Quantity:Quantity ,Price:Price, type:type,QuantityOverMonth:QuantityOverMonth, UpdatedToday:false })
    try {
        await newMedecine.save()
        res.status(201).json(newMedecine)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const Deletemeds =async (req, res) => {
    const { NameofDeletedItem } = req.params;
    try {
        const Res= await MedsModel.findOneAndRemove({Name:NameofDeletedItem});
        res.json({ message: Res });
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}


export const ResetSingleProduct = async (req, res) => {
    const { id } = req.params;
    const { QuantityOverMonth} = req.body;

    const updatedPost = await MedsModel.findByIdAndUpdate(id,{ QuantityOverMonth:QuantityOverMonth }, { new: true });
    res.json(updatedPost);
}

export const BuyProduct = async (req, res) => {
    const { id } = req.params;
    const { Quantity} = req.body;

    const updatedPost = await MedsModel.findByIdAndUpdate(id,{ Quantity:Quantity }, { new: true });
    res.json(updatedPost);
}


export const AddToStock = async (req, res) => {
    const { id } = req.params;
    const { Quantity , QuantityOverMonth} = req.body;

    const updatedPost = await MedsModel.findByIdAndUpdate(id,{ Quantity:Quantity , QuantityOverMonth:QuantityOverMonth }, { new: true });
    res.json(updatedPost);
}


export const updateAddedToday = async (req, res) => {
    const { id } = req.params;

    const updatedPost = await MedsModel.findByIdAndUpdate(id,{ UpdatedToday:true }, { new: true });
    res.json(updatedPost);
}

export const updateAddedTodayFalse = async (req, res) => {
    const { id } = req.params;

    const updatedPost = await MedsModel.findByIdAndUpdate(id,{ UpdatedToday:false }, { new: true });
    res.json(updatedPost);
}

export const getSearch =async (req, res) => {
    const { searchItem } = req.query;
    try {
        const Medecins = await MedsModel.find({Name: new RegExp(searchItem,"i")});
        res.status(200).json(Medecins)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}