const question = document.querySelector('.question');
const submit = document.querySelector('button[type=submit]');
const scoreBox = document.querySelector('.view-score');
const quesAns = document.querySelector('.ques-ans');
const reset = document.getElementById('reset');
const scoreCount = document.getElementById('scores');

const quizDataBase = [
    {
        question: "What was the first commerically available computer processor?",
        0: "Intel 486SX", 
        1: "Intel 4004", 
        2: "TMS 1000", 
        3: "AMD AM386",
        ans: "1"
    },
     {
        question: "In computing, what does MIDI stand for?",
        0: "Musical Instrument Data Interface", 
        1: "Modular Interface of Digital Instruments", 
        2: "Musical Interface of Digital Instruments", 
        3: "Musical Instrument Digital Interface",
        ans: "3"
    },
     {
        question: "What was the first company to use the term &quot;Golden Master&quot;?",
        0: "Apple", 
        1: "IBM", 
        2: "Google", 
        3: "Micorsoft",
        ans: "0"
    } 
    // ,{
    //     question: "",
    //     a: "", 
    //     b: "", 
    //     c: "", 
    //     d: "",
    //     ans: "ans"
    // },
    // {
    //     question: "",
    //     a: "", 
    //     b: "", 
    //     c: "", 
    //     d: "",
    //     ans: "ans"
    // },
]
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
    if(i > 2)
    {
        scoreBox.style.display = 'block';
        quesAns.style.display = 'none';
        scoreCount.innerHTML = `${score}/${i}`;
    }else{
        scoreBox.style.display = 'none';
        quesAns.style.display = 'block';
    }
    quizHandler(quizDataBase);
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