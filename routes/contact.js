const express = require("express")
const server = express.Router()
const {contact} = require("../controllers/contact")
const {check} = require("express-validator")

// post routes
server.post("/contact", 
[
 check("name","Name is required for the reference").isLength({ min: 3 }),
 check("email","Email is required").isEmail(),
 check("phone","Phone no is required").isLength({min:10}),
 check("description","please tell us your requirement and specify it briefly").isLength({ min : 10})
],
contact)



server.get("/contact",(req,res)=>{
    console.log("Contact route has been hit")
});

module.exports = server