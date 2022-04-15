const question = document.querySelector('.question');
const submit = document.querySelector('button[type=submit]');
const scoreBox = document.querySelector('.view-score');
const quesAns = document.querySelector('.ques-ans');
const reset = document.getElementById('reset');
const scoreCount = document.getElementById('scores');

const quizDataBase = [
    {
        question: "Q.1) What does HTML stand for?",
        0: "Hyperlinks and Text Markup Language", 
        1: "Hyper Text Markup Language", 
        2: "Home Tool Markup Language", 
        3: "Hyper Text Makeup Language",
        ans: "1"
    },
     {
        question: "Q.2) Choose the correct HTML tag for the largest heading",
        0: "&lt;heading&gt;", 
        1: "&lt;h6&gt;", 
        2: "&lt;head&gt;", 
        3: "&lth1&gt;",
        ans: "1"
    },
     {
        question: "Q.3) What is the correct HTML tag for inserting a line break?",
        0: "&lt;br&gt;", 
        1: "&lt;lb&gt;", 
        2: "&lt;break&gt;", 
        3: "&lt;BR&gt;",
        ans: "0"
    } ,
    {
        question: "Q.4) What is the correct HTML for creating a hyperlink?",
        0: "&lt;a url=\"http:www.w3schools.com\">W3Schools.com&lt;/a&gt;", 
        1: "&lt;a name=\"http://www.w3schools.com\">W3Schools.com&lt;/a&gt;", 
        2: "&lt;a href=\"http://www.w3schools.com\">W3Schools&lt;/a&gt;", 
        3: "&lt;a>http://www.w3schools.com&lt;/a&gt;",
        ans: "2"
    },
    {
        question: "Q.5) How can you make a numbered list?",
        0: "&lt;ol&gt;", 
        1: "&lt;ul&gt;", 
        2: "&lt;dl&gt;", 
        3: "&lt;list&gt;",
        ans: "0"
    },
]
let numOfQues = 5;
let i = 0;
let score = 0;
quizHandler(quizDataBase);


function quizHandler(dataBase) {
    question.innerHTML = dataBase[i].question;
    for (let g = 0; g <= 3; g++) {
        let option = document.querySelector(`label[for=option${g+1}]`);
        option.innerHTML = dataBase[i][g];
    }
}

function updateQuestion() {
    i++;
    if(i >= numOfQues)
    {
        displayScore();
    }else{
        scoreBox.style.display = 'none';
        quesAns.style.display = 'block';
         quizHandler(quizDataBase);
    }
   
}

function displayScore() {
        scoreBox.style.display = 'block';
        quesAns.style.display = 'none';
        switch (score) {
            case 1:
                 scoreCount.innerHTML = `&#11088;<br> ${score}/${i}`;
                break;
            case 2:
                scoreCount.innerHTML = `&#11088;&#11088;<br> ${score}/${i}`;
                break;
            case 3:
                scoreCount.innerHTML = `&#11088;&#11088;&#11088;<br> ${score}/${i}`;
                break;
            case 4:
                scoreCount.innerHTML = `&#11088;&#11088;&#11088;&#11088;<br> ${score}/${i}`;
                break;
            case 5:
                scoreCount.innerHTML = `&#11088;&#11088;&#11088;&#11088;&#11088;<br> ${score}/${i}`;
                break;
            default:
                scoreCount.innerHTML = `&#128123;<br> ${score}/${i}`;
        }       
}       

function evalScore(){
    let flag = false;
    for (let g = 0; g <= 3; g++) {
        let option = document.querySelector(`#option${g+1}`);
        if(option.checked){
            if(g == quizDataBase[i].ans)
                score++;
            option.checked = false;
            flag = true;
        }

    }
    if(flag == false)
      window.alert('Please Choose option !');
    else
     updateQuestion();
}


submit.addEventListener('click', evalScore);

reset.addEventListener('click', () => {
    i = -1;
    score = 0;
    updateQuestion();
});