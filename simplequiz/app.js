//QUESTION
class Question {
  constructor(text, choices, answer) {
    this.question = text;
    this.choices = choices;
    this.answer = answer;
  }

  correctAnswer(choice) {
    return choice === this.answer;
  }
}

//QUIZ CONTROLLER
class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questionIndex = 0;
    this.questions = questions;
  }

  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }

  isEnded() {
    return this.questions.length === this.questionIndex;
  }

  guess(answer) {
    this.questionIndex++;
    if (this.getQuestionIndex().correctAnswer(answer)) {
      this.score++;
    }
  }
}
