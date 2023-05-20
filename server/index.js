const express = require("express");
const cors = require("cors");

// create express app
const app = express();

// use CORS middleware
app.use(cors());

// a simple route
app.get("/", (req, res) => {
	res.send("Hello World!");
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
