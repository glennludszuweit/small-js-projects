//QUESTION CLASS
class Question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }

  correctAnswer(choice) {
    return choice === this.answer;
  }
}

//QUIZ CONTROLLER CLASS
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

//DATA
let questions = [
  new Question(
    'Inside which HTML element do we put the JavaScript?',
    ['script', 'js', 'scripting', 'javascript'],
    'script'
  ),
  new Question(
    'What is the correct syntax for referring to an external script called "xxx.js"?',
    [
      "<script name='xxx.js'>",
      "<script href='xxx.js'>",
      "<script src='xxx.js'>",
      "<link name='xxx.js'>",
    ],
    "<script src='xxx.js'>"
  ),
  new Question(
    'The external JavaScript file must contain the <script> tag.',
    ['False', 'True', 'Sometimes', 'Always'],
    'False'
  ),
  new Question(
    'How do you write "Hello World" in an alert box?',
    [
      'alert("Hello World")',
      'msg("Hello World")',
      'alertBox("Hello World")',
      'msgBox("Hello World")',
    ],
    'alert("Hello World")'
  ),
  new Question(
    'How do you call a function named "myFunction"?',
    [
      'call function myFunction()',
      'call myFunction()',
      'myFunction()',
      'invoke myFunction()',
    ],
    'myFunction()'
  ),
  new Question(
    'How to write an IF statement in JavaScript?',
    ['if i = 5', 'if(i == 5)', 'if i = 5 then', 'if i == 5 then'],
    'if(i == 5)'
  ),
  new Question(
    'How does a FOR loop start?',
    [
      'for i = 1 to 5',
      'for(i = 0; 1 <= 5)',
      'for(i <= 5; i++)',
      'for(i = 0; i <= 5; i++)',
    ],
    'for(i = 0; i <= 5; i++)'
  ),
  new Question(
    'What is the correct way to write a JavaScript array?',
    [
      'let colors = ("red"), ("blue")',
      'let colors = [red, blue]',
      'let colors = ["red","blue"]',
      'let colors = {red, blue}',
    ],
    'let colors = ["red","blue"]'
  ),
  new Question(
    'Which event occurs when the user clicks on an HTML element?',
    ['onclick', 'onchange', 'onmouseclick', 'onmouseover'],
    'onclick'
  ),
  new Question(
    'What is the main programming language of the web?',
    ['Java', 'PHP', 'C#', 'JS'],
    'JS'
  ),
];

let quiz = new Quiz(questions);

const populate = () => {
  if (quiz.isEnded()) {
    //show scores
    showScores();
  } else {
    //show question
    let questionDisplay = document.querySelector('.question');
    questionDisplay.textContent = quiz.getQuestionIndex().text;
    //show choices
    let choices = quiz.getQuestionIndex().choices;
    for (let i = 0; i < choices.length; i++) {
      let choice = document.querySelector('.choice-' + i);
      choice.textContent = choices[i];
    }
  }
};

populate();

const showScores = () => {};
