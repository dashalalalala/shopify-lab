const { channel } = require("diagnostics_channel");
const express = require("express");
const router = express.Router();
const fs = require("fs");
const uniqid = require("uniqid");

function readQuestions() {
  const questionsJSON = fs.readFileSync("./data/questions.json");
  const parseQuestions = JSON.parse(questionsJSON);
  return parseQuestions;
}

router.get("/", (req, res, next) => {
  res.json(readQuestions());
});

router.get("/questions/:id", (req, res, next) => {
  const getModule = readQuestions();

  const singleModule = getModule.find((list) => 
  list.id === req.params.id)
  res.send(singleModule);
})

router.post("/", (req, res, next) => {
  const newAnswer = {
    id: uniqid(),
    question: req.body.questionText,
    answer: req.body.answerText,
    attempts: req.body.attempts,
  };

  const answer = readQuestions();
  answer.push(newAnswer);
  fs.writeFileSync("./data/questions.json", JSON.stringify(answer));
  res.status(200).json(newAnswer);
});

module.exports = router;
