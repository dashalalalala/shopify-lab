const { channel } = require("diagnostics_channel");
const express = require("express");
const router = express.Router();
const fs = require("fs");

function readUser() {
	const userJSON = fs.readFileSync("./data/testUser.json");
	const parseUser = JSON.parse(userJSON);
	return parseUser;
}

router.get("/", (req, res, next) => {
	res.json(readUser());
});

//GET Individual User Data
router.get("/:userId", (req, res) => {
	const users = readUser();
	const singleUser = users.find((user) => user.id === req.params.userId);
	res.json(singleUser);
});

router.put("/:userId/logo", (req, res) => {
	try {
		const { userId } = req.params;
		const { logoUrl } = req.body;

		const users = readUser();

		const user = users.find((user) => user.id === userId);

		if (user) {
			// Only update logoUrl if it is included in the request body
			if (logoUrl) {
				user.logoUrl = logoUrl;
			} else {
				return res.status(400).send("No logoUrl in request body");
			}

			fs.writeFileSync("./data/testUser.json", JSON.stringify(users));

			res.send("Logo updated successfully");
		} else {
			res.status(404).send("User not found");
		}
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal server error");
	}
});

// const path = require("path");

// router.put("/:userId/logo", (req, res) => {
// 	try {
// 		const { userId } = req.params;
// 		const { logoUrl } = req.body;

// 		const users = readUser();

// 		const user = users.find((user) => user.id === userId);

// 		if (user) {
// 			// Only update logoUrl if it is included in the request body
// 			if (logoUrl) {
// 				user.logoUrl = logoUrl;
// 			} else {
// 				return res.status(400).send("No logoUrl in request body");
// 			}

// 			fs.writeFileSync(
// 				path.join(__dirname, "./data/testUser.json"),
// 				JSON.stringify(users)
// 			);

// 			res.send("Logo updated successfully");
// 		} else {
// 			res.status(404).send("User not found");
// 		}
// 	} catch (error) {
// 		console.error(error);
// 		res.status(500).send("Internal server error");
// 	}
// });

module.exports = router;
