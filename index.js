const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./Routes/auth");
const userRoute = require("./Routes/users");
const movieRoute = require("./Routes/movies");
const listRoute = require("./Routes/lists");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful!"))
  .catch((err) => console.log(err));


app.use(express.json());

app.use("/api/auth", authRoute);

app.use("/api/users", userRoute);

app.use("/api/movies", movieRoute);

app.use("/api/lists", listRoute);

app.use(express.static(path.join(__dirname, "/Frontend/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/Frontend/build', 'index.html'));
});

app.listen(8800 || process.env.PORT, () => {
  console.log("Backend server is running...");
});
