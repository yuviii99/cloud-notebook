const jwt = require("jsonwebtoken");
const JWT_Secret = "Yuvi@is@a@good@boi";

const fetchuser = (req, res, next) => {
    // Get the user from the jwt token and append it to the req object
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error : 'Please authenticate using a valid token.'})
    }
    try {
        const string = jwt.verify(token, JWT_Secret);
        req.user = string.user;
        next();
    } catch (error) {
        res.status(401).send({error : 'Please authenticate using a valid token.'})
    }
}

module.exports = fetchuser;