const quizDB=[
    {
        question:"Q1: What is full form of html",
        a: "Hello to my Land",
        b: "Hey Text Markup Language",
        c: "Hyper Text Markup Language",
        d: "Hyper Text Makeup Language",
        ans:"ans3"
    },
    {
        question:"Q2: Javascript is an _______ language?",
        a: "Object-Oriented",
        b: "Object based",
        c: "Procedural",
        d: "None",
        ans:"ans1"
    },
    {
        question:"Q3: Which of the following keywords is used to define a variable in Javascript?",
        a: "let",
        b: "var",
        c: "Above Both A and B",
        d: "None",
        ans:"ans3"
    },
    {
        question:"Q4: ++ operator in Java Script is ____ Operator.",
        a: "Unary",
        b: "Positive",
        c: "Increment",
        d: "Addition",
        ans:"ans1"
    },
    {
        question:"Q5: A translator is described as ________ software.",
        a: "Application      ",
        b: "System",
        c: "Utility",
        d: "Open Source",
        ans:"ans2"
    },
    {
        question:"Q6: _______class provide an interface for invoking java script methods and examining java script properties.",
        a: "JS object",
        b: "Java Script file",
        c: "JQuery",
        d: "Java Wrapper",
        ans:"ans1"
    },
    {
        question:"Q7: Navigator Java script is also called _______side java script.",
        a: "client",
        b: "Server ",
        c: " Website  ",
        d: "Live wire",
        ans:"ans1"
    },
    {
        question:"Q8: _________attribute can hold the java script version.",
        a: "var",
        b: "language",
        c: "script",
        d: "type",
        ans:"ans2"
    },
    {
        question:"Q9: If we want to use a nice green dotted border around an image, which css property are we going to use?",
        a: " border-line",
        b: " border-style",
        c: "border-decoration",
        d: "border-color",
        ans:"ans2"
    },
    {
        question:"Q10: If we want to place text around an image, which CSS property should we use?",
        a: " push",
        b: "float",
        c: "align",
        d: "wrap",
        ans:"ans2"
    },
];
const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');
const answere=document.querySelectorAll('.answere');
const showScore=document.querySelector('#showscore');



let questioncount=0;
let score=0;
const loadQuestion=()=>{
      questionList=quizDB[questioncount];
      question.innerHTML=questionList.question;
      option1.innerHTML=questionList.a;
      option2.innerHTML=questionList.b;
      option3.innerHTML=questionList.c;
      option4.innerHTML=questionList.d;
}
loadQuestion();



const getCheckAnswer=()=>{
    let answer;
    answere.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer=curAnsElem.id;
        }
    });
    return answer;
};
const deselectAll=()=>{
    answere.forEach((curAnsElem)=>curAnsElem.checked =false);
}
submit.addEventListener('click',()=>{
  const checkedAnswer= getCheckAnswer();
  console.log(checkedAnswer);

  if(checkedAnswer==quizDB[questioncount].ans){
      score++;
  }
   questioncount++
   deselectAll();
  if(questioncount<quizDB.length){
    loadQuestion();
  }
  else{
       showScore.innerHTML=`<h3>You score ${score}/${quizDB.length} </h3>
       <button class="btn" onclick="location.reload()">Play Again</button>`;
       showScore.classList.remove('scoreArea');
  }
});