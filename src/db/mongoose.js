const mongoose = require("mongoose");
const dbURL =
  "mongodb+srv://sameet:sameet123@cluster0.vjafa4o.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
