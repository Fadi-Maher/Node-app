const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 const articleSchema = new Schema({
    userName: String
});

 const myUser = mongoose.model("myData", articleSchema);

 module.exports = myUser;













// // models/myDataSchema.js
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// // Define schema 
// const articleSchema = new Schema({
//     userName: String
// });

// // Compile schema into model (This will automatically use "mydatas" as the collection name)
// const Mydata = mongoose.model("Mydata", articleSchema);  // The collection name will be "mydatas"

// // Export model
// module.exports = Mydata;
