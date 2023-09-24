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

exports.login = (req, res) => {
    const { email, password } = req.body;
    if (!email || !password)
        return res.status(422).json({ error: "Please add email or password" });
    User.findOne({ email: email }).then((savedUser) => {
        console.log("User ID found in database.");
        if (!savedUser)
            return res.status(422).json({ error: "Invalid Email or password" });
        bcrypt.compare(password, savedUser.password)
            .then((doMatch) => {
            if (doMatch) {
                const token = jwt.sign({ _id: savedUser._id }, process.env.JWT_SECRET, {
                expiresIn: "1h",});
                const { _id, name, email } = savedUser;
                res.json({ token, user: { _id, name, email } });
                console.log("Login Done");
                return res;
            }
            else {
                return res.status(422).json({ error: "Invalid Email or password" });
            }
        })
            .catch((err) => {
            console.log(err);
        });
    });
}
