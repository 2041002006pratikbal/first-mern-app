const express = require ("express");
const User = require("../models/userModel")
const router = express.Router();
const mongoose = require('mongoose'); // Ensure mongoose is imported
router.use(express.json());
//create 

router.post("/", async (req,res)=>{
    const { name, email, age} = req.body;
    try {
        const userAdded = await User.create({
            name:name,
            email:email,
            age:age,
        });
        res.status(201).json(userAdded);
    } catch (error) {
        console.log(error);
        res.status(400).json({error: error.message});
    }
});

//get
router.get("/",async (req,res)=> {
    try {
        const showAll = await User.find();
        res.status(210).json(showAll);
    } catch (error) {
        console.log(error);
        res.status(400).json({error: error.message});
    }
});

//get single user

router.get("/:id",async (req,res)=> {
    const {id}=req.params;
    try {
        const singleUser = await User.findById({_id:id});
        res.status(210).json(singleUser);
    } catch (error) {
        console.log(error);
        res.status(400).json({error: error.message});
    }
});

//delete
router.delete("/:id",async (req,res)=> {
    const {id}=req.params;
    /*// Validate the ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid ID format" });
    }*/
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        res.status(201).json(deletedUser);
    } catch (error) {
        console.log(error);
        res.status(400).json({error: error.message});
    }
});

//put/Update/Patch

router.patch("/:id", async (req,res) =>{
    const {id} = req.params;
    const {name, email, age} = req.body;

    try{
        const updateUser = await User.findByIdAndUpdate(id, req.body , 
        {
            new: true,
        });
        res.status(201).json(updateUser);
    }
    catch (error){
        console.log(error);
        res.status(400).json({error: error.message});
    }
});

module.exports = router;