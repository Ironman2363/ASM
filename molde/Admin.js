const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Admin = new Schema({
    email:{
       type:String
    },
    passWord: {
      type:String
   } ,
    name: {
      type:String
   } ,
    image:{
      type:String
   } 

  });

module.exports = mongoose.model("Admin",Admin);