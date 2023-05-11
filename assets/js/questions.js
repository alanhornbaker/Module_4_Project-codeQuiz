// Define the questions and answers
const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      "Hyper Text Markup Language",
      "High Tech Markup Language",
      "Hyperlink Text Markup Language",
      "Hyperlinking Text Made Live",
    ],
    correctAnswer: "Hyper Text Markup Language",
  },
  {
    question: "What is the correct HTML element for the largest heading?",
    answers: ["h1", "h6", "heading", "header"],
    correctAnswer: "h1",
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    answers: ["break", "lb", "br", "newline"],
    correctAnswer: "br",
  },
  {
    question: "What is the correct HTML for creating a hyperlink?",
    answers: [
      '<a href="http://www.example.com">Example</a>',
      '<a name="http://www.example.com">Example</a>',
      '<a url="http://www.example.com">Example</a>',
      "<a>http://www.example.com</a>",
    ],
    correctAnswer: '<a href="http://www.example.com">Example</a>',
  },
  {
    question: "What is the correct HTML for inserting an image?",
    answers: [
      '<img src="image.gif" alt="MyImage">',
      '<img href="image.gif" alt="MyImage">',
      '<img alt="MyImage">image.gif</img>',
      '<image src="image.gif" alt="MyImage">',
    ],
    correctAnswer: '<img src="image.gif" alt="MyImage">',
  },
  {
    question: "What is the correct HTML for creating a checkbox?",
    answers: [
      '<input type="checkbox">',
      '<input type="check">',
      "<checkbox>",
      "<check>",
    ],
    correctAnswer: '<input type="checkbox">',
  },
  {
    question: "What is the correct HTML for creating a drop-down list?",
    answers: ['<input type="dropdown">', "<select>", "<list>", "<dropdown>"],
    correctAnswer: "<select>",
  },
  {
    question: "What is the correct HTML for making a text input field?",
    answers: [
      "<textfield>",
      '<input type="text">',
      "<textinput>",
      '<input type="textfield">',
    ],
    correctAnswer: '<input type="text">',
  },
  {
    question: "What is the correct HTML for making a text area?",
    answers: [
      '<input type="textarea">',
      '<input type="text" area>',
      "<textarea>",
      "<text>",
    ],
    correctAnswer: "<textarea>",
  },
  {
    question: "What is the correct HTML for creating a table?",
    answers: ["<table>", "<t>", "<tab>", "<tbl>"],
    correctAnswer: "<table>",
  },
  {
    question: "What does CSS stand for?",
    answers: [
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Computer Style Sheets",
      "Crazy Style Sheets",
    ],
    correctAnswer: "Cascading Style Sheets",
  },
  {
    question: "Which property is used to change the font of an element?",
    answers: ["color", "font-style", "font-family", "text-decoration"],
    correctAnswer: "font-family",
  },
  {
    question:
      "Which property is used to change the background color of an element?",
    answers: ["background-color", "color", "background-image", "background"],
    correctAnswer: "background-color",
  },
  {
    question: "Which property is used to add a border to an element?",
    answers: ["border", "border-style", "border-color", "all of the above"],
    correctAnswer: "all of the above",
  },
  {
    question: "Which property is used to change the size of text?",
    answers: ["font-size", "text-size", "font-style", "text-font"],
    correctAnswer: "font-size",
  },
  {
    question: "Which property is used to align text?",
    answers: ["text-align", "text-style", "font-style", "align-text"],
    correctAnswer: "text-align",
  },
  {
    question:
      "Which property is used to change the spacing between lines of text?",
    answers: ["line-height", "text-height", "spacing-height", "font-height"],
    correctAnswer: "line-height",
  },
  {
    question: "Which property is used to change the color of text?",
    answers: ["color", "font-color", "text-color", "text-style"],
    correctAnswer: "color",
  },
  {
    question: "Which property is used to add a shadow to text?",
    answers: ["text-shadow", "font-shadow", "shadow-text", "box-shadow"],
    correctAnswer: "text-shadow",
  },
  {
    question: "Which property is used to change the size of an element?",
    answers: ["height and width", "size", "dimension", "all of the above"],
    correctAnswer: "height and width",
  },
  {
    question: "What does 'NaN' stand for in JavaScript?",
    answers: ["Not a Number", "No answer", "Never again", "Nothing at all"],
    correctAnswer: "Not a Number",
  },
  {
    question:
      "What is the correct syntax for creating a function in JavaScript?",
    answers: [
      "function:myFunction()",
      "function myFunction()",
      "create myFunction()",
      "myFunction()",
    ],
    correctAnswer: "function myFunction()",
  },
  {
    question:
      "Which method would you use to remove the last element from an array?",
    answers: ["pop()", "push()", "shift()", "unshift()"],
    correctAnswer: "pop()",
  },
  {
    question: "What does 'DOM' stand for?",
    answers: [
      "Document Object Model",
      "Doughnuts on Mondays",
      "Distributed Object Management",
      "Dynamic Object Model",
    ],
    correctAnswer: "Document Object Model",
  },
  {
    question: "What keyword is used to define a variable in JavaScript?",
    answers: ["let", "var", "const", "both let and var"],
    correctAnswer: "both let and var",
  },
  {
    question: "What does 'JSON' stand for?",
    answers: [
      "JavaScript Object Notation",
      "Java Standard Object Notation",
      "JavaScript Object Naming",
      "Java Standard Object Naming",
    ],
    correctAnswer: "JavaScript Object Notation",
  },
  {
    question: "What is the result of 10 + '10' in JavaScript?",
    answers: ["20", "1010", "100", "undefined"],
    correctAnswer: "1010",
  },
  {
    question:
      "What is the correct way to check if a variable is not equal to a certain value?",
    answers: ["!==", "===", "==", "="],
    correctAnswer: "!==",
  },
  {
    question:
      "What method would you use to round a number to the nearest integer in JavaScript?",
    answers: ["Math.floor()", "Math.round()", "Math.ceil()", "Math.random()"],
    correctAnswer: "Math.round()",
  },
  {
    question: "What keyword is used to exit a loop in JavaScript?",
    answers: ["break", "return", "continue", "exit"],
    correctAnswer: "break",
  },
];

// export { questions };
