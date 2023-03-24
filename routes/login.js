const { Login } = require("./../Modules/Database");

const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", async (req, res) => {
    return res.sendFile(path.join(__dirname, "login.html"));
})


router.post("/", async (req, res) => {
    const { email, pw } = req.body;
    const LoginStatus = await Login(email, pw)
    if (LoginStatus){
        return res.status(200).send(`您好, ${LoginStatus.Username}`);
    }
    return res.status(401).send("帳號不存在!");
});

module.exports = router;