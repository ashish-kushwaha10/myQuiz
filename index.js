let readLine = require("readline-sync");
console.log("How well do you know me?");

let score = 0;
let quesAndAns = [
  {
    question: "Where do I live? ",
    answer: "Satna",
    options: ["Delhi", "Jaipur", "Satna", "Kanpur"]
  },
  {
    question: "What is my favorite sport? ",
    answer: "Cricket",
    options: ["Cricket", "Football", "Tennis", "Golf"]
  },
  {
    question: "What is my favorite colour? ",
    answer: "Blue",
    options: ["Black", "White", "Blue", "Green"]
  },
  {
    question: "Where do I want to go outside India? ",
    answer: "Switzerland",
    options: ["London", "Switzerland", "Canada", "Maldiv"]
  },
  {
    question: "Which is my favorite bike? ",
    answer: "BMW",
    options: ["KTM", "bullet", "Pulsure", "BMW"]
  }
]


function welcome() {
  let user = readLine.question("what is your name?")
  console.log(`welcome ${user}, let's start`);
}


function getScore(ques, ans, options) {
  console.log('Q.' + ques);
  for (let i = 0; i < options.length; i++) { // loop for options
    console.log(i + 1, ".", options[i])
  }
  let userAns = readLine.question("your option no.  ")

  if (options[userAns - 1].toUpperCase() == ans.toUpperCase()) {
    console.log("your Ans is correct")
    console.log("\n")
    score++;
  }
  else {
    console.log("Wrong Ans");
  }
}

function playQuiz() {
  for (let i = 0; i < quesAndAns.length; i++) { // loop for array of obj
    let currentQues = quesAndAns[i];
    getScore(currentQues.question, currentQues.answer, currentQues.options)
  }
}

function showScore() {
  console.log("your final Score is ", score)
}
welcome()
playQuiz()
showScore()