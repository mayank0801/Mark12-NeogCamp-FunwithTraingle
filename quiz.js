const quizForm=document.querySelector('.quiz-form');
const submitBtn=document.querySelector("#btn-check");
const output=document.querySelector("#output");

const correctAns=["3","30"]
function calcScore(){
    let score=0;
    let index=0;
    const formdata=new FormData(quizForm);
    // console.log(formdata)
    var count=0;
    for(let value of formdata.values()){
       count++; 
    }
    if(count<2){
        output.innerText="Mandatory to attempt all Question";
    }
    else{ 
        
        for(let value of formdata.values())
        {
            if(value===correctAns[index])
            {
                score++;
            }
    
        index++;
        }
        output.innerText=`Your Score `+score;
    }
   

}
submitBtn.addEventListener("click",calcScore);