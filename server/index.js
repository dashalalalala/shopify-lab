const express = require("express");
const app = express();
const cors = require("cors");
const questionRoutes = require("./routes/routes");
const userRoute = require("./routes/userRoute");
const uniqid = require("uniqid");

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

app.use("/question", questionRoutes);
app.use("/user", userRoute);

// set port, listen for requests
const PORT = process.env.PORT || 8080;



// const multer = require("multer");

// // Configure multer for file upload
// const storage = multer.diskStorage({
// 	destination: function (req, file, cb) {
// 		cb(null, "static/"); // 'static' is the folder the file is saved
// 	},
// 	filename: function (req, file, cb) {
// 		cb(null, file.originalname); // file naming action
// 	},
// });
// const upload = multer({ storage: storage });

// app.post("/upload", upload.single("file"), (req, res) => {
// 	// the uploaded file is now available as req.file
// 	// sending back the file path as a response
// 	res.json({ logoUrl: `http://localhost:${PORT}/static/${req.file.filename}` });
// });

app.use("/static", express.static("static"));

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
