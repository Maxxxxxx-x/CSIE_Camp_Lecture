const sqlite = require("sqlite3");

async function Login(Email, Password){
    
}

async function AccountExists(Email){

}

async function Signup(Email, Username, Password){
    if (AccountExists){
        return [false, "AccountExists"]
    }
}

module.exports = {
    Signup: Signup,
    Login: Login
}