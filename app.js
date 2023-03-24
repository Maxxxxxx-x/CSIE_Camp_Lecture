const { PORT } = require("./config");

const express = require("express");
const app = express();

const login = require("./routes/login");
const signup= require("./routes/signup");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", async (req, res) => {
    return res.redirect("/login");
})

app.use("/login", login);
app.use("/signup", signup);

app.get("*", (req, res) => {
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress
    console.log(ip)
    return res.status(404).send("URL not found!")
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})