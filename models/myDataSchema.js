const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 const articleSchema = new Schema({
    userName: String
});

 const myUser = mongoose.model("myData", articleSchema);

 module.exports = myUser;











 