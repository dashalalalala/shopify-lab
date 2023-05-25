const express = require("express");
const app = express();
const cors = require("cors");
const questionRoutes = require("./routes/routes");

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  if (
    req.method == "POST" &&
    req.headers["content-type"] != "application/json"
  ) {
    return res.status(400).send("Hey send me the proper JSON file!");
  }
  next();
});

app.use("/", questionRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
