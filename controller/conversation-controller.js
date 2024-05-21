
import e from "express"
import Conversation from "../model/Conversation.js"


export const newConversation = async(req, response) =>{
 try {
    const senderId = req.body.senderId
    const receiverId =  req.body.receiverId

    const exist =  await Conversation.findOne({members :{$all : [receiverId , senderId]}})

    if(exist){
        return response.status(200).json('conversation already  exist');
    }

    const newConversation = new Conversation ({
        members:[senderId , receiverId]
    })

   await  newConversation.save();

    return response.status(200).json("conversation Saved Successfully");
 } catch (error) {
    return response.status(500).json(error.message);
 }
}