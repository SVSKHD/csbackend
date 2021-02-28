const Contact  = require("../models/contact")
const {validationResult} = require("express-validator")
exports.contact=(req,res)=>{
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({
        error: errors.array()[0].msg
      });
    }
   const contact = new Contact(req.body);
   contact.save((err,contact)=>{
       if(err){
           return res.status(400).json({
               error:"Not able to save Contact in DB"
           })
       }
       res.json(contact)
   })
}