const express = require("express");
const mongoose = require("mongoose");
const modelsModule = require("./models.js");
const UserSchema = modelsModule.UserSchema;
const ClubSchema = modelsModule.ClubSchema;
const EventSchema = modelsModule.EventSchema;
const OfferSchema = modelsModule.OfferSchema;
const ReviewSchema = modelsModule.ReviewSchema;
const ReservationSchema = modelsModule.ReservationSchema;
require('dotenv').config()
const app = express();
app.use(express.json())

const port = process.env.PORT;
const uri = process.env.ATLAS_CONNECTION

mongoose.connect(uri, {})

const connection = mongoose.connection
connection.once('open', () => {
    console.log("DB connected.");
})

<<<<<<< HEAD
app.get("/api/v1/allUsers", async (req, res) => {
=======
app.get("/api/v1/UserGetAll", async (req, res) => {
>>>>>>> 5aa6a01e5ebe6ea1386ded9730c6d25a8249873c
  await UserSchema.find({}, (err, result) => {
    console.log("users from db: ", result);
    res.send(result);
  }).clone();
});

<<<<<<< HEAD
app.get("/api/v1/user", async (req, res) => {///get by name
  await UserSchema.find({uid: req.body.uid}, (err, result) => {
=======
app.get("/api/v1/UserGet", async (req, res) => {///get by name
  await UserSchema.find({name: req.body.name}, (err, result) => {
>>>>>>> 5aa6a01e5ebe6ea1386ded9730c6d25a8249873c
    console.log("user from db: ", result);
    res.send(result);
  }).clone();
});

<<<<<<< HEAD
app.patch("/api/v1/user", async (req, res) => {
  try {
    console.log("req.body: ", req.body);

    await UserSchema.updateOne({ uid: req.body.uid }, {
=======
app.post("/api/v1/UserUpdate", async (req, res) => {
  try {
    console.log("req.body: ", req.body);

    await UserSchema.updateOne({ name: req.body.oldname }, {
>>>>>>> 5aa6a01e5ebe6ea1386ded9730c6d25a8249873c
       name: req.body.name,
       type: req.body.type,
       address: req.body.address,
       profileImage: req.body.profileImage
      }, function(err, result) {}).clone();
    res.send("User updated");
  } catch (err) {
    console.log("error: ", err);
  }
});

<<<<<<< HEAD
app.delete("/api/v1/user", async (req, res) => {
  try {
    console.log("req.body: ", req.body);

    await UserSchema.deleteOne({ uid: req.body.uid }, (err) => {
=======
app.get("/api/v1/UserDeleteAll", async (req, res) => {
  await UserSchema.deleteMany({}, (err) => {
    if(err) console.log("Error deleting users.");
  }).clone();
  res.send("UsersDeleted");
});

app.post("/api/v1/UserDelete", async (req, res) => {
  try {
    console.log("req.body: ", req.body);

    await UserSchema.deleteOne({ name: req.body.name }, (err) => {
>>>>>>> 5aa6a01e5ebe6ea1386ded9730c6d25a8249873c
      if(err) console.log("Error deleting user.");
    }).clone();
    res.send("User deleted");
  } catch (err) {
    console.log("error: ", err);
  }
});

<<<<<<< HEAD
app.post("/api/v1/user", async (req, res) => {
=======
app.post("/api/v1/UserCreate", async (req, res) => {
>>>>>>> 5aa6a01e5ebe6ea1386ded9730c6d25a8249873c
  try {
    console.log("req.body: ", req.body);

    const newUser = new UserSchema({
      uid: req.body.uid,
      name: req.body.name,
      type: req.body.type,
      address: req.body.address,
      profileImage: req.body.profileImage
    });

    await UserSchema.create(newUser);
    res.send("User added");
  } catch (err) {
    console.log("error: ", err);
  }
});

<<<<<<< HEAD
app.post("/api/v1/club", async (req, res) => {
=======
app.post("/api/v1/Clubs", async (req, res) => {
>>>>>>> 5aa6a01e5ebe6ea1386ded9730c6d25a8249873c
  try {
    console.log("req.body: ", req.body);

    const newClub = new ClubSchema({
      name: req.body.name,
      ownerId: req.body.ownerId,
      address: req.body.address,
      images: req.body.images,
      foundationDate: req.body.foundationDate,
      musicGenre: req.body.musicGenre,
      city: req.body.city,
      approved: req.body.approved
    });

    await ClubSchema.create(newClub);
    res.send("Club added");
  } catch (err) {
    console.log("error: ", err);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on localhost:${port}`);
});


