const question = require('./question')
const fs = require('fs')

// fs.writeFileSync("question.json",JSON.stringify({questions:[]}))
questionsJson.questions.push(question())

fs.writeFileSync("question.json", JSON.stringify(questionsJson))