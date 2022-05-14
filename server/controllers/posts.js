import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";


export const getPosts = async (req, res) => {
    try {
        const postMessage = await PostMessage.find();
        console.log("getPost -> ", postMessage);
        res.status(200).json(postMessage);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    console.log("updating post ", req.params);
    //destructuring the id and renaming it to _id
    const { id: _id } = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(400).send("Invalid Object ID");
    }
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true });
    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id: _id } = req.params;
    console.log("delete post by ID controller id -> ", _id);
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(400).send("Invalid Object ID");
    }
    await PostMessage.findByIdAndDelete(_id);
    console.log("deletePost response from mongoose ");
    res.json({ message: "Post Deleted sucessfully" });
}