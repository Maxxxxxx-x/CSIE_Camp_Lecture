const {} = require("./../Modules/Database");
const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", async (req, res) => {
    return res.sendFile(path.join(__dirname, "signup.html")); 
})

router.post("/", async (req, res) => {
    const { username, email, pw } = req.body;
    const SignupStatus = await Signup(username, email, pw)
    if (SignupStatus[0]){
        return res.status(200).send(`注冊成功!`);
    }
    return res.status(401).send("帳號已存在!");
});

module.exports = router;