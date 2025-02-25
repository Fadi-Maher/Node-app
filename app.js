const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
const myUser = require("./models/myDataSchema");
app.set("view engine", "ejs");

app.get("/", (req, res) => {

myUser
  .findOne()
  .then((result) => {
    console.log(result);
    res.render("home", { mytitle: "test home page" , myUsers: result});

  })
  .catch((err) => {
    err.message;
  });
});
 
app.get("/feedBack.html", (req, res) => {
  res.send("<h1>User name is sent</h1>");
});

mongoose
  .connect(
    "mongodb+srv://Fady:Fady123@cluster0.2dhey.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });

app.post("/", async (req, res) => {
  console.log(req.body);

  const article = new myUser(req.body);
  await article.save();

  res.redirect("/feedBack.html");
});
