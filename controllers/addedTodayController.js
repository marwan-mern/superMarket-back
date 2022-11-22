import AddedTodayModel from "../models/AddedTodayModel.js"


export const AddTodayMed = async (req, res) => {
    const { _id , name , Quantity , Price} = req.body;

    const newPost = new AddedTodayModel({_id:_id , Name:name ,Quantity:Quantity , Price:Price })
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const GetAddedToday =async (req, res) => {
    try {
        const AddedToday = await AddedTodayModel.find();
        res.status(200).json(AddedToday)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const DeleteAddedToday =async (req, res) => {
    const { id } = req.params;
    try {
        await AddedTodayModel.findByIdAndRemove(id);
        res.json({ message: "Post deleted successfully."});
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}