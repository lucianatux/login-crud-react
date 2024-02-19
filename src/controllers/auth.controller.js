import User from '../models/user.model.js';

export const register = async ( req, res) => {
    const {username, email, password} = req.body;

    try {
        //res.send("registering");
        const newUser = new User({username, email, password});
        const userSaved = await newUser.save();
        res.json(userSaved);
        console.log(userSaved);
    } catch (error) {
        console.log(error);
    }
    
};

export const login = ( req, res) => {
    res.send("login");
};