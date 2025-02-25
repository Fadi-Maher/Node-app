const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
app.use(express.urlencoded({ extended: true }));

 const myScema = require("./models/myDataSchema");

app.get('/', (req, res) => {
  res.sendFile("./views/home.html", { root: __dirname });
});

app.get('/feedBack.html', (req, res) => {
  res.send("<h1>User name is sent</h1>");
});

mongoose.connect('mongodb+srv://Fady:Fady123@cluster0.2dhey.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });

 app.post('/', async (req, res) => {
   
    console.log(req.body);   

  
    const article = new myScema(req.body);  
    await article.save(); 

    res.redirect("/feedBack.html");   
 
});

 
  

// const express = require('express');
// const app = express();
// const port = 3000;
// const mongoose = require('mongoose');
// app.use(express.urlencoded({ extended: true }));

// // Import the model (only once from the schema file)
// const Mydata = require("./models/myDataSchema");

// app.get('/', (req, res) => {
//   res.sendFile("./views/home.html", { root: __dirname });
// });

// mongoose.connect('mongodb+srv://Fady:Fady123@cluster0.2dhey.mongodb.net/all-data?retryWrites=true&w=majority')
//   .then(() => {
//     app.listen(port, () => {
//       console.log(`Example app listening on port ${port}`);
//     });
//   })
//   .catch((err) => {
//     console.log("Error connecting to MongoDB:", err);
//   });

// app.post("/", async (req, res) => {
//   try {
//     console.log(req.body);  // Log the request body to the console

//     const article = new Mydata(req.body);  // Create a new article using the data in req.body
//     await article.save();  // Save the article to the database
//     res.redirect("/");  // Redirect to the home page after saving
//   } catch (err) {
//     console.error("Error saving article:", err);
//     res.status(500).send("Error saving article");
//   }
// });
