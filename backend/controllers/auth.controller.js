const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");


exports.register = (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
        return res.status(422).json({ error: "Please add all the fields" });
    User.findOne({ email: email })
        .then((savedUser) => {
        
        if (savedUser)
            return res.status(422).json({ error: "User already exists with that email" });
            bcrypt.hash(password, 12).then((hashedpassword) => {
            const user = new User({
                name,
                email,
                password: hashedpassword,
                followers: [],
                following: [],
                posts: [],
            });
            user
                .save()
                .then((user) => {
                res.json({ message: "saved successfully" });
            })
                .catch((err) => {
                console.log(err);
            });
        });
    })
        .catch((err) => {
        console.log(err);
    });
}

exports.login = async(req, res) => {
    console.log("Login called");
    console.log(req.body);
    const {email, password} = req.body;
    if (!email || !password)
        return res.status(422).json({ error: "Please add email or password" });
 
    
    try{
        const user = await User.findOne({email});
        if(!user) {
            return res.status(422).json({ error: "Email-id Not Found" });
        }
        const correctPassword = await bcrypt.compare(password,user.password);
        if(!correctPassword){
            return res.status(422).json({ error: "Invalid password" });
        }
        const token = jwt.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:'1h'});
        // const {_id,name,email} = savedUser;
        //res.json({token});
        // user.status='online';
        // await user.save();
        // console.log(user);
        // console.log("Login Done");
        res.status(200).json(user);
    }
    catch(e)
    {
        console.log("Inside error",e)
        res.status(400).send()
    }

    // User.findOne({ email: email }).then((savedUser) => {
    //     console.log("User ID found in database.");
    //     if (!savedUser)
    //         return res.status(422).json({ error: "Invalid Email or password" });
    //     bcrypt.compare(password, savedUser.password)
    //         .then((doMatch) => {
    //         if (doMatch) {
    //             const user1 = User.findById(savedUser._id);
    //             const token = jwt.sign({ _id: savedUser._id }, process.env.JWT_SECRET, {
    //             expiresIn: "1h",});
    //             const { _id, name, email } = savedUser;
    //             res.json({ token, user: { _id, name, email } });
    //             console.log("Login Done");
    //             return res.status(200).json(user1);
    //         }
    //         else {
    //             return res.status(422).json({ error: "Invalid Email or password" });
    //         }
    //     })
    //         .catch((err) => {
    //         console.log(err);
    //     });
    // });
}


exports.validateToken = (req, res) => {
    const token = req.header("x-auth-token");
    if (!token)
        return res.json(false);
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if (!verified)
            return res.json(false);
        return res.json(true);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}