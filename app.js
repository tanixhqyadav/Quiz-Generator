const questions=[{
    'ques': 'Jaipur is the capital of which state?',
    'a':'Uttar Pradesh',
    'b':'Assam',
    'c': 'Rajisthan',
    'd':'West Bengal',
    'correct':'c'
},{
    'ques': 'DBMS stands for ?',
    'a':'Database Management System',
    'b':'Data Manage System',
    'c': 'Design Manage System',
    'd':'None of these',
    'correct':'a'
},{
    'ques': 'Capital of Japan is ?',
    'a':'Tokyo',
    'b':'Bejiing',
    'c': 'Washing Ton DC',
    'd':'Delhi',
    'correct':'a'
}]
let index=0;
let totallength=questions.length;
let right=0,wrong=0;
const quebox=document.getElementById("quebox")
const opinput=document.querySelectorAll('.options')
const quesloading=()=>{
    if(index==totallength){
        return endQuiz();
    }
    reset();
    const data=questions[index];
    quebox.innerText=` ${index+1}) ${data.ques}`;
    opinput[0].nextElementSibling.innerText=data.a;
    opinput[1].nextElementSibling.innerText=data.b;
    opinput[2].nextElementSibling.innerText=data.c;
    opinput[3].nextElementSibling.innerText=data.d;
}
const submitque = () =>{
    const data=questions[index];
    const ans=getAnswer();
    if(ans===data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    quesloading();
    return;
}


const getAnswer=() =>{
    let answer;
    opinput.forEach(
        (input)=>{
            //this code is for getting the value that is selected by user
            if(input.checked){
                answer=input.value;
            }
        }
    )
    return  answer;
}
const reset = () =>{
    // this code is for reseting the question after submition of previous questions
    opinput.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}
const endQuiz= ()=>{
    document.querySelector(".ydv").innerHTML=`
    <h1> Quiz has Ended</h1>
    <h2> ${right} out of ${totallength} are correct </h2>
    `
}
quesloading();

// quix generator idea date 11 3 24
// no fo quesition utne he length ka array bane
//question seul mein phle question phir option and inlast correct options
// in sab ko save kradenge might be in leads dtorege or will find a solution then 