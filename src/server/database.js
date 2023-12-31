const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGOURI;

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: "starwars",
  })
  .then(() => console.log("Connected to Mongo DB."))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const personSchema = new Schema({
  id: Number,
  name: { type: String, required: true },
  height: Number,
  hair_color: String,
  films: Array
});

const Person = mongoose.model("person", personSchema);

const filmSchema = new Schema({
  id: Number,
  title: String,
  director: String,
  url: String
});

const Film = mongoose.model("film", filmSchema);

module.exports = {
  Person,
  Film,
};