import { User } from "../models/User.model.js";


const getusers = async (req,res)=>{
    try {
        const users = await User.find();
        if(users){
            res.render("user",{users});
        }
        else{
            res.status(400).send("error occured")
        }
    } catch (error) {
        console.log(error)
    }
}
const createform = async (req,res)=>{
    res.render("createuser")
}
const editform = async(req,res)=>{
    const userId = req.params.id;
    const user = await User.findById(userId)
    res.render("edituser",{user:user})
}
const createUser = async(req,res)=>{
    try {
        const user = req.body;
        const newUser = await User.create(user);
        if(newUser){
            // res.status(200).send(newUser)
            res.redirect("/user/users")
        }
        else{
            res.status(400).send("error occured")
        }
    } catch (error) {
        console.log(error)
    }
}

const updateUser = async(req,res)=>{
    try {
        const {name,age,place} = req.body;
        const userId = req.params.id;
        // console.log(userId)
        if(!userId){
            return res.status(401).send("user id required")
        }
        const user = await User.findOne({_id: userId})
        // console.log(user)
        if(age){
            user.age=age
        }
        if(place){
            user.place = place;
        }
        if(name){
            user.name = name;
        }
        await user.save()
        res.redirect("/user/users")
    } catch (error) {
        console.log(error)
    }
}


const deleteUser = async (req,res)=>{
    try {
        const userId = req.params.id;
        const deleteduser = await User.findByIdAndDelete(userId);
        if(deleteduser){
            res.redirect("/user/users")
        }
        else{
            res.status(404).send("gaddari karbe")
        }
    } catch (error) {
        res.status(401).send(error)
    }
}


export {createUser, getusers, updateUser,deleteUser,createform,editform}