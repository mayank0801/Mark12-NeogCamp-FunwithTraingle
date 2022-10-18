const angleOne=document.querySelector("#angle-One");
const angleTwo=document.querySelector("#angle-Two");
const angleThree=document.querySelector("#angle-Three");
const btnCheck=document.querySelector("#btn-check")





function checkTraingle(){
    console.log("clicked");
    var val1=Number(angleOne.value);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    var val2=Number(angleTwo.value);
    var val3=Number(angleThree.value);
    if(val1<=0||val2<=0||val3<=0)
    {
        output.innerText="Invalid Input";
    }
    else if(val1+val2+val3===180){
        console.log("Yayy! Its Traingle")
        output.innerText="Yayy! Its Traingle";
    }
    else{
        output.innerText="Nope its Not Traingle"
    }
}
btnCheck.addEventListener("click",checkTraingle)
